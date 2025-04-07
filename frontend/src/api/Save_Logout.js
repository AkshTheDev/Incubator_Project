const save = async(scriptData)=>{
    try{
        const response = axios.post('/Editor',{'Script':scriptData})
        return response.data

    }
    catch(error){
        console.log("Unable to save: ",error)
    }

}
const logout = async()=>{
    try{
        const response = axios.post("/Editor",{})
    }
    catch{

    }
}