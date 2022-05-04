import ReactDOM  from "react-dom"
import React, { useCallback, useContext } from "react"
import PropTypes from 'prop-types';

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"

import ModalOverlay from "../modal-overlay/modal-overlay"

import style from '../modal/modal.module.css'
import { BurgerContext } from "../../contexts/burger-context";

const modalRoot = document.getElementById('modal');

const Modal = ({title, children}) => {

    const {state, dispatcher} = useContext(BurgerContext);
    const closeModal = useCallback(() => {
        if (state.selectedIngredient !== null) {
            dispatcher({type: 'closeIngrModal'})
        } else if (state.order !== null) {
            dispatcher({type: 'closeOrderModal'})
        } else throw new Error('error with close modal')
    },[dispatcher, state.order, state.selectedIngredient])
    

    React.useEffect(() => {
        const handleEsc = (e) => {
            e.key === 'Escape' && closeModal();
        };

        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc); 
        }
    }, [closeModal]);

    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={closeModal}/>
            <div className={`p-10 ${style.modal}`}>
                <div className={style.header}>
                    <h3 className='text text_type_main-large'>{title}</h3>
                    <CloseIcon type='primary' onClick={closeModal}/>
                </div>
                <div className={style.content}>
                    {children}
                </div>
            </div>
            
        </>
    , modalRoot)
}

Modal.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element.isRequired
}

export default Modal