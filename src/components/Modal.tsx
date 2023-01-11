import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

import classes from './Modal.module.css';

type Props = PropsWithChildren<{
 onClose: React.MouseEventHandler<HTMLDivElement>
}>

function Modal({ children, onClose }: Props) {
  return createPortal(
    <div className={classes.backdrop} onClick={onClose}>
      <dialog
        className={classes.modal}
        open
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </dialog>
    </div>,
    document.getElementById('modal') as HTMLElement
  );
}

export default Modal;
