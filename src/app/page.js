import EventsList from '@/components/EventsList';

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
}

const events = [
  {
    id: '1',
    title: 'Title1',
    description: 'description',
    date: new Date(),
    organizer: 'Organizer 1',
  },
  {
    id: '2',
    title: 'Title2',
    description: 'description',
    date: new Date(),
    organizer: 'Organizer 2',
  },
  {
    id: '3',
    title: 'Title3',
    description: 'description',
    date: new Date(),
    organizer: 'Organizer 3',
  },
  {
    id: '4',
    title: 'Title4',
    description: 'description',
    date: new Date(),
    organizer: 'Organizer 4',
  },
  {
    id: '5',
    title: 'Title5',
    description: 'description',
    date: new Date(),
    organizer: 'Organizer 5',
  },
  {
    id: '6',
    title: 'Title6',
    description: 'description',
    date: new Date(),
    organizer: 'Organizer 6',
  },
  {
    id: '7',
    title: 'Title7',
    description: 'description',
    date: new Date(),
    organizer: 'Organizer 7',
  },
  {
    id: '8',
    title: 'Title8',
    description: 'description',
    date: new Date(),
    organizer: 'Organizer 8',
  },
];

export default async function Home() {
  const posts = await fetchData();

  return (
    <section className="py-8">
      <h1 className="text-4xl mb-6">Events</h1>

      <EventsList events={events} />
    </section>
  );
}
