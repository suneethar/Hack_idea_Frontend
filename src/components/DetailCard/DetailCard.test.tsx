import { fireEvent, render, screen } from '@testing-library/react';
import DetailCard from './DetailCard';

describe('Test DetailCard component', () => {
    beforeEach(() => {
        render(<DetailCard data={{title: 'Test'}}/>)
    });

    it('Render the component', () => {
        const headerElmement = screen.getByText(/Test/i);
        expect(headerElmement).toBeInTheDocument();
    });
})