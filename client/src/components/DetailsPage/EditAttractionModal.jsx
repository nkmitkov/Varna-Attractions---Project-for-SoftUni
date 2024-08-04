import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useState } from 'react';

import UserError from '../UserError/UserError';

export default function EditAttractionModal({
    show,
    onEditModalClose,
    onEditHandler,
    attraction,
}) {
    const [userErrorMessage, setUserErrorMessage] = useState("");



    const onSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { name,
            image,
            address,
            hours,
            phone,
            price,
            website,
            description } = Object.fromEntries(formData);

        if (!name || !image || !address || !hours || !phone || !price || !website || !description) {
            setTimeout(() => {
                setUserErrorMessage("");
            }, 2500);

            return setUserErrorMessage("All input fields are required");
        };

        onEditHandler({
            name,
            image,
            address,
            hours,
            phone,
            price,
            website,
            description
        });
    };

    return (
        <Modal show={show} onHide={onEditModalClose} onEscapeKeyDown={onEditModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Attraction</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="name" placeholder="Attraction's name.." defaultValue={attraction.name} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="image" placeholder="Attraction's image URL.." defaultValue={attraction.image} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="address" placeholder="Attraction's address.." defaultValue={attraction.address} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="hours" placeholder="Attraction's operating hours.." defaultValue={attraction.hours} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="phone" placeholder="Attraction's phone.." defaultValue={attraction.phone} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="price" placeholder="Attraction's entrance fee.." defaultValue={attraction.price} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="website" placeholder="Attraction's website URL.." defaultValue={attraction.website} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="description" placeholder="Attraction's short description.." defaultValue={attraction.description} />
                    </Form.Group>

                    {userErrorMessage && <UserError message={userErrorMessage} />}

                    <Modal.Footer>
                        <Button variant="primary" type="submit">Save</Button>
                        <Button variant="secondary" onClick={onEditModalClose}>Close</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>
        </Modal>
    );
}