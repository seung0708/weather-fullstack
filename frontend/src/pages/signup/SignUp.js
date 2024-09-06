import React from 'react'
import Form from '../../components/form/Form'

const SignUp = () => {
  return (
    <section id='form' className='container'>
      <h2 className='signup_header'>Sign Up</h2>
      <Form isSignup={true} />      
    </section>
  )
}

export default SignUp