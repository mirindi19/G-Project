import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"; 
import Home from './pages/Home';
import User from './components/table/User';
import Commitee from './components/table/Commitee';
import Schools from './components/table/Schools';
import Families from './components/table/Families';
import Hero from './pages/hero/Hero';
import Widget from './components/widget/Widget';
import Signup from './components/signup/Signup';
import Signin from './components/signin/Signin';

function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path='/' element={<Hero/>}/>
       <Route path='/dashboard' element={<Home/>}/>
       <Route path='/user' element={<User/>}/>
       <Route path='/commitee' element={<Commitee/>}/>
       <Route path='/schools' element={<Schools/>}/>
       <Route path='/family' element={<Families/>}/>
       <Route path='/widget' element={<Widget/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/signin' element={<Signin/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
