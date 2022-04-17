import PropTypes from 'prop-types';

import style from '../modal-overlay/modal-overlay.module.css';

const ModalOverlay = ({onClick}) => {
    return (
        <div className={style.overlay} onClick={onClick}>

        </div>
    )
}

ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ModalOverlay;