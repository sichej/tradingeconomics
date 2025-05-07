import { render, screen, fireEvent } from '@testing-library/react';
import { IndicatorSelect } from '../components/IndicatorSelect';

const mockIndicators = [
  {
    title: 'GDP',
    category: 'Economy',
    country: 'Mexico',
    historicalDataSymbol: 'MEXICOGDP',
  },
  {
    title: 'Inflation Rate',
    category: 'Prices',
    country: 'Mexico',
    historicalDataSymbol: 'MEXICOINF',
  },
];

test('renders indicators and handles selection', () => {
  const handleChange = jest.fn();

  render(
    <IndicatorSelect indicators={mockIndicators} value="" onChange={handleChange} />
  );

  const select = screen.getByRole('combobox');
  fireEvent.change(select, { target: { value: 'MEXICOGDP' } });

  expect(handleChange).toHaveBeenCalledWith('MEXICOGDP');
});
