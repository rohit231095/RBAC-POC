import Axios from "axios";
import Config from "../config";
const { API_URL } = Config;

const Auth = {
    login: (params, resCB) => {
        Axios.post(`${API_URL}/login`, { ...params })
            .then(res => resCB(res))
            .catch(err => resCB(err))
    }
}

export default Auth;