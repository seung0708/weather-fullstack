import React from 'react';
import './Signin.css';
import Form from '../../components/form/Form';


const SignIn = ({signinUser}) => {
    
  const handleSignin = (email, password) => {
    signinUser(email, password)    
  }
  return (
    <section id='form' className='container'>
        <h2 className='signin_header'>Sign In</h2>
        <Form action='Sign in' onSubmit={handleSignin} />
    </section>
  )
}

export default SignIn;


