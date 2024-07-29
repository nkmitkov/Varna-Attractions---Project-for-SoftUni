import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useEffect, useState } from 'react';

export default function EditAttractionModal({
    show,
    onEditModalClose,
    onEditHandler,
    attraction,
}) {
    const [formValues, setFormValues] = useState({});

    useEffect(() => {
        setFormValues(attraction);
    }, []);

    const onChangeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const resetFormHandler = (isClear) => {
        if (isClear) {
            return setFormValues({
                name: "",
                image: "",
                address: "",
                hours: "",
                phone: "",
                price: "",
                website: "",
                description: "",
            });
        }
        setFormValues(attraction)
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

        onEditHandler(formValues);
    };

    return (
        <Modal show={show} onHide={onEditModalClose} onEscapeKeyDown={onEditModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Attraction</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="name" placeholder="Attraction's name.." value={formValues.name} onChange={onChangeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="image" placeholder="Attraction's image URL.." value={formValues.image} onChange={onChangeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="address" placeholder="Attraction's address.." value={formValues.address} onChange={onChangeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="hours" placeholder="Attraction's operating hours.." value={formValues.hours} onChange={onChangeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="phone" placeholder="Attraction's phone.." value={formValues.phone} onChange={onChangeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="price" placeholder="Attraction's entrance fee.." value={formValues.price} onChange={onChangeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="website" placeholder="Attraction's website URL.." value={formValues.website} onChange={onChangeHandler} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" name="description" placeholder="Attraction's short description.." value={formValues.description} onChange={onChangeHandler} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onSubmitHandler}>Save</Button>
                <Button variant="secondary" onClick={(e) => resetFormHandler()}>Reset</Button>
                <Button variant="secondary" onClick={(e) => resetFormHandler(true)}>Clear</Button>
                <Button variant="secondary" onClick={onEditModalClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}