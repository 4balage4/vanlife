import { Link } from 'react-router'

function Menu() {
  return (
    <div className='menu-component'>
        <h1>#VanLife</h1>
        <div className="menu-link-container">
          <Link className="link-button" to="/home">Home</Link>
          <Link className="link-button" to='/about'>About</Link>
          <Link className="link-button" to='/vans'>Vans</Link>
        </div>
    </div>
  )
}

export default Menu
