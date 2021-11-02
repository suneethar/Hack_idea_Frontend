import { fireEvent, render, screen } from '@testing-library/react';
import Login from './Login';

describe('Test Login page', () => {
    beforeEach(() => {
        render(<Login />)
    });

    it('renders header element', () => {
        const headerElmement = screen.getByText(/Hack Idea/i);
        expect(headerElmement).toBeInTheDocument();
    });

    it('Login button should be disabled', () => {
        const loginBtn = screen.getByRole('button', {
            name: /Login/i
        });
        expect(loginBtn).toBeDisabled();
    });

    it('Setting employeeid should enable login button', () => {
        const inputElm = screen.getByTestId('employeeId').querySelector('input') as any;
        expect(inputElm).toBeInTheDocument();
        fireEvent.change(inputElm , {target: { value: '3556'}});
        expect(inputElm.value).toBe('3556');

        const loginBtn = screen.getByRole('button', {
            name: /Login/i
        });
        expect(loginBtn).toBeEnabled();
    })

    it('Clicking login button should display error message for invalid employeeid', () => {
        const inputElm = screen.getByTestId('employeeId').querySelector('input') as any;
        fireEvent.change(inputElm , {target: { value: '3556'}});
        const loginBtn = screen.getByRole('button', {
            name: /Login/i
        });
        fireEvent.click(loginBtn);
        const errorAlert = screen.getByRole('alert');
        expect(errorAlert).toBeInTheDocument()
    })
})