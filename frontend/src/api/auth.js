
import axios from './axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Login failed';
  }
};

export const  signup = async (formdata)=>{
    try{
        const response = await axios.post('/signup',{firstname: formdata.firstName, lastname: formdata.LastName,email: formdata.Email, password: formdata.Password})
        if(response.status === 200){
            return response.data;
        }
        if(response.status === 404){
            return -1
        }
    }
    catch(error){
        throw error.response?.data || 'Signup failed'
    }
}