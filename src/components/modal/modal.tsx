import { createPortal }  from "react-dom"
import { useEffect, FC } from "react"
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import ModalOverlay from "../modal-overlay/modal-overlay"
import style from '../modal/modal.module.css';
import { TModal } from "../../utils/types";

const modalRoot = document.getElementById('modal') as HTMLElement;

const Modal: FC<TModal> = ({onClose, title, children}) => {
    
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            e.key === 'Escape' && onClose();
        };
        
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc); 
        }
    }, [onClose]);

    return createPortal(
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

export default Modal