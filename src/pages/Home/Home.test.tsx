import { fireEvent, render, screen } from '@testing-library/react';
import Home from './Home';

describe('Test Home page', () => {
    beforeEach(() => {
        render(<Home />)
    });

    it('renders header element', () => {
        const headerElmement = screen.getByText(/Hack Idea Logo/i);
        expect(headerElmement).toBeInTheDocument();
    });

    it('Add Idea button should be present in the page', () => {
        const addIdeaBtn = screen.getByRole('button', {
            name: /Add Idea/i
        });
        expect(addIdeaBtn).toBeInTheDocument();
    });

    it('Ideas should be displayed based on ideasList', () => {
        const ideasContainer = screen.getByTestId('ideasList')
        expect(ideasContainer).toBeInTheDocument();
        expect(ideasContainer.childElementCount).toBe(2);
    })

    it('Clicking on Add Idea should open modal', () => {
        const addIdeaBtn = screen.getByRole('button', {name: /Add Idea/i});
        fireEvent.click(addIdeaBtn);
        const modalElm = screen.getByTestId("modal");
        expect(modalElm).toBeInTheDocument();

        const footerBtn = modalElm.querySelector('.hc__modal__footer');
        expect(footerBtn?.childElementCount).toEqual(2);
        
        const createBtn = footerBtn?.querySelectorAll('button')[1];
        expect(createBtn).toBeDisabled();
    })

    it('Clicking on create btn should add new idea', () => {
        const addIdeaBtn = screen.getByRole('button', {name: /Add Idea/i});
        fireEvent.click(addIdeaBtn);
        const modalElm = screen.getByTestId("modal");
        const inputElms = modalElm.querySelectorAll('input');
        const textAreaElm = modalElm.querySelectorAll('textarea');
        fireEvent.change(inputElms[0], {target: { value: 'Test Add Idea'}});
        fireEvent.change(textAreaElm[0], {target: {value: 'Test Description'}});
    
        const footerBtn = modalElm.querySelector('.hc__modal__footer');
        const createBtn = footerBtn?.querySelectorAll('button')[1] as any;
        expect(createBtn).toBeEnabled();

        fireEvent.click(createBtn);
        const ideasContainer = screen.getByTestId('ideasList')
        expect(ideasContainer.childElementCount).toBe(3);
    })

    it('Clicking on like icon should increase the votecount', () => {
        const ideasContainer = screen.getByTestId('ideasList');
        const ideas = ideasContainer.querySelectorAll('.hc__card');
        let countElm = ideas[0].querySelector('.MuiBadge-badge') as any;
        expect(countElm.innerHTML).toEqual('3');
        
        const voteCountBtn = ideas[0].querySelector('.hc__card__badge') as any;
        fireEvent.click(voteCountBtn);
        countElm = ideas[0].querySelector('.MuiBadge-badge') as any;
        expect(countElm.innerHTML).toEqual('4');
    })
})