'use client';

import { useState } from 'react';
import ParticipantsSearch from '@/components/ParticipantsSearch';

const ParticipantsList = ({ participants }) => {
  const [filter, setFilter] = useState('');

  const handleChange = evt => {
    setFilter(evt.target.value);
  };

  const getVisibleParticipants = () => {
    const normalizedFilter = filter.toLowerCase();

    return participants.filter(
      participant =>
        participant.fullName.toLowerCase().includes(normalizedFilter) ||
        participant.email.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleParticipants = getVisibleParticipants();

  return (
    <>
      <ParticipantsSearch value={filter} onChangeFilter={handleChange} />

      <ul className="flex flex-wrap gap-8">
        {visibleParticipants.map(({ fullName, email }, idx) => (
          <li className="border p-4" key={idx}>
            <p>{fullName}</p>
            <p>{email}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default ParticipantsList;
