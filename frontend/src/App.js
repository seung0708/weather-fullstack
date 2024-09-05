import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header/Header';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
