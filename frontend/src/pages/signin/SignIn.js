import React from 'react';
import './Signin.css';
import Form from '../../components/form/Form';

const SignIn = () => {
  return (
    <section id='form' className='container'>
        <h2 className='signin_header'>Sign In</h2>
        <Form isSignup={false} />
    </section>
  )
}

export default SignIn;


