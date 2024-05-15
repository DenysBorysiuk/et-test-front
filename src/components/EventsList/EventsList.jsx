import EventCard from '@/components/EventCard';

const EventsList = ({ events }) => {
  return (
    <ul className="flex flex-wrap gap-6">
      {events.map((event, idx) => (
        <EventCard key={idx} {...event} />
      ))}
    </ul>
  );
};

export default EventsList;
