import { useState } from "react"

interface ButtonProps {
  name: string
  onClick: () => void
  isLogo?: boolean
  logo?: string
}

const Button = ({name, onClick, isLogo=false, logo}: ButtonProps) => {
  const [animationVisible, setAnimationVisibility] = useState<string>('w-0 h-0')
  const buttonAnimationClasses = `${animationVisible} rounded-full m-auto bg-orange-200 opacity-50 transition duration-1000 ease-out group-focus:scale-200`
  
  const handleClick = () => {
    onClick()
    setAnimationVisibility('w-2 h-2')
    setTimeout(() => {
      setAnimationVisibility('w-0 h-0')
    }, 300)
  }

  return (
    <button
      className="group relative overflow-hidden top m-2 text-xl uppercase p-3 border-solid rounded-md shadow-md border-black bg-accent-one dark:bg-orange-600 transition duration-200 hover:bg-accent-one-dark active:shadow-none"
      onClick={handleClick}>
        {isLogo && <i className={`${logo} mr-2 transition duration-200 ease-in group-hover:scale-125`}></i>}
        {name}
        <div className="flex justify-center items-center absolute w-full h-full top-0 left-0">
          <div
            className={buttonAnimationClasses}
          >
          </div>
        </div>
      </button>
  )
}

export default Button