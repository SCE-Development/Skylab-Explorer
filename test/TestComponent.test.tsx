/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import TestComponent from '../Components/TestComponent';

 describe('App', () => {
     test('renders App component', () => {
         render(<TestComponent/>);
         screen.debug();
     });
 });
