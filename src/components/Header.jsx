import { NavLink } from 'react-router';
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";



function Header() {

  const active = ({isActive}) => {
    return isActive ? 'active-link' : ''
  }

  function logOut() {
    localStorage.removeItem('loggedIn')
  }

  return (
    <div className='menu-component'>
        <NavLink className="link-button" to="/"><h1>#VANLIFE</h1></NavLink>
        <nav className="menu-link-container">
          <NavLink className={(props) =>`link-button ${active(props)}`} to='host'>Host</NavLink>
          <NavLink className={(props) =>`link-button ${active(props)}`} to='about'>About</NavLink>
          <NavLink className={(props) =>`link-button ${active(props)}`} to='vans'>Vans</NavLink>
          <NavLink className='link-button' to="login">{<CgProfile />}
          <NavLink className='link-button' onClick={logOut}><FiLogOut/></NavLink>
          </NavLink>
        </nav>
    </div>
  )
}

export default Header
