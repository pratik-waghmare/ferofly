import "./Contact.scss";
import { Form, Button, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="flex__center center contact">
      <div className="contact__heading">
        <h5 className="card-title h5">CONTACT US</h5>
      </div>
      <div className="contact__details">
        <ul>
          <li>
            <a href="#">info@mysite.com</a>
          </li>
          <li>
            <a href="#">500 Terry Francois Street</a>
          </li>
          <li>
            <a href="#">Tel: 123-456-7890</a>
          </li>
        </ul>
      </div>
      <div
        className="contact__form center mt-5"
        style={{ maxWidth: "600px", width: "90%" }}
      >
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Control type="text" placeholder="Name*" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Control type="email" placeholder="Email*" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Control placeholder="Subject" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={7} placeholder="Message" />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{
              width: "100%",
              borderRadius: "0px",
              backgroundColor: "#242323",
              border: "none",
            }}
          >
            Send
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
