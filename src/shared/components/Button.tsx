interface ButtonProps {
  name: string
  onClick: () => void
  isLogo?: boolean
  logo?: string
}

const Button = ({name, onClick, isLogo=false, logo}: ButtonProps) => {
  return (
    <button
      className="group m-2 text-xl text-gray-900 uppercase p-3 border-solid rounded-md shadow-md border-black bg-orange-400 transition duration-200 hover:bg-orange-500 hover:text-white active:shadow-none focus:bg-orange-600"
      onClick={onClick}>
        {isLogo && <i className={`${logo} mr-2 transition duration-200 ease-in group-hover:scale-125`}></i>}
        {name}
      </button>
  )
}

export default Button