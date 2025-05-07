type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const CountrySelect = ({ value, onChange }: Props) => {
  const countries = ['Sweden', 'New Zeland', 'Thailand', 'Mexico']; // these are the only one for free API version

  return (
    <div>
      <label>Select a country:</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">-- Select --</option>
        {countries.map((c) => (
          <option key={c} value={c}>
            {c.charAt(0).toUpperCase() + c.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
};
