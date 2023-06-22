import React from "react";

import NavDropdown from "react-bootstrap/NavDropdown";
import Stack from "react-bootstrap/Stack";
import "bootstrap/dist/css/bootstrap.min.css";

import Flow from "./Flow";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Stack direction="horizontal" gap={3}>
        <NavDropdown title="File">
          <NavDropdown.Item href="">Open</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="New element">
          <NavDropdown.Item href="">New EntityType</NavDropdown.Item>
          <NavDropdown.Item href="">New Relationship</NavDropdown.Item>
        </NavDropdown>
      </Stack>

      <div style={{ height: "100%" }}>
        <Flow />
      </div>
    </div>
  );
}
