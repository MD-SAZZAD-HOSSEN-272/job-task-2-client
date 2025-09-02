import axios from "axios";

const instance = axios.create({
  baseURL: 'https://server-site-eight-neon.vercel.app',
});


const useAxiosSecure = () => {
    return instance
};

export default useAxiosSecure;