import axios from "axios";
import { API_BASE_URL, API_VERSION } from "../util/constants";

export const addUser = async (user) => {
   return await axios.post(
       `${API_BASE_URL}/api/${API_VERSION}/admin/register`,
       user,
       { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
   );
}

export const deleteUser = async (id) => {
    return await axios.delete(
        `${API_BASE_URL}/api/${API_VERSION}/admin/users/${id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
}

export const fetchUsers = async () => {
    return await axios.get(
        `${API_BASE_URL}/api/${API_VERSION}/admin/users`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
}
