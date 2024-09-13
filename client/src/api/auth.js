import {API_ENDPOINT} from './index';

export const signin = async(email, password) => {
    try {
        const response = await fetch(`${API_ENDPOINT}/auth/signin`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const result = await response.json();
        console.log(result)
        if(response.ok) {
            return result;
        }
    } catch(error) {
        console.error(error)
    }
}

export const signup = async(email, password, city) => {
    try {
        const response = await fetch(`${API_ENDPOINT}/auth/signup`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password,
                city
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        const result = await response.json();
        if(!response.ok) {
            console.log(result.message || 'Sign up failed');
        } else {
            console.log(result.message || 'Sign up successful')
            return result;
        }
        console.log(result)
    } catch(err) {
        console.log(err)
    }

}