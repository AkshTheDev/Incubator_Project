import instance from "./axios"
export const logout = async()=>{
    try{
        const refresh = localStorage.getItem("refreshToken")
        const response = instance.post("/logout",{"refresh":refresh})
        return response.data;
    }
    catch(error){
        console.log(error)
    }
}