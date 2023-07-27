import axios from "axios";

const BASE_URL = "http://localhost:8080"

export async function weightApi(singUpInfo) {
    try {
        console.log(singUpInfo);
        const response = await axios.post(`${BASE_URL}/api/weight`, singUpInfo);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}