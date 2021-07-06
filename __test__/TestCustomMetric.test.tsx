/**
 * @jest-environment jsdom
 */
import { render } from '@testing-library/react';
import CustomKeyMetric from "../Components/CustomKeyMetric";

describe('Test CustomKeyMetric component', () => {
    test('Render ', () => {
        render(<CustomKeyMetric isUp = { true }/>);
        });
});
