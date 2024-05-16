'use client';

import { useState } from 'react';

import EventCard from '@/components/EventCard';
import SortBar from '@/components/SortBar';

const EventsList = ({ events }) => {
  const [sortedEvents, setSortedEvents] = useState(events);
  const [sortKey, setSortKey] = useState('title');

  const sortEvents = key => {
    let sortedArray = [...sortedEvents];
    if (key === 'date') {
      sortedArray.sort(
        (a, b) =>
          new Date(a.date.split('.').reverse().join('-')) -
          new Date(b.date.split('.').reverse().join('-'))
      );
    } else {
      sortedArray.sort((a, b) => a[key].localeCompare(b[key]));
    }
    setSortedEvents(sortedArray);
  };

  const handleSort = key => {
    setSortKey(key);
    sortEvents(key);
  };

  return (
    <>
      <SortBar sortKey={sortKey} handleSort={handleSort} />

      <ul className="flex flex-wrap gap-12">
        {sortedEvents.map((event, idx) => (
          <EventCard key={idx} {...event} />
        ))}
      </ul>
    </>
  );
};

export default EventsList;
