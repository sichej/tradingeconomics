import { Indicator } from '../types';

type Props = {
  indicators: Indicator[];
  value: string;
  onChange: (symbol: string) => void;
};

export const IndicatorSelect = ({ indicators, value, onChange }: Props) => (
  <div>
    <label>Select an indicator:</label>
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="">-- Select --</option>
      {indicators.map((ind) => (
        <option key={ind.historicalDataSymbol} value={ind.historicalDataSymbol}>
          {ind.title}
        </option>
      ))}
    </select>
  </div>
);
