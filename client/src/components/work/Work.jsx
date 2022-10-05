import React from 'react'
import { info } from '../../data/data'
import './work.css'

const Work = () => {
  return (
    <div className='work'>
      <div className='workCont'>
        <div className='workTop'>
          <h1 className='wt'>How it works</h1>
          <p className='wp'>This is how our product works </p>
        </div>
        <div className='total'>
          {info.map((item, index) => {
            return (
              <div key={index} className='workBot'>
                <img src={item.image} alt='' className='wImg' />
                <h3 className='wti'>{item.title}</h3>
                <p className='wpp'>{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Work
