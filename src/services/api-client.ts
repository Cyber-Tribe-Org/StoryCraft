import axios from "axios";
import { act_data, sequence_data, plot_point_data } from "../mockData";

const apiRequest = axios.create({
    baseURL: "",
    params: {
        key: "kee to the backend will go here",
    },
});

export default !apiRequest.defaults.baseURL
    ? { act_data, sequence_data, plot_point_data }
    : apiRequest;
