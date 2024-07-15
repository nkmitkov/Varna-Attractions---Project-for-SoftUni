export const setStorage = ({name, email, _id, accessToken}) => {
    sessionStorage.setItem("username", name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("id", _id);
    sessionStorage.setItem("accessToken", accessToken);
};

export const getStorageItem = (item) => sessionStorage.getItem(item);

export const clearAll = () => sessionStorage.clear();