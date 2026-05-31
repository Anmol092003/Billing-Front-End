import axios from "axios";

import { API_BASE_URL, API_VERSION } from "../util/constants";

export const login = async (data) => {
    return await axios.post(`${API_BASE_URL}/api/${API_VERSION}/login`, data);
}
