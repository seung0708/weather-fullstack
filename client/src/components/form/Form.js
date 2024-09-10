import {useState} from 'react';
import './Form.css';

const Form = ({action, onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if(action === "Sign up") {
            onSubmit(email, password, city)
        } 
        if(action === 'Sign in') {
            onSubmit(email,password);
        }
    } 

  return (
    <form className='form' onSubmit={handleSubmit}>
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
            </div>
        {action === 'Sign up' && (
            <>
            <div className='field input-field'>
                <input type='password' placeholder='Confirm Password' className='password' />
                <i className='bx bx-hide eye-icon'></i>
            </div>
            <div className='field input-field'>
                <input 
                    type='text' 
                    placeholder='City' 
                    className='city'
                    value={city}
                    onChange={e => setCity(e.target.value)} />
            </div>
            </>
        )}
        {action === 'Sign in' && (
            <>
            <div className='form-link'>
                <a href='#' className='forgot-password'>Forgot Password?</a>
            </div>
            </>
        )}
        <div className='field button-field'><button type='submit'>{action === "Sign up" ? "Sign Up" : "Sign in"}</button>
         </div>
  </form>
  )
}

export default Form