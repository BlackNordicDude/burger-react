import ReactDOM  from "react-dom"
import React, { useCallback } from "react"
import PropTypes from 'prop-types';

import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"

import ModalOverlay from "../modal-overlay/modal-overlay"

import style from '../modal/modal.module.css'
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL, REMOVE_MODAL_INGREDIENT, RESET_ORDER } from "../../services/actions";

const modalRoot = document.getElementById('modal');

const Modal = ({title, children}) => {

    const dispatch = useDispatch();

    const {order, selectedIngredient} = useSelector(store => ({
        order: store.order,
        selectedIngredient: store.selectedIngredient
    }))

    const closeModal = useCallback(() => {
        if (selectedIngredient !== null) {
            dispatch({type: CLOSE_MODAL})
            dispatch({type: REMOVE_MODAL_INGREDIENT})
        } else if (order !== null) {
            dispatch({type: CLOSE_MODAL})
            dispatch({type: RESET_ORDER})
        } else throw new Error('error with close modal')
    },[dispatch, order, selectedIngredient])
    

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