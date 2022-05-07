import React, { useContext, createContext, useReducer } from "react";
import { IContextProvider } from "../@types/contextType";
import { modalReducer } from "./reducer/modalReducer";
import { IModalContext } from "./../@types/contextType";
import { TOGGLE_MODAL } from "../constants/modalActionConstants";
import { IModal } from "../@types/modalType";

const initalState: IModal = {
  showModal: false,
};

const ModalContext = createContext<IModalContext | null>(null);

export const useModal = () => {
  let context = useContext(ModalContext);

  if (context === undefined) {
    throw new Error(`useModal should be use under ModalContext Provider`);
  }

  return context;
};

export const ModalContextProvider: React.FC<IContextProvider> = ({
  children,
}) => {
  const [modalState, modalDispatch] = useReducer(modalReducer, initalState);

  const toggleModal = () => {
    modalDispatch({
      type: TOGGLE_MODAL,
    });
  };

  return (
    <ModalContext.Provider value={{ modalState, modalDispatch, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
