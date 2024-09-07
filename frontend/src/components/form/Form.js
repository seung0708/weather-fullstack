import {useState} from 'react';
import './Form.css';

const Form = ({isSignup, onHandleSignin, email, password, message, setPassword, setEmail}) => {

  return (
    <form className='form' onSubmit={onHandleSignin}>
        <div className='field input-field'>
            <input 
                type='email' 
                placeholder='Email' 
                className='input' 
                value={email}
                onChange={e => setEmail(e.target.value)} />
            </div>
            <div className='field input-field'>
                <input 
                    type='password' 
                    placeholder='Password' 
                    className='password'  
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            <i className='bx bx-hide eye-icon'></i>
            </div>
        {isSignup && (
            <>
            <div className='field input-field'>
                <input type='text' placeholder='City' className='city' />
            </div>
            <div className='field input-field'>
                <input type='password' placeholder='Confirm Password' className='password' />
                <i className='bx bx-hide eye-icon'></i>
            </div>
            </>
        )}
        {isSignup || (
            <>
            <div className='form-link'>
                <a href='#' className='forgot-password'>Forgot Password?</a>
            </div>
            </>
        )}
        <div className='field button-field'><button type='submit'>{isSignup ? "Sign Up" : "Sign In"}</button>
         </div>
         <p>{message}</p>
  </form>
  )
}

export default Form