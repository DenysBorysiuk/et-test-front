import Link from 'next/link';

async function fetchData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const result = await res.json();
  return result;
}

const Event = async ({ params: { id } }) => {
  const event = await fetchData(id);

  return (
    <div className="container mx-auto">
      <Link href="/">Back</Link>
      <h1>Event {id} participants</h1>
      {/* <h2 className="font-medium text-center text-[24px]">{post.title}</h2> */}
    </div>
  );
};

export default Event;
