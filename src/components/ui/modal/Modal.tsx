import React, { useState } from "react";
import { IModalContext } from "../../../@types/contextType";
import { IModal } from "../../../@types/modalType";
import { useModal } from "./../../../contexts/ModalContextProvider";

interface IModalProps {
  body: JSX.Element;
}

const Modal: React.FC<IModalProps> = ({ body }) => {
  const { modalState, toggleModal } = useModal() as IModalContext;
  const { showModal } = modalState as IModal;

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            // onClick={toggleModal}
          >
            {body}
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
