import './home.scss';
import Siderbar from '../components/siderbar/Siderbar';
import Nav from '../components/topbar/Topbar';
import Widget from '../components/widget/Widget';
const Home = () => {
  return (
    <div className='home'>
        <Siderbar/>
            <div className='dashbordNav'>
                <Nav/>
                <div className='widget'>
                <Widget type="user"/>
                <Widget type="parent"/>
                <Widget type="student"/>
                <Widget type="course"/>
                </div>
            </div>
    </div>
  )
}

export default Home