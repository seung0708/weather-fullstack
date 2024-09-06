import {useState} from 'react';
import './Form.css';

const Form = ({isSignup}) => {

  return (
    <form className='form'>
        {isSignup && (
            <>
            <div className='field input-field'>
                <input type='text' placeholder='First Name' /> 
            </div>
            <div className='field input-field'>
                <input type='text' placeholder='Last Name' /> 
            </div>
            <div className='field input-field'>
                <input type='text' placeholder='City' /> 
            </div>
            <div className='field input-field'>
                <input type='email' placeholder='Email' className='input' />
            </div>
            <div className='field input-field'>
                <input type='password' placeholder='Password' className='password' />
            <i className='bx bx-hide eye-icon'></i>
            </div>
            <div className='field input-field'>
                <input type='password' placeholder='Confirm Password' className='password' />
                <i className='bx bx-hide eye-icon'></i>
            </div>
            </>
        )}
        {isSignup || (
            <>
             <div className='field input-field'>
            <input type='email' placeholder='Email' className='input' />
            </div>
            <div className='field input-field'>
                <input type='password' placeholder='Password' className='password' />
            <i className='bx bx-hide eye-icon'></i>
            </div>
            <div className='form-link'>
                <a href='#' className='forgot-password'>Forgot Password?</a>
            </div>
            </>
        )}
        <div className='field button-field'><button type='submit'>{isSignup ? "Sign Up" : "Sign In"}</button>
         </div>
  </form>
  )
}

export default Form