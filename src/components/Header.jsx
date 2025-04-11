import { NavLink } from 'react-router'

function Header() {

  const active = ({isActive}) => {
    return isActive ? 'active-link' : ''
  }

  return (
    <div className='menu-component'>
        <NavLink className="link-button" to="/"><h1>#VANLIFE</h1></NavLink>
        <nav className="menu-link-container">
          <NavLink className={(props) =>`link-button ${active(props)}`} to='/host'>Host</NavLink>
          <NavLink className={(props) =>`link-button ${active(props)}`} to='/about'>About</NavLink>
          <NavLink className={(props) =>`link-button ${active(props)}`} to='/vans'>Vans</NavLink>
        </nav>
    </div>
  )
}

export default Header
