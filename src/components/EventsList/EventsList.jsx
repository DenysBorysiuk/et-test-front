'use client';

import { useEffect, useState } from 'react';

import EventCard from '@/components/EventCard';
import SortBar from '@/components/SortBar';

const EventsList = ({ events }) => {
  const [sortedEvents, setSortedEvents] = useState([]);
  const [sortKey, setSortKey] = useState('title');

  const sortEvents = (events, key) => {
    let sortedArray = [...events];
    if (key === 'date') {
      sortedArray.sort(
        (a, b) =>
          new Date(a.date.split('.').reverse().join('-')) -
          new Date(b.date.split('.').reverse().join('-'))
      );
    } else {
      sortedArray.sort((a, b) => a[key].localeCompare(b[key]));
    }
    return sortedArray;
  };

  useEffect(() => {
    setSortedEvents(sortEvents(events, sortKey));
  }, [events, sortKey]);

  return (
    <>
      <SortBar sortKey={sortKey} handleSort={setSortKey} />

      <ul className="flex flex-wrap gap-12 mb-8">
        {sortedEvents.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </ul>
    </>
  );
};

export default EventsList;
