import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/comments";
// const baseUrl = `${import.meta.env.VITE_API_URL}/data/comments`;

export const getAll = async (attractionId) => {
    const query = new URLSearchParams({
        where: `attractionId="${attractionId}"`,
        // load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (attractionId, comment) => {
    const result = await request.post(baseUrl, {
        attractionId,
        ...comment
    });

    return result;
};