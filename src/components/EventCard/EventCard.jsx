import Link from 'next/link';

const EventCard = ({ title, description }) => {
  return (
    <li className="border p-5">
      <h2>{title}</h2>

      <p className="mb-8 text-sm">{description}</p>

      <ul className="flex gap-24">
        <li>
          <Link className="text-sm text-blue-700" href="/">
            Register
          </Link>
        </li>

        <li>
          <Link className="text-sm text-blue-700" href="/">
            View
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default EventCard;
