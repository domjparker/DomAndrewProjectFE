import React from "react";
import Card from "react-bootstrap/Card";

function Footer() {
  return (
    <div>
      <Card className="text-center">
        <Card.Footer className="text-muted">
          <p>
            &copy; 2021
            <a href="https://www.linkedin.com/in/dominic-j-parker/"> Dominic Parker </a>
            &
            <a href="https://www.linkedin.com/in/andrew-bergstrom/"> Andrew Bergstrom</a>
          </p>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Footer;
