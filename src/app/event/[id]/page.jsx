import BackBtn from '@/components/BackBtn/BackBtn';
import ParticipantsList from '@/components/ParticipantsList';

async function fetchData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const result = await res.json();
  return result;
}

const participants = [
  { fullName: 'John Doe 1', email: 'johndoe1@gmail.com' },
  { fullName: 'John Doe 2', email: 'johndoe2@gmail.com' },
  { fullName: 'John Doe 3', email: 'johndoe3@gmail.com' },
  { fullName: 'John Doe 4', email: 'johndoe4@gmail.com' },
  { fullName: 'John Doe 5', email: 'johndoe5@gmail.com' },
  { fullName: 'John Doe 6', email: 'johndoe6@gmail.com' },
  { fullName: 'John Doe 7', email: 'johndoe7@gmail.com' },
  { fullName: 'John Doe 8', email: 'johndoe8@gmail.com' },
];

const Event = async ({ params: { id } }) => {
  const event = await fetchData(id);

  return (
    <div>
      <BackBtn />

      <h1 className="mb-8 text-center text-xl">Event {id} participants</h1>

      <ParticipantsList participants={participants} />
    </div>
  );
};

export default Event;
