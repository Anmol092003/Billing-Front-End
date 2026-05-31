import axios from "axios";
import { API_BASE_URL, API_VERSION } from "../util/constants";

export const latestOrders = async () => {
    return await axios.get(
        `${API_BASE_URL}/api/${API_VERSION}/orders/latest`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
}

export const createOrder = async (order) => {
    return await axios.post(
        `${API_BASE_URL}/api/${API_VERSION}/orders`,
        order,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
}

export const deleteOrder = async (id) => {
    return await axios.delete(
        `${API_BASE_URL}/api/${API_VERSION}/orders/${id}`,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
}
