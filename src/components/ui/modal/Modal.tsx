import React from "react";
import { IModalContext } from "../../../@types/contextType";
import { IModal } from "../../../@types/modalType";
import { useModal } from "./../../../contexts/ModalContextProvider";

interface IModalProps {
  body: JSX.Element;
}

const Modal: React.FC<IModalProps> = ({ body }) => {
  const { modalState } = useModal() as IModalContext;
  const { showModal } = modalState as IModal;

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            {body}
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
