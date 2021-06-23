/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import TestComponent from '../Components/TestComponent';
import Home from '../pages/dashboard';
import Landing from '../pages/landing';

// since there's not really anything to test, we will just render each component
describe('App', () => {
    test('renders App component', () => {
        render(<TestComponent/>);
        screen.debug();
    });
});

// Test render Landing or Home will not work since we import css
// describe('Render pages', () => {
//     test('Render landing', () => {
//         render(<Landing />);
//     });

//     test('Render Dashboard/Home', () => {
//         render(<Home />);
//     });
// });

