import { commonApi } from "./commonApi"
import { serverUrl } from "./serverurl"


// register api
export const registerApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody)
}

// login
export const loginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody)
}

//  post api
export const addItemApi= async (reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/add-item`, reqBody,reqHeader)
}

// get All api
export const getItemApi= async (reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/get-item`,"",reqHeader)
}

//get A item api
export const getAItemApi= async (id, reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/get-item-one/${id}`,"",reqHeader)
}

// edit item api
export const UpdateitemApi= async (id, reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/edit-item/${id}`,reqBody,reqHeader)
}

// status update
export const statusUpdateApi= async (id, reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/status-update/${id}`,reqBody,reqHeader)
}

// delete item
export const deleteItemApi=async(id,reqHeader)=>{
    return await commonApi('DELETE',`${serverUrl}/delete/${id}`,"",reqHeader)
}



