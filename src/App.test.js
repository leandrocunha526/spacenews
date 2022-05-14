import { render, screen } from '@testing-library/react';
import Limit from './components/LimitSelect';

test('selectq', () => {
  render(<Limit />);
  screen.getByDisplayValue(10)
});
