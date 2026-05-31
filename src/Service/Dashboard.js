import axios from "axios";

import { API_BASE_URL, API_VERSION } from "../util/constants";

export const fetchDashboardData = async () => {
    return await axios.get(`${API_BASE_URL}/api/${API_VERSION}/dashboard`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
};


