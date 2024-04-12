interface ButtonProps {
  name: string
  onClick: () => void
  isLogo?: boolean
  logo?: string
}

const Button = ({name, onClick, isLogo=false, logo}: ButtonProps) => {
  return (
    <button
      className="group relative m-2 text-xl uppercase p-3 border-solid rounded-md shadow-md border-black bg-orange-400 dark:bg-orange-600 transition duration-200 hover:bg-orange-700 active:shadow-none active:bg-orange-800"
      onClick={onClick}>
        {isLogo && <i className={`${logo} mr-2 transition duration-200 ease-in group-hover:scale-125`}></i>}
        {name}
        <div
          className="w-0 h-0 bg-orange-200 group-focus:w-full group-focus:h-full absolute opacity-5"
        >
          <div
            className="w-0"
          >
          </div>
        </div>
      </button>
  )
}

export default Button