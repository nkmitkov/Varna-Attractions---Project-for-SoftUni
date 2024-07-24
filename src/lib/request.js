function buildOptions(data) {
    const options = {};

    if (data) {
        options.headers = { "Content-Type" : "application/json" };
        options.body = JSON.stringify(data);
    }

    const token = localStorage.getItem("accessToken");

    if (token) {
        options.headers = {
            ...options.headers,
            "X-Authorization": token,
        };
    };

    return options;
};

export const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if (response.status === 204) {
        return response;
    };

    if (!response.ok) {
        throw response;
    };

    const result = await response.json();

    return result;
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const remove = request.bind(null, "DELETE");