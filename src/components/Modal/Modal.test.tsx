import { fireEvent, render, screen } from '@testing-library/react';
import Modal from './Modal';

describe('Test DetailCard component', () => {
    beforeEach(() => {
        render(<Modal show={true}><p>Modal test</p></Modal>)
    });

    it('Render the modal component', () => {
        const modalElm = screen.getByTestId('modal');
        expect(modalElm).toBeInTheDocument();
    });
})