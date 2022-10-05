import './foot.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

const Footer = () => {
  return (
    <div className='foot'>
      <div className='footCont'>
        <div className='footTab'>
          <div className='footl'>
            <h1 className='fth'>Kash Estate</h1>
            <p>
              Solution for easy and flexible house hunting. You can trust us
              anywhere through this platform
            </p>
            <div className='iconclass'>
              <FacebookIcon className='lasticon' />
              <InstagramIcon className='lasticon' />
              <TwitterIcon className='lasticon' />
            </div>
          </div>
          <div className='footr'>
            <div className='property'>
              <h3 className='ftt'>Property</h3>
              <p className='pth'>Learning Modules</p>
              <p className='pth'>Partnership</p>
              <p className='pth'>Watch demo</p>
              <p className='pth'>Event</p>
            </div>
            <div className='property'>
              <h3 className='ftt'>Resources</h3>
              <p className='pth'> Contact </p>
              <p className='pth'>Give feedback</p>
              <p className='pth'>System status</p>
              <p className='pth'>Privacy Policy</p>
            </div>
            <div className='property'>
              <h3 className='ftt'>About us</h3>
              <p className='pth'>Our Company</p>
              <p className='pth'>Career</p>
              <p className='pth'>Investors Relations</p>
              <p className='pth'>Social Impact</p>
            </div>
          </div>
        </div>
        <span className='span'>Copyright @PetOlatunji 2022</span>
      </div>
    </div>
  )
}

export default Footer
