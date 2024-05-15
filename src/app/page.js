import EventsList from '@/components/EventsList';

const events = [
  { id: '1', title: 'Title1', description: 'Description' },
  { id: '2', title: 'Title2', description: 'Description' },
  { id: '3', title: 'Title3', description: 'Description' },
  { id: '4', title: 'Title4', description: 'Description' },
  { id: '5', title: 'Title5', description: 'Description' },
  { id: '6', title: 'Title6', description: 'Description' },
  { id: '7', title: 'Title7', description: 'Description' },
  { id: '8', title: 'Title8', description: 'Description' },
];

export default function Home() {
  return (
    <section className="py-8">
      <h1 className="text-4xl mb-6">Events</h1>

      <EventsList events={events} />
    </section>
  );
}
