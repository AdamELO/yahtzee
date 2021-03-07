import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function MyModal(props) {
    return (
        <Modal
            className='text-center'
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <Modal.Header closeButton className='bg-danger'>
                <Modal.Title id="contained-modal-title-vcenter">
                Entrez votre nom de joueur
                </Modal.Title>
            </Modal.Header> */}
            <Modal.Body className='p-5 bgname'>
                <h4>votre nom</h4>
                <label htmlFor="">Nom:</label>
                <input type="text"/>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}
export default MyModal;