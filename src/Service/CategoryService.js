import axios from "axios";

const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    if (!token) return {};
    return { Authorization: `Bearer ${token}` };
};

export const addCategory = async (category) => {
    return await axios.post(
        "http://localhost:8080/api/v1.0/admin/categories",
        category,
        { headers: getAuthHeader() }
    );
};

export const deleteCategory = async (categoryId) => {
    return await axios.delete(
        `http://localhost:8080/api/v1.0/admin/categories/${categoryId}`,
        { headers: getAuthHeader() }
    );
};

export const fetchCategories = async () => {
    return await axios.get(
        "http://localhost:8080/api/v1.0/categories",
        { headers: getAuthHeader() }
    );
};