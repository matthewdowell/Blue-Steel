import App from '../../app/App.jsx';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';


// test('loads the component and indicates as such, then displays proper header', async () => {
//   let component;

//   await act(async () => {
//     component = render(<App />);
//     expect(component.getByText('Loading')).toBeInTheDocument();
//   });

//   const [header] = component.getAllByTestId('header');
//   expect(header.textContent).toBe("MEOWWALK");
// });

