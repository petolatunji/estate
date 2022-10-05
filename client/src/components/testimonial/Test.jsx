import './test.css'
import { info } from '../../data/dataaa'

const Test = () => {
  return (
    <div className='test'>
      <div className='testCont'>
        <div className='testTop'>
          <h1 className='tt'>Testimonials </h1>
          <p>This is what our clients are saying</p>
        </div>
        <div className='testBottom'>
          {info.map((item, index) => {
            return (
              <div key={index}>
                <div className='testBot'>
                  <div className='testt'>
                    <h3 className='ttf'>{item.title}</h3>
                    <p className='tp'>{item.sub}</p>
                    <p className='tpp'>{item.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Test
