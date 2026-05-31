import axios from "axios";
import { API_BASE_URL, API_VERSION } from "../util/constants";

export const createRazorpayOrder = async (data) => {
    return await axios.post(
        `${API_BASE_URL}/api/${API_VERSION}/payments/create-order`,
        data,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
}

export const verifyPayment = async (paymentData) => {
    return await axios.post(
        `${API_BASE_URL}/api/${API_VERSION}/payments/verify`,
        paymentData,
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
    );
}
