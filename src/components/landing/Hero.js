import { Col, Container, Row, Stack } from "react-bootstrap";

import { LandingButton } from "./LandingBtn";
import { LoginBtn } from "./LoginBtn";
import { SignupBtn } from "./SignupBtn";

import "./Hero.css";

export function Hero(props) {
  return (
    <>
      <Stack className="btnStack" direction="horizontal" gap={2}>
        <div className="ms-auto">
          <LoginBtn></LoginBtn>
        </div>
        <div>
          <SignupBtn></SignupBtn>
        </div>
      </Stack>
      <div className="center">
        <div className="sec">
          <Stack className="heroStack" gap={5}>
            <Container>
              <Row>
                <Col></Col>
                <Col className="primaryTxt" md="auto">
                  ¿Buscando equipo?
                </Col>
                <Col></Col>
              </Row>
              <Row>
                <Col></Col>
                <Col className="secondaryTxt" md="auto">
                  Únete a la comunidad de gamers más grande de LATAM
                </Col>
                <Col></Col>
              </Row>
            </Container>
            <LandingButton></LandingButton>
          </Stack>
        </div>
      </div>
    </>
  );
}
