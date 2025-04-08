import instance from "./axios";
export const openScript = async(id)=>{
    try{
        
        const response = instance.get(`/scriptbyid/${id}`)
        console.log(response.data)
        return response.data

    }
    catch(error){
        console.log(error)
    }
}