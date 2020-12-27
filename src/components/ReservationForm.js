import "date-fns";

import { useState } from "react";
import { Form, Col, Button, FormControl } from "react-bootstrap";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import "./ReservationForm.css";

const ReservationForm = (props) => {
  // The first commit of Material-UI
  const [checkInDate, setCheckInDate] = useState(
    new Date("2020-12-28T21:11:54")
  );

  const [checkOutDate, setCheckOutDate] = useState(
    new Date("2020-12-28T21:11:54")
  );

  const handleCheckInDateChange = (date) => {
    setCheckInDate(date);
  };

  const handleCheckOutDateChange = (date) => {
    setCheckOutDate(date);
  };

  return (
    <div
      className="reservationForm flex__center pt-5"
      style={{ textAlign: "center" }}
    >
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Form>
          <Form.Row className="align-items-center">
            <Col xs="auto">
              <Form.Group
                className="input__date"
                controlId="formBasicCheckInDate"
              >
                <Form.Label>Check In</Form.Label>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  value={checkInDate}
                  onChange={handleCheckInDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group
                className="input__date"
                controlId="formBasicCheckInDate"
              >
                <Form.Label>Check Out</Form.Label>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  value={checkOutDate}
                  onChange={handleCheckOutDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="number__input" controlId="formBasicEmail">
                <Form.Label>Adults</Form.Label>
                <FormControl
                  type="number"
                  id="inlineFormInputGroup"
                  placeholder="0"
                />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Form.Group className="number__input" controlId="formBasicEmail">
                <Form.Label>Kids</Form.Label>
                <FormControl
                  type="number"
                  id="inlineFormInputGroup"
                  placeholder="0"
                />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Button variant="outline-light" className="flex__center">
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default ReservationForm;
