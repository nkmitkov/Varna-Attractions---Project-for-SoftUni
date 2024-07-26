import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/attractions";

export const getAll = async () => await request.get(baseUrl);

export const getOneById = async (id) => await request.get(`${baseUrl}/${id}`);

export const getLatestThree = async () => {
    const result = await request.get(`${baseUrl}?sortBy=_createdOn desc&pageSize=3`);
    
    return result;
};

export const getUserAttractions = async (id) => {
    const query = new URLSearchParams({
        where: `_ownerId="${id}"`,
    });

    // const querystring = `_ownerId=${id}`;
    // const encodedQuery = encodeURIComponent(querystring);

    const result = await request.get(`${baseUrl}?${query}`)

    return result;
};

export const create = async (data) => await request.post(baseUrl, data);

export const update = async (id, data) => await request.put(`${baseUrl}/${id}`, data);

export const remove = async (id) => await request.remove(`${baseUrl}/${id}`);