import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

import UserError from '../UserError/UserError';
import inputValidations from '../../utils/inputValidations';
import styles from "./EditAttractionModal.module.css";

export default function EditAttractionModal({
    show,
    onEditModalClose,
    onEditHandler,
    attraction,
}) {
    const [userError, setUserError] = useState({
        inputErrorMessage: "",
        inputName: ""
    });



    const onSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData);
        const errorInfo = inputValidations("Create", formValues);

        if (errorInfo.inputErrorMessage) {
            setUserError(errorInfo);

            return setTimeout(() => {
                setUserError("");
            }, 3000);
        };

        onEditHandler(formValues);
    };

    return (
        <Modal show={show} onHide={onEditModalClose} onEscapeKeyDown={onEditModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Attraction</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group className={`mb-3 ${userError.inputName === "name" ? styles["input-error"] : ""}`} controlId="formBasicEmail">
                        <Form.Control 
                            type="text" 
                            name="name" 
                            placeholder="Attraction's name.." 
                            defaultValue={attraction.name} 
                        />
                    </Form.Group>
                    <Form.Group className={`mb-3 ${userError.inputName === "image" ? styles["input-error"] : ""}`} controlId="formBasicEmail">
                        <Form.Control 
                            type="text" 
                            name="image" 
                            placeholder="Attraction's image URL.." 
                            defaultValue={attraction.image} 
                        />
                    </Form.Group>
                    <Form.Group className={`mb-3 ${userError.inputName === "address" ? styles["input-error"] : ""}`} controlId="formBasicEmail">
                        <Form.Control 
                            type="text" 
                            name="address" 
                            placeholder="Attraction's address.." 
                            defaultValue={attraction.address} 
                        />
                    </Form.Group>
                    <Form.Group className={`mb-3 ${userError.inputName === "hours" ? styles["input-error"] : ""}`} controlId="formBasicEmail">
                        <Form.Control 
                            type="text" 
                            name="hours" 
                            placeholder="Attraction's operating hours.." 
                            defaultValue={attraction.hours} 
                        />
                    </Form.Group>
                    <Form.Group className={`mb-3 ${userError.inputName === "phone" ? styles["input-error"] : ""}`} controlId="formBasicEmail">
                        <Form.Control 
                            type="text" 
                            name="phone" 
                            placeholder="Attraction's phone.." 
                            defaultValue={attraction.phone} 
                        />
                    </Form.Group>
                    <Form.Group className={`mb-3 ${userError.inputName === "price" ? styles["input-error"] : ""}`} controlId="formBasicEmail">
                        <Form.Control 
                            type="text" 
                            name="price" 
                            placeholder="Attraction's entrance fee.." 
                            defaultValue={attraction.price} 
                        />
                    </Form.Group>
                    <Form.Group className={`mb-3 ${userError.inputName === "website" ? styles["input-error"] : ""}`} controlId="formBasicEmail">
                        <Form.Control 
                            type="text" 
                            name="website" 
                            placeholder="Attraction's website URL.." 
                            defaultValue={attraction.website} 
                        />
                    </Form.Group>
                    <Form.Group className={`mb-3 ${userError.inputName === "description" ? styles["input-error"] : ""}`} controlId="formBasicEmail">
                        <Form.Control 
                            type="text" 
                            name="description" 
                            placeholder="Attraction's short description.." 
                            defaultValue={attraction.description} 
                        />
                    </Form.Group>

                    {userError.inputErrorMessage && <UserError message={userError.inputErrorMessage} />}

                    <Modal.Footer>
                        <Button variant="primary" type="submit">Save</Button>
                        <Button variant="secondary" onClick={onEditModalClose}>Close</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}