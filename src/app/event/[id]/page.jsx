import BackBtn from '@/components/BackBtn/BackBtn';
import ParticipantsList from '@/components/ParticipantsList';

async function fetchData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const result = await res.json();
  return result;
}

const participants = [
  { fullName: 'John Doe', email: 'johndoe@gmail.com' },
  { fullName: 'John Doe', email: 'johndoe@gmail.com' },
  { fullName: 'John Doe', email: 'johndoe@gmail.com' },
  { fullName: 'John Doe', email: 'johndoe@gmail.com' },
  { fullName: 'John Doe', email: 'johndoe@gmail.com' },
  { fullName: 'John Doe', email: 'johndoe@gmail.com' },
  { fullName: 'John Doe', email: 'johndoe@gmail.com' },
  { fullName: 'John Doe', email: 'johndoe@gmail.com' },
];

const Event = async ({ params: { id } }) => {
  const event = await fetchData(id);

  return (
    <div>
      <BackBtn />

      <h1 className="mb-8">Event {id} participants</h1>

      <ParticipantsList participants={participants} />
    </div>
  );
};

export default Event;
