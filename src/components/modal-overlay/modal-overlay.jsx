import style from '../modal-overlay/modal-overlay.module.css';
import { BurgerContext } from '../../contexts/burger-context';
import { useContext } from 'react';

const ModalOverlay = () => {

    const {state, dispatcher} = useContext(BurgerContext);
    const closeModal = () => {
        if (state.selectedIngredient !== null) {
            dispatcher({type: 'closeIngrModal'})
        } else if (state.order !== null) {
            dispatcher({type: 'closeOrderModal'})
        } else throw new Error('error with close modal')
    }

    return (
        <div className={style.overlay} onClick={closeModal}>

        </div>
    )
}



export default ModalOverlay;