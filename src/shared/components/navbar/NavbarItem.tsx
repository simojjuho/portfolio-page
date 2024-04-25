import {  Link as RouterLink } from "react-router-dom"

interface NavbarItemProps {
  item: string
}

const NavbarItem = ({item}: NavbarItemProps) => {
  
  return (
    <li className = 'px-5 xs:py-2 md:py-3 text-2xl transition duration-200 ease-in-out hover:bg-orange-500 dark:hover:bg-orange-600 hover:text-white active:bg-orange-600 active:text-white'>
      {item === 'home'
        ? <RouterLink to={'/'}>home</RouterLink>
        : <RouterLink to={item}>{item}</RouterLink>}
    </li>
  )
}

export default NavbarItem