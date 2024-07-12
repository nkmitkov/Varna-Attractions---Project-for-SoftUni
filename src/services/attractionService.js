const baseUrl = "http://localhost:3030/jsonstore/data";

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    
    const data = Object.values(result);
    
    return data;
};

export const getOneById = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`);
    const result = await response.json();

    return result;
};

export const create = async (data) => {
    const response = await fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    return result;
};

export const update = async (id, data) => {
    // i need to use token to update

    const response = await fetch(`${baseUrl}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": "",
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    return result;
}