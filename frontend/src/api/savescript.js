import instance from "./axios"

export const savescript = async({data,id})=>{
    try{
        const response = instance.post('/sup',{'content': data,'id':id})
        return response.data
    }
    catch(error){
        console.log("SaveScript error: ",error)
    }
}