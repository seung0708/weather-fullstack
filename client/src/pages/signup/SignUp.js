import React, {useState} from 'react'
import Form from '../../components/form/Form'
import { signup } from '../../api/users';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [city, setCity] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault();
    const result = await signup(email, password, city)
    if(result.success) {
      setMessage(result.message)
      setEmail(result.email);
      setPassword(result.password)
      setCity(city)
    } else {
      setMessage(result.message)
    }
  }

  return (
    <section id='form' className='container'>
      <h2 className='signup_header'>Sign Up</h2>
      <Form 
        isSignup={true}
        onSubmit={handleSubmit}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        setCity={setCity}
        city={city}
         />      
    </section>
  )
}

export default SignUp