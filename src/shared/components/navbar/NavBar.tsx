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
    <nav className='flex flex-col xl:mx-96 lg:mx-80 md:mx:50'>
      <div className="self-end p-4 md:hidden w-fit" onClick={() => setAccordion(state => !state)}>
        {isAccordionOpen ? <i className="fa fa-solid fa-close"/> : <i className="fa fa-solid fa-bars"></i>}
      </div>
      {
      <ul className={`
        flex
        md:h-full
        overflow-hidden 
        items-center flex-col 
        md:flex-row md:justify-end
        transition-height ease-in-out duration-500 
        ${isAccordionOpen ? 'h-32' : 'h-0'}`
      }>
        {navbarElements.map(e => <NavbarItem key={e} item={e}/>)}
      </ul>}
    </nav>
  )
}

export default NavBar