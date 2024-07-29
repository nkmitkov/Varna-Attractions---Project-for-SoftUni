import { useEffect, useState } from "react";

export const useForm = (initialValues, onSubmitHandler) => {
    const [formValues, setFormValues] = useState(initialValues);

    /* the first render initialValues is {} because I have to fetch the data at the Details Page
    this is the reason I'm using useEffect to update the formValues with the correct information */
    // useEffect(() => {
    //     setFormValues(initialValues);
    // }, [initialValues]);

    const onChangeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const resetFormHandler = () => {
        setFormValues(initialValues);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(formValues);
    };

    return {
        formValues,
        onChangeHandler,
        onSubmit,
        resetFormHandler
    }
};