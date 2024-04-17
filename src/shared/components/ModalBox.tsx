import { PropsWithChildren, useEffect } from "react"

interface ModalBoxProps {
  isVisible: boolean,
  switchVisibility: () => void
}

const ModalBox = ({isVisible, switchVisibility, children}: PropsWithChildren<ModalBoxProps>) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if(e.key == 'Escape' ) {
        console.log('Espace pressed!')
        switchVisibility()
      }
    }

    addEventListener('keydown', handleKeyDown)
    
    return () => {document.removeEventListener('keydown', handleKeyDown)}
  }, [])

  if(isVisible) return (
    <div onClick={switchVisibility} className='w-screen h-screen absolute top-0 left-0 bg-gray-800 bg-opacity-80 flex justify-center items-center'>
      <div onClick={e => e.stopPropagation()} className='w-fit h-fit py-8 px-4 bg-gray-500 bg-opacity-100 rounded drop-shadow-lg'>
        {children}
      </div>
    </div>
  )

  return null
}

export default ModalBox