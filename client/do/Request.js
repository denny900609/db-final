export const Request = axios.create({
    baseURL:'http://localhost/SA&D_test/server',
    headers:{'Authorization':window.localStorage.getItem("jwtToken")}
})