import { Card } from "react-bootstrap";

import "./ServicesCard.scss";

const ServicesCard = (props) => {
  return (
    <Card
      className="p-4"
      style={{
        width: "300px",
        border: "none",
        borderRadius: "0px",
      }}
    >
      <Card.Img
        className="center"
        variant="top"
        src={props.image}
        style={{
          width: "40px",
          height: "42px",
          display: `${!props.image ? "none" : null}`,
          textAlign: "center",
          justifySelf: "center",
          alignSelf: "center",
        }}
      />
      <Card.Body>
        <Card.Title
          style={{ fontWeight: "400", fontSize: "1.1em", textAlign: "center" }}
        >
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{props.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServicesCard;
