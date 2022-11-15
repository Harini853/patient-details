import logo from './logo.svg';
import './App.css';
// import RegisterPage from './RegisterPage/RegisterPage';
import Navbar from './Navbar/Navbar';
import {BrowserRouter as Router } from 'react-router-dom'
import AllRoutes from './AllRoutes';
// import Home from './Home/Home';

function App() {
  return (
 < div>
<Router>
      {/* <RegisterPage/> */}
      {/* <Home/> */}
    <AllRoutes/>
    </Router>
    </div>
  )
}


export default App;
