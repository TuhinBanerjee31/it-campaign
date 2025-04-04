import Header from '../custom/Header'
import Overview from '../custom/Overview'
import Services from '../custom/Services'
import Stats from '../custom/Stats'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Overview />
      <Services />
      <Stats />
      <div className='min-h-screen'>
      </div>
    </div>
  )
}

export default Home
