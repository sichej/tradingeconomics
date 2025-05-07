import { render, screen, fireEvent } from '@testing-library/react';
import { CountrySelect } from '../components/CountrySelect';

test('calls onChange with the selected value', () => {
  const handleChange = jest.fn();

  render(<CountrySelect value="" onChange={handleChange} />);

  const select = screen.getByRole('combobox');

  // Simulate user selecting 'mexico'
  fireEvent.change(select, { target: { value: 'Mexico' } });

  // Check that onChange was called with 'mexico'
  expect(handleChange).toHaveBeenCalledWith('Mexico');
});
