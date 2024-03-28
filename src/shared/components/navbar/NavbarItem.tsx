import {  Link } from "react-router-dom"

interface NavbarItemProps {
  item: string
}

const NavbarItem = ({item}: NavbarItemProps) => {
  const NavbarItemStyle = {
  }
  
  return (
    <li style={NavbarItemStyle}>
      {item === 'home'
        ? <Link to={'/'}>home</Link>
        : <Link to={item}>{item}</Link>}
    </li>
  )
}

export default NavbarItem