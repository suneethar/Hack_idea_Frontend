import { fireEvent, render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Test DetailCard component', () => {
    beforeEach(() => {
        render(<Dropdown menuItems={[{label: 'Test', id: '1', value: 'test'}]}/>)
    });

    it('Render the dropdown component', () => {
        const ddLabel = screen.getByText(/Sort By/i);
        expect(ddLabel).toBeInTheDocument();
    });
})