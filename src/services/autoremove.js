import axios from 'axios';

const remove = (accountUsername, accountPassword) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    let params = {
        ip_access    : import.meta.env.VITE_IP_ACCESS,
        token_access : import.meta.env.VITE_TOKEN_AUTOREMOVE,
        email        : accountUsername, 
        password     : accountPassword
    }

    const  response  = axios.post(`${import.meta.env.VITE_URL_AUTOREMOVE}`,params,config);
    return response;
}

export default {remove}