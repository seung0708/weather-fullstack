import './Login.css';
import React from 'react';

const Login = () => {
  return (
    <section id='form' className='container'>
      <div className='login'>
          <form>
            <h2>Login</h2>
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
            <div className='field button-field'>
              <button>Login</button>
            </div>
            <div className='form-link'>
              <span>Already have an account? <a href='#' className='login-link'>Login</a></span> 
            </div>
          </form>
        </div>
    </section>
  )
}

export default Login