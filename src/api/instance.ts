import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
    baseURL: 'https://newsapi.org/v2',
    headers: {
    	'X-Api-Key': '00a120e76fcc49ea8ce7215ca15608e4'
	}
});

export default instance;