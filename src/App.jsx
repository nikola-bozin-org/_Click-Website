import {BrowserRouter as Router, Route,Routes,Navigate} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Test from './pages/Test';
import E404 from './pages/E404';
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

function App() {

  useEffect(()=>{
    Aos.init({duration:400})
  },[])

  return (
    <Router>
    <Routes>
    <Route exact path="/" element={<Homepage/>}/>
    <Route exact path="/test1/test2" element={<Test/>}/>
    <Route exact path="/404" element={<E404/>}/>
    <Route path="*" element={<E404/>}/>
    </Routes>
  </Router>
  );
}

export default App;
