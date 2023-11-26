import React, { FC, PropsWithChildren, ReactNode } from 'react';
import s from '@/styles/modal.module.css';

type Props = PropsWithChildren & {
  open: boolean;
  closeModal: VoidFunction;
};

export const Modal: FC<Props> = ({ open, closeModal, children }) => {
  return (
    <section className={`${s.modal} ${open && s.active}`}>
      <div className={s.content}>
        <button className={s.closeButton} onClick={closeModal}>
          x
        </button>

        {children}
      </div>
    </section>
  );
};
