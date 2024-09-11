import {useEffect, useState} from 'react';
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header/Header';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp'
import Footer from './pages/footer/Footer'
import Profile from './pages/profile/profile';
import { signin, signup } from './api/auth';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if(storedUser) {
      setUser(JSON.parse(storedUser));
    }
  },[])

  const signinUser = async (email, password) => {
    try {
      const result = await signin(email, password);
      if(result) {
        setUser(result);
        localStorage.setItem('user', JSON.stringify(result))
        navigate(`/users/${result.user.id}`)
      }
    } catch(error) {
      console.error(error)
    } 
  }

  const signupUser = async(email, password, city) => {
    try {
      const result = await signup(email, password, city)
      if(result) {
        setUser(result);
        localStorage.setItem('user', JSON.stringify(result))
        navigate(`/users/${result.user.id}`)
      }
    } catch(error) {
      console.error(error);
    }
  }

  const signoutUser = () => {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <>
      <Header user={user} signoutUser={signoutUser} />
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/users/:id' element={<Profile user={user} />} />
        <Route 
          path='/signup' 
          element={
            <SignUp signinUser={signinUser} />
          } />
        <Route 
          path='/signin' 
          element={
            <SignIn signinUser={signinUser} />
          } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
