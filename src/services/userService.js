import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/users";

export const getMe = async (id) => {
    const result = await request.get(`${baseUrl}/me`);

    return result;
};

export const register = async (data) => {
    const result = await request.post(`${baseUrl}/register`, data);

    return result;
};

export const login = async (data) => {
    const result = await request.post(`${baseUrl}/login`, data);

    return result;
};

export const logout = async () => {
    const result = await request.get(`${baseUrl}/logout`);

    return result;
};