import './navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbarCont'>
        <span className='logo'>Kash Estate</span>
        <div className='navCenter'>
          <span className='navItem'>Home</span>
          <span className='navItem'>Land</span>
          <span className='navItem'>Agent</span>
          <span className='navItem'>Rent</span>
          <span className='navItem'>Contact Us</span>
        </div>
        <div className='navRight'>
          <button className='navBtn'>Get Started</button>
        </div>
      </div>
    </div>
  )
}
