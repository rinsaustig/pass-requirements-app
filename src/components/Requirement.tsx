interface Reqs {
  label: string;
  isSatisfied: boolean;
}

export default function Requirement(reqs: { reqs: Array<Reqs> }) {
  const requirements = reqs.reqs;
  return (
    <ul>
      {requirements.map((req: Reqs, index: number) => (
        <li key={index} className="listItem">
          {req.isSatisfied ? (
            <span className="marker accept">&#x2713;</span> // Unicode checkmark for satisfied
          ) : (
            <span className="marker deny">&#x2717;</span> // Unicode "x" for unsatisfied
          )}
          <span>{req.label}</span>
        </li>
      ))}
    </ul>
  );
}
