import { fireEvent, render, screen } from '@testing-library/react';
import Header from './Header';

describe('Test DetailCard component', () => {
    beforeEach(() => {
        render(<Header />)
    });

    it('Render the header component', () => {
        const appbarElm = screen.getByTestId('appbar');
        const title = appbarElm.querySelectorAll('.hc__title')
        expect(title[0]).toBeInTheDocument();
        expect(title[0].innerHTML).toBe('Hack Idea Logo');
    });
})