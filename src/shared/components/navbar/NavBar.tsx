import NavbarItem from "./NavbarItem"

const NavBar = () => {
  const navbarElements = [
    'home',
    'projects',
    'cv',
    'contact'
  ]

  return(
    <ul className='flex flex-row'>
      {navbarElements.map(e => <NavbarItem key={e} item={e}/>)}
    </ul>
  )
}

export default NavBar