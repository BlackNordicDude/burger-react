import ReactDOM  from "react-dom"
import { useEffect } from "react"
import PropTypes from 'prop-types';

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"

import ModalOverlay from "../modal-overlay/modal-overlay"

import style from '../modal/modal.module.css';

const modalRoot = document.getElementById('modal');

const Modal = ({onClose, title, children}) => {
    
    useEffect(() => {
        const handleEsc = (e) => {
            e.key === 'Escape' && onClose();
        };
        
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc); 
        }
    }, [onClose]);

    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={onClose}/>
            <div className={`p-10 ${style.modal}`}>
                <div className={style.header}>
                    <h3 className='text text_type_main-large'>{title}</h3>
                    <CloseIcon type='primary' onClick={onClose}/>
                </div>
                <div className={style.content}>
                    {children}
                </div>
            </div>
            
        </>
    , modalRoot)
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.element.isRequired
}

export default Modal