import './header.css'

export const Header = () => {
  return (
    <div className='header'>
      <div className='headerCont'>
        <div className='hleft'>
          <h1 className='htitle'>
            Helping you find the property of your dreams.
          </h1>
          <p className='hp'>
            Creating quality urban lifestyles, building stronger communities.
          </p>
          <button className='hbtn'>Learn More</button>
        </div>
        <div className='hright'>
          <img
            src='https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80'
            alt=''
            className='hImg'
          />
        </div>
      </div>
    </div>
  )
}
