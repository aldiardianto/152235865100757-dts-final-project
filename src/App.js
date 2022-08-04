import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';
import { Login } from './pages/Auth/login';
import { Register } from './pages/Auth/register';
import {NavbarMenu} from './components/navbarMenu';
import {ItemAgent} from './components/itemAgent'
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './app/protectedRoute';
import { Home } from './pages/home/home';
import { Page404 } from './pages/page404';
import { AllAgent } from './pages/agents/allAgent';
import { AllWeapon } from './pages/weapon/allWeapon';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agent" element={<AllAgent />} />
        <Route path="/weapon" element={<AllWeapon />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute loginOnlyPage={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute loginOnlyPage={false}>
              <Register />
            </ProtectedRoute>
          }
        />
       
      
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
