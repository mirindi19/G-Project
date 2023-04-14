import './home.scss';
import Siderbar from '../components/sidebar/Sidebar';
import Nav from '../components/navbar/Nav';
const Home = () => {
  return (
    <div className='home'>
        <Siderbar/>
            <div className='dashbordNav'>
                <Nav/>
            </div>
    </div>
  )
}

export default Home