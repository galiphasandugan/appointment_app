import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function AddModal({drname, apps, setApps, show, handleClose }) {
    const [name,setName]=useState("")
    const [date,setDate]=useState(new Date().toISOString().slice(0,10))

    const handleSubmit = (e) =>{
        e.preventDefault()
        setApps([...apps, 
          {
          id:apps.length + 1,
          patient:name,
          day:date,
          consulted:false,
          doctor:drname,
        }
      ])
        handleClose()
    }
    console.log(name,date)
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" onChange={(e)=> setName(e.target.value)} value={name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="date" onChange={(e)=> setDate(e.target.value)} value={date} />
            </Form.Group>
            <div className="text-center">
              <Button variant="success" type="submit"className="me-2" >
                Save
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal;
