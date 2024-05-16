const ParticipantsSearch = ({ value, onChangeFilter }) => {
  return (
    <div className="flex flex-col w-96 mb-8 mx-auto">
      <input
        className="border"
        type="text"
        name="filter"
        placeholder="Find participants"
        value={value}
        onChange={onChangeFilter}
      />
    </div>
  );
};

export default ParticipantsSearch;
