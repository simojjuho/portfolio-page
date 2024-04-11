import {  Link as RouterLink } from "react-router-dom"

interface NavbarItemProps {
  item: string
}

const NavbarItem = ({item}: NavbarItemProps) => {
  const NavbarItemStyle = {
  }

  const linkClasses ='px-5 transition duration-200 ease-in-out hover:bg-orange-500 hover:text-white active:bg-orange-600 active:text-white'
  
  return (
    <li style={NavbarItemStyle}>
      {item === 'home'
        ? <RouterLink className={linkClasses} to={'/'}>home</RouterLink>
        : <RouterLink className={linkClasses} to={item}>{item}</RouterLink>}
    </li>
  )
}

export default NavbarItem