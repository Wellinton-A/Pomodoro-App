import { Dispatch, SetStateAction, createContext, useState } from 'react'

type ModalProps = {
  modalIsOpen: boolean
  setModalIsOpen: Dispatch<SetStateAction<boolean>>
}

type Props = {
  children?: JSX.Element
}

export const modalContext = createContext<ModalProps>({
  modalIsOpen: false,
  setModalIsOpen: () => null
})

const ModalProvider = ({ children }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const values: ModalProps = {
    modalIsOpen,
    setModalIsOpen
  }
  return (
    <modalContext.Provider value={values}>{children}</modalContext.Provider>
  )
}

export default ModalProvider
