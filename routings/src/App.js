import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
import Navbar from './component/Navbar';
import Homepage from './component/HomePage';
import About from './component/About';
import Team from './component/Team';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}></Route>
          <Route path="/about" element={<About/>}>
              <Route path="team" element={<Team/>}></Route>
          </Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
