import axios from "axios"
const url = "http://localhost:8000";
export const addUser = async (data) => {
    try {
        await axios.post(`${url}/add`, data);
    } catch(error) {
        console.log(`Error while addUser API` , error.message);
    }
}
export const getUser=async()=>{
    try{
        const response=await axios.get(`${url}/users`);
        console.log(response);
        return response.data
    }catch(error){
        console.log("Error while calling getUser api",error.message);
    }
}