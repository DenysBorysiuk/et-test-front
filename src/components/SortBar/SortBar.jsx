const SortBar = ({ sortKey, handleSort }) => {
  return (
    <ul className="flex gap-4 mb-8">
      <li className="w-fit ml-auto">
        <button
          className={`${
            sortKey === 'title' ? 'bg-blue-700 text-white' : ''
          } border px-4 py-2 anim-btn`}
          type="button"
          onClick={() => handleSort('title')}
        >
          title
        </button>
      </li>

      <li className="w-fit">
        <button
          className={`${
            sortKey === 'date' ? 'bg-blue-700 text-white' : ''
          } border px-4 py-2 anim-btn`}
          type="button"
          onClick={() => handleSort('date')}
        >
          event date
        </button>
      </li>

      <li className="w-fit">
        <button
          className={`${
            sortKey === 'organizer' ? 'bg-blue-700 text-white' : ''
          } border px-4 py-2 anim-btn`}
          type="button"
          onClick={() => handleSort('organizer')}
        >
          organizer
        </button>
      </li>
    </ul>
  );
};

export default SortBar;
