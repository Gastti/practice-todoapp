import React from 'react';
import PortalReactDOM from 'react-dom'
import './styles.css';

function Modal({ children }) {
    return PortalReactDOM.createPortal(
        <div className='modal-background'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };