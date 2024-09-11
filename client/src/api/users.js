import {API_ENDPOINT} from './index';

export const getUserById = async(userId) => {
   try {
        const response = await fetch(`${API_ENDPOINT}/users/${userId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data.user.rows[0]
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}
