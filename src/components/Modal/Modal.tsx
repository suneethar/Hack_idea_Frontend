import React, { Children } from 'react';
import './_modal.scss';

interface IModalProps {
    show: boolean,
}

const Modal: React.FC<IModalProps> = ({show = false, children}) => {
    if (!show) return null;

    return (
        <div className="hackidea__modal" data-testid="modal">
            <div className="hackidea__modal__content">
                <div className="hackidea__modal__body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal;