import {API_ENDPOINT} from './index';

export const signin = async(email, password) => {
    try {
        const response = await fetch(`${API_ENDPOINT}/users`, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        if(!response.ok) {
            throw new Error(data.message);
        }

        return {success: true, message: data.message};
    } catch(error) {
        return {success: false, message: error.message};
    }
}

export const signup = async() => {
    
}