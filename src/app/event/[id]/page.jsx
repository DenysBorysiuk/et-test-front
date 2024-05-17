import BackBtn from '@/components/BackBtn/BackBtn';
import ParticipantsList from '@/components/ParticipantsList';
import { fetchParticipants } from '@/services/api';

const Event = async ({ params: { id } }) => {
  const event = await fetchParticipants(id);

  return (
    <div>
      <BackBtn />

      <h1 className="mb-8 text-center text-xl">Event {event?.title || ''} participants</h1>

      <ParticipantsList participants={event?.participants || []} />
    </div>
  );
};

export default Event;
