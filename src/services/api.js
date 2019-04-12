import { create } from "apisauce";

const api = create({
    baseURL: 'https://swapi.co/'
})

export default api;