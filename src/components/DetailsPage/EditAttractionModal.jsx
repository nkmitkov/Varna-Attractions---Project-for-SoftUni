import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function EditAttractionModal({
    show,
    onEditModalClose,
    onEditHandler,
    data,
}) {
    return (
        <Modal show={show} onHide={onEditModalClose} onEscapeKeyDown={onEditModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Attraction</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="name" placeholder="Attraction's name.." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="image" placeholder="Attraction's image URL.." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="address" placeholder="Attraction's address.." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="hours" placeholder="Attraction's operating hours.." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="phone" placeholder="Attraction's phone.." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="price" placeholder="Attraction's entrance fee.." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="website" placeholder="Attraction's website URL.." />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="description" placeholder="Attraction's short description.." />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onEditModalClose}>Close</Button>
                <Button variant="primary" onClick={onEditHandler}>Edit</Button>
            </Modal.Footer>
        </Modal>
    );
}