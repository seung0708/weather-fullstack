import React, {useState} from 'react';
import './Signin.css';
import Form from '../../components/form/Form';
import { signin } from '../../api/users';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  
  const handleSignin = async(e) => {
    e.preventDefault();
    console.log('Form submitted')
    const result = await signin(email, password);
    console.log(result)
  }
  return (
    <section id='form' className='container'>
        <h2 className='signin_header'>Sign In</h2>
        <Form 
          isSignup={false} 
          onHandleSignin={handleSignin} 
          email={email} 
          password={password} 
          message={message} 
          setPassword={setPassword}
          setEmail={setEmail}/>
    </section>
  )
}

export default SignIn;


