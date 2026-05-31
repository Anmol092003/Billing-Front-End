import axios from "axios";
import { API_BASE_URL, API_VERSION } from "../util/constants";

const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    if (!token) return {};
    return { Authorization: `Bearer ${token}` };
};

export const addCategory = async (category) => {
    return await axios.post(
        `${API_BASE_URL}/api/${API_VERSION}/admin/categories`,
        category,
        { headers: getAuthHeader() }
    );
};

export const deleteCategory = async (categoryId) => {
    return await axios.delete(
        `${API_BASE_URL}/api/${API_VERSION}/admin/categories/${categoryId}`,
        { headers: getAuthHeader() }
    );
};

export const fetchCategories = async () => {
    return await axios.get(
        `${API_BASE_URL}/api/${API_VERSION}/categories`,
        { headers: getAuthHeader() }
    );
};
