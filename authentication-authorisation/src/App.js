import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import ProtectedRoute from './component/ProtectedRoute';
import About from './component/About';
import RoleProtectedRoute from './component/RoleProtectedRoute';
import Admin from './component/Admin';
import Error from './component/Error';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>}>
             <Route path="/admin" element={<RoleProtectedRoute allowedRoles={["admin"]}><Admin/></RoleProtectedRoute>}/>
          </Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
