import React from 'react'
import Form from '../../components/form/Form'

const SignUp = ({signupUser}) => {
  const handleSignup = (email, password, city) => {
    signupUser(email, password, city)
  }

  return (
    <section id='form' className='container'>
      <h2 className='signup_header'>Sign Up</h2>
      <Form action='Sign up' onSubmit={handleSignup} />      
    </section>
  )
}

export default SignUp