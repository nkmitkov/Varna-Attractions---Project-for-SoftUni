import { useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initialValues);

    const onChangeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.taget.name]: e.target.value,
        }));
    };

    const resetFormHandler = () => {};

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(formValues);
    };

    return {
        formValues,
        onChangeHandler,
        onSubmit,
    };
};