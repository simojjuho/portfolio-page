interface LinkProps {
  children: string
  url: string
}

const Link = ({url, children}: LinkProps) => {
  return(
    <a
      className='px-5 transition duration-200 ease-in-out hover:bg-orange-500 hover:text-white active:bg-orange-600 active:text-white' 
      href={url}>
      {children}
    </a>
  )
}

export default Link   