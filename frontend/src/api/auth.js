
import axios from './axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || 'Login failed';
  }
};

export const  signup = async (firstName, LastName,  Email, Password)=>{
    try{
        const response = await axios.post('/signup',{'first_name': firstName , 'last_name': LastName, 'email' : Email, 'password':Password})
        if(response.status = 200){
            return response.data;
        }
        if(response.status = 404){
            return -1
        }
    }
    catch(error){
        throw error.response?.data || 'Signup failed'
    }
}