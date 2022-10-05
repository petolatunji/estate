import './single.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox'

const Single = () => {
  return (
    <div className='single'>
      <div className='singCont'>
        <div className='catSing'>
          <div className='siright'>
            <img
              src='https://media.istockphoto.com/photos/perfect-maintenance-free-home-with-covered-porch-picture-id479824910?k=20&m=479824910&s=612x612&w=0&h=_pTMle5NPbWwXhXGxYOuPpduTi_bL-yjN_DwsJa1O08='
              alt=''
            />
          </div>
          <div className='sileft'>
            <h2>Why you should choose us</h2>
            <p>
              Creating quality urban lifestyles, building stronger communities
            </p>
            <div className='diff'>
              <div className='sincheckl'>
                <span className='sinSpan'>
                  <p className='picsin'>
                    <CheckBoxIcon className='sinIcon' />
                    World Class
                  </p>
                </span>
                <span className='sinSpan'>
                  <p className='picsin'>
                    <CheckBoxIcon className='sinIcon' />
                    Trusted
                  </p>
                </span>
              </div>
              <div className='sincheckr'>
                <span className='sinSpan'>
                  <p className='picsin'>
                    <CheckBoxIcon className='sinIcon' />
                    Affordable
                  </p>
                </span>
                <span className='sinSpan'>
                  <p className='picsin'>
                    <CheckBoxIcon className='sinIcon' />
                    Comfortable
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Single
