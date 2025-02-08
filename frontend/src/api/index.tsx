const BASE_URL = import.meta.env.VITE_BACKEND_URL;
import axios from "axios"

export const getAuSydneyEvents = async () => {
    const response = await axios.get(BASE_URL + "/events");
    return response.data
}

export const sendEmailForTickets = async (email:string) => {
    const response = await axios.post(BASE_URL + "/tickets", {email }, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response
}