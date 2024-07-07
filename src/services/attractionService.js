const baseUrl = "http://localhost:3030/jsonstore/data";

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();
    
    const data = Object.values(result);
    
    return data;
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