import { PropsWithChildren, useEffect, useRef, useState } from "react"
import Button from "./Button"

interface ModalBoxProps {
  isVisible: boolean,
  switchVisibility?: () => void
  hasCloseButton?: boolean
}

const ModalBox = ({isVisible, switchVisibility, hasCloseButton, children}: PropsWithChildren<ModalBoxProps>) => {
  const [isOpen, setOpen] = useState<boolean>(false)
  const modalRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    setOpen(true)
  }, [isVisible])

  useEffect(() => {
    const modalElement = modalRef.current
    if(modalElement) {
      if (isOpen) {
      modalElement.showModal()
    } else {
      modalElement.close()
    }
  }
  }, [isOpen])

  const handleCloseModal = () => {
    if(switchVisibility) {
      switchVisibility()
    }
    setOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if(e.key == 'Escape' ) {
      handleCloseModal()
    }
  }

return (
    <div className='w-screen h-screen absolute top-0 left-0 bg-gray-800 bg-opacity-80 flex justify-center items-center'>
      <dialog ref={modalRef} onKeyDown={handleKeyDown} onClick={e => e.stopPropagation()} className='w-fit h-fit py-8 px-4 bg-gray-500 bg-opacity-100 rounded drop-shadow-lg'>
        {children}
        {hasCloseButton && <Button
          onClick={handleCloseModal}
          name='Close'
        />}
      </dialog>
    </div>
  )
}

export default ModalBox