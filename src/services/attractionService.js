import * as sessionStorage from "../services/sessionStorage";

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

export const getUserAttractions = async (id) => {
    const query = new URLSearchParams({
        where: `_ownerId=${id}`,
    });
    // do the query string for _ownerId equals id
    const querystring = `=${id}`;
    const encodedQuery = encodeURIComponent(querystring);

    console.log(query);
    console.log(encodedQuery);

    // const response = await fetch(`${baseUrl}?where=_ownerId${encodedQuery}`)
    // const result = await response.json();
    
    // return result;
};

export const create = async (data) => {
    data._ownerId = sessionStorage.getStorageItem("id");

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
            "X-Authorization": sessionStorage.getStorageItem("accessToken"),
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    return result;
}

export const remove = async (id) => {
    const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": sessionStorage.getStorageItem("accessToken"),
        },
    });

    const result = await response.json();

    return result;
};