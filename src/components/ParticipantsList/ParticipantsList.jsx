const ParticipantsList = ({ participants }) => {
  return (
    <ul className="flex flex-wrap gap-8">
      {participants.map(({ fullName, email }, idx) => (
        <li className="border p-4" key={idx}>
          <p>{fullName}</p>
          <p>{email}</p>
        </li>
      ))}
    </ul>
  );
};
export default ParticipantsList;
