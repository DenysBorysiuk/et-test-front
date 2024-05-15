import Link from 'next/link';

const EventCard = ({ id, title, description, date, organizer }) => {
  return (
    <li className="border p-5">
      <h2 className="mb-4">{title}</h2>

      <div className="mb-6">
        <p className="text-sm">{description}</p>

        <p className="text-sm">{date.toISOString()}</p>

        <p className="text-sm">{organizer}</p>
      </div>

      <ul className="flex gap-36">
        <li>
          <Link className="text-sm text-blue-700" href={`/register/${id}`}>
            Register
          </Link>
        </li>

        <li>
          <Link className="text-sm text-blue-700" href={`/event/${id}`}>
            View
          </Link>
        </li>
      </ul>
    </li>
  );
};

export default EventCard;
