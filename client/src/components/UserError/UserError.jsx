import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

export default function UserError({
    message
}) {
    const [showAlert, setShowAlert] = useState(true);

    // setTimeout(() => {
    //     setShowAlert(false);
    // }, 2500);

    return (
        <Alert 
            show={showAlert} 
            variant={"danger"} 
            style={{ textAlign: "center" }}
        >
            {message}
        </Alert>
    );
};