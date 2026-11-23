import axios from "axios";

const API_URL = "https://localhost:7268/api/users";

const getHeaders = () => {

    const token =
        localStorage.getItem("token");

    return {
        headers: {
            Authorization:
                `Bearer ${token}`
        }
    };
};

export const getUsers = ()=>{
    return axios.get(API_URL,getHeaders());
    
}

export const getUserById = (id)=>{
    return axios.get(`${API_URL}/${id}`,getHeaders());
}

export const createUser = (user)=>{
    return axios.post(API_URL, user, getHeaders());
}

export const updateUser = (id, user)=>{
    return axios.put(`${API_URL}/${id}`, user, getHeaders());
}

export const deleteUser = (id)=>{
    return axios.delete(`${API_URL}/${id}`,getHeaders());
}