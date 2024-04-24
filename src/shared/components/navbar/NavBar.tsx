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
      <div className="md:hidden p-2" onClick={() => setAccordion(state => !state)}>
        <i className="fa fa-solid fa-info"/>
      </div>
      {
      <ul className={`flex transition-height ease-in-out duration-500 ${isAccordionOpen ? 'h-0' : 'h-32'} overflow-hidden items-center flex-col md:flex-row md:justify-end`}>
        
        {navbarElements.map(e => <NavbarItem key={e} item={e}/>)}
      </ul>}
    </nav>
  )
}

export default NavBar