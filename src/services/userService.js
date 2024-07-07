const baseUrl = "http://localhost:3030/jsonstore/users";


export const getOneById = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    const result = await response.json();

    return result;
};

export const create = async (userData) => {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const result = await response.json();

    return result;
};

export const login = async (userData) => {
    // Get the user

    // Check if user exists

    // Check if passwords match

    // Return user;
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const result = await response.json();

    return result;
};