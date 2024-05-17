'use client';

import { useState, useRef, useEffect } from 'react';

import EventsList from '@/components/EventsList';

export default function Home() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const observerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASE_URL}?page=${page}`, { signal });
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        setItems(prevItems => [...prevItems, ...data]);
        setHasMore(data.length > 0);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }

      return () => controller.abort();
    };

    fetchItems();
  }, [page]);

  useEffect(() => {
    const currentObserverRef = observerRef.current;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !isLoading && hasMore) {
          setPage(prevPage => prevPage + 1);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }
    );

    if (currentObserverRef) {
      observer.observe(currentObserverRef);
    }

    return () => {
      if (currentObserverRef) {
        observer.unobserve(currentObserverRef);
      }
    };
  }, [hasMore, isLoading]);

  return (
    <section className="py-16">
      <h1 className="text-4xl mb-8">Events</h1>

      <EventsList events={items} />

      <div ref={observerRef} style={{ height: '20px' }}></div>
    </section>
  );
}
