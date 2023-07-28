import axios from "axios";

const BASE_URL = "http://localhost:8080"

export async function weightApi(value) {
    try {
        const response = await axios.post(`${BASE_URL}/api/weight`, value);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export async function momentApi(value) {
    try {
        const response = await axios.post(`${BASE_URL}/api/moment`, value);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}