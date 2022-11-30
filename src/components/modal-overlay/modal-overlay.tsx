import style from '../modal-overlay/modal-overlay.module.css';
import { FC } from 'react';

const ModalOverlay: FC<{onClick: () => void}> = ({onClick}) => {

    return (
        <div className={style.overlay} onClick={onClick}>

        </div>
    )
}

export default ModalOverlay;