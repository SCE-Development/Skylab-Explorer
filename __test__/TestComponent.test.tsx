/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import SampleLineChart from '../Components/SampleLineChart';
import SimpleAreaChart from '../Components/SimpleAreaChart';

// since there's not really anything to test, we will just render each component

describe('Test graphing chart', () => {
    test('render sample line chart', () => {
        render(<SampleLineChart />);
    });
    test('render simple area chart', () => {
        render(<SimpleAreaChart />);
    });
});
// Test render Landing or Home will not work since we import css
