import React from 'react'

const Register = () => {
  return (
    <section id='register' className='container'>
        <form>
            <label>
                Name: 
                <input type='text' />
            </label>
            <br />
            <label>
                Email: 
                <input type='email' />
            </label>
            <br />
            <label>
                City: 
                <input />
            </label>
            <br />
            <label>
                Password
                <input />
            </label>
            <br />
            <label>
                Confirm Password: 
                <input />
            </label>
            <br />
            <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default Register