import { Card, Button } from "react-bootstrap";

import ReviewSwiper from "./ReviewSwiper";

import "./ParallaxContainer.css";

const ParallaxContainer = (props) => {
  if (props.carousal) {
    return (
      <div
        className="parallax bg__image--one center"
        style={{ textAlign: "center" }}
      >
        <Card className="p-3 parallax__card">
          <Card.Body>
            <Card.Title className="mb-4">{props.title}</Card.Title>
            <Card.Text>
              <ReviewSwiper reviews={props.reviews} />
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }

  if (props.messageContainer) {
    return (
      <div
        className="parallax bg__image--one center"
        style={{ textAlign: "center" }}
      >
        <Card className="p-3 parallax__card">
          <Card.Body>
            <Card.Title className="mb-5" style={{ textAlign: "center" }}>
              {props.title}
            </Card.Title>
            <Card.Text style={{ textAlign: "center" }}>
              {props.content}
            </Card.Text>
            <Button
              variant="outline-light"
              className="mt-3"
              bg="#000"
              style={{
                borderRadius: "0px",
                transition: "0.3s ease-in-out",
                borderColor: "#000",
                color: "#000",
              }}
            >
              Book a Room
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return <div className="parallax bg__image--one center"></div>;
};

export default ParallaxContainer;
