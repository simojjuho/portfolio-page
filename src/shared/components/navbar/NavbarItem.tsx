import {  Link as RouterLink } from "react-router-dom"

interface NavbarItemProps {
  item: string
}

const NavbarItem = ({item}: NavbarItemProps) => {
  const classes = 'px-5 xs:py-2 md:py-3 text-2xl transition duration-200 ease-in-out hover:bg-orange-500 dark:hover:bg-orange-600 hover:text-white active:bg-orange-600 active:text-white'
  return (
    <li >
      {item === 'home'
        ? <RouterLink to={'/'} className = {classes}>home</RouterLink>
        : <RouterLink to={item} className = {classes} >{item}</RouterLink>}
    </li>
  )
}

export default NavbarItem