import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { useForm } from '../../hooks/useForm';

export default function EditAttractionModal({
    show,
    onEditModalClose,
    onEditHandler,
    attraction,
}) {
    const {
        formValues,
        onChangeHandler,
        onSubmit,
        resetFormHandler
    } = useForm(attraction, onEditHandler);

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
                <Button variant="primary" onClick={onSubmit}>Edit</Button>
                <Button variant="secondary" onClick={resetFormHandler}>Reset</Button>
                <Button variant="secondary" onClick={onEditModalClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}