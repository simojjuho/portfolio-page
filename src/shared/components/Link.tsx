interface LinkProps {
  children: string
  url: string
}

const Link = ({url, children}: LinkProps) => {
  return(
    <a
      className="" 
      href={url}>
      {children}
    </a>
  )
}

export default Link