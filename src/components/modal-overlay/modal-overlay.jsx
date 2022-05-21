import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL, REMOVE_MODAL_INGREDIENT, RESET_ORDER } from '../../services/actions';
import style from '../modal-overlay/modal-overlay.module.css';

const ModalOverlay = () => {
    const dispatch = useDispatch();
    const { selectedIngredient, order } = useSelector(store => ({
        selectedIngredient: store.selectedIngredient,
        order: store.order
    }))
    const closeModal = () => {
        if (selectedIngredient !== null) {
            dispatch({type: CLOSE_MODAL})
            dispatch({type: REMOVE_MODAL_INGREDIENT})
        } else if (order !== null) {
            dispatch({type: CLOSE_MODAL})
            dispatch({type: RESET_ORDER})
        } else throw new Error('error with close modal')
    }

    return (
        <div className={style.overlay} onClick={closeModal}>

        </div>
    )
}



export default ModalOverlay;