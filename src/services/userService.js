import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL;

  const API_URL =
  `${API_BASE_URL}/api/employees`;

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