import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header/Header';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
