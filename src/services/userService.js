import * as sessionStorage from "../services/sessionStorage"

const baseUrl = "http://localhost:3030/users";

export const getMe = async (id) => {
    const response = await fetch(`${baseUrl}/me`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": sessionStorage.getStorageItem("accessToken"),
        }
    });

    const result = await response.json();

    return result;
};

export const register = async (data) => {
    const response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    return result;
};

export const login = async (data) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    return result;
};

export const logout = async () => {
    const response = await fetch(`${baseUrl}/logout`, {
        method: "GET",
        headers: {
            "X-Authorization": sessionStorage.getStorageItem("accessToken"),
        }
    });

    return response;
};