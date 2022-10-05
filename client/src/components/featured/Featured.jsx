import { info } from '../../data/dataa'
import './featured.css'

const Featured = () => {
  return (
    <div className='feat'>
      <div className='featCont'>
        <div className='featTop'>
          <h1 className='ft'>Our Featured Properties</h1>
          <p className='fp'>
            One of our biggest product to be featured and that has sold out the
            most
          </p>
        </div>
        <div className='feattotal'>
          {info.map((item, index) => {
            return (
              <div key={index} className='featBot'>
                <img src={item.image} alt='' className='fImg' />
                <div className='featsub'>
                  <div className='featl'>
                    <h3 className='fti'>{item.title}</h3>
                    <p className='fpp'>{item.loct}</p>
                  </div>
                  <div className='featr'>
                    <h3 className='fti'>{item.type}</h3>
                    <p className='fppp'>{item.price}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='ftbtn'>
          <button className='featBtn'>See More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
