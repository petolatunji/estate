import './app.css'
import Featured from './components/featured/Featured'
import Footer from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Navbar } from './components/navbar/Navbar'
import Search from './components/search/Search'
import Single from './components/single/Single'
import Test from './components/testimonial/Test'
import Work from './components/work/Work'

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Search />
      <Work />
      <Single />
      <Featured />
      <Test />
      <Footer />
    </div>
  )
}

export default App
