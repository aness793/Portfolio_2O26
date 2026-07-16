import './navBar.css'
function NavBar() {

  return (
    <div className='navbar'>
          <div className="logo">
              <h1>Aness Rahmani</h1>
              <p>Full stack developer | ML engineer | Telecom background</p>
          </div>
          <div className="menu">
              <span><a href="#projects">Work</a></span>
              <span><a href="#services">Services</a></span>
              <span><a href="#About">About</a></span>
              <span><a href="#contact">Contact</a></span>
          </div>
    </div>
  )
}

export default NavBar
