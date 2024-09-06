import React from 'react';
import './Login.css';
import Form from '../../components/form/Form';

const SignIn = () => {
  return (
    <section id='form' className='container'>
        <Form isSignup={false} />
    </section>
  )
}

export default SignIn;


