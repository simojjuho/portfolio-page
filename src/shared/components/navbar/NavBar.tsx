import { useState } from "react"
import NavbarItem from "./NavbarItem"

const NavBar = () => {
  const [isAccordionOpen, setAccordion] = useState<boolean>(false)
  const navbarElements = [
    'home',
    'projects',
    'cv',
    'contact'
  ]

  return(
    <nav className='xl:mx-96 lg:mx-80 md:mx:50'>
      <ul className='flex flex-col items-end md:flex-row justify-end'>
        {navbarElements.map(e => <NavbarItem key={e} item={e}/>)}
      </ul>
    </nav>
  )
}

export default NavBar