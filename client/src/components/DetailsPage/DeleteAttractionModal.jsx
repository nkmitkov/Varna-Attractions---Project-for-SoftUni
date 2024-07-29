import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function DeleteAttractionModal({
    show,
    onDeleteModalClose,
    onDeleteHandler,
    name,
}) {


    return (
        <Modal show={show} onHide={onDeleteModalClose} onEscapeKeyDown={onDeleteModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete <span style={{ fontWeight: "bold" }}>{name}</span> ?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onDeleteModalClose}>Close</Button>
                <Button variant="primary" onClick={onDeleteHandler}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
};