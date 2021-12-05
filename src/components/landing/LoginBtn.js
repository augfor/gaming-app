import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export function LoginBtn(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="secondary" size="sm" onClick={handleShow}>
        Log In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log in a GAPP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu nombre de usuario"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Contraseña" />
              <Form.Text className="text-muted">
                ¿Tienes problemas para ingresar?
              </Form.Text>
            </Form.Group>

            <Button className="mb-3" variant="primary" type="submit">
              Log In
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
