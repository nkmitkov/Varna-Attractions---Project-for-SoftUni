import * as request from "../lib/request";

const url = "http://localhost:3030/data/comments";

export const getAll = async (attractionId) => {
    const query = new URLSearchParams({
        where: `attractionId="${attractionId}"`,
        // load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${url}?${query}`);

    return result;
};

export const create = async (gameId, comment) => {
    const result = await request.post(url, {
        gameId,
        ...comment
    });

    return result;
};