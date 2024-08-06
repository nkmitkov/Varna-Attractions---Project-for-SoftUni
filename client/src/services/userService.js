import * as request from "../lib/request";

// const baseUrl = "http://localhost:3030/users";
const baseUrl = `${import.meta.env.VITE_API_URL}/users`;

export const getMe = async (id) => await request.get(`${baseUrl}/me`);

export const register = async (data) => await request.post(`${baseUrl}/register`, data);

export const login = async (data) => await request.post(`${baseUrl}/login`, data);

export const logout = async () => await request.get(`${baseUrl}/logout`);