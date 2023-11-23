import React from "react";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <div>logo</div>
      <div>
        <i className="bi bi-moon-stars-fill" />
        {/* <i className="bi bi-brightness-high-fill"></i> */}
      </div>
    </Container>
  );
}
