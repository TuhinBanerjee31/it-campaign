import Brands from '../custom/Brands'
import Header from '../custom/Header'
import Overview from '../custom/Overview'
import Services from '../custom/Services'
import Stats from '../custom/Stats'
import Updates from '../custom/Updates'
import WhyUs from '../custom/WhyUs'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Overview />
      <Services />
      <Stats />
      <WhyUs />
      <Updates />
      <Brands />
    </div>
  )
}

export default Home
