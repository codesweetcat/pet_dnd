import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { initialItems } from './data'

const index = initialItems.length+1
test('renders <App />', () => {
  render(<App />);
 
  const addItemBtn = screen.getByTestId('addItemBtn');
  expect(addItemBtn).toBeInTheDocument();

  fireEvent.click(addItemBtn)//trigger add new item button
  const newItemName='Haoming_'+index
  const newItem = screen.getByText(newItemName);
  expect(newItem).toBeInTheDocument();
});
