import React from "react";
import Testimonial from "../Home/Testimonial/Testimonial";
import CopyRight from "../CopyRight/CopyRight";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  justify-content: center;
  color: #fff;
  width: 100%;
  background-color: #232323;
`;
const Container = styled.div`
  margin: 0 3%;
  width: 100%;
  max-width: ${({ theme }) => theme.screenSize.maxWidth};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(auto, 1fr); */
  gap: 20px;
  .container3 {
    grid-column: 3 / 5;
  }
`;
const Column1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Column2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Column3 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  gap: 20px;
  i {
    font-size: 0.8rem;
    margin-top: 6px;
  }
  p {
    font-size: 0.8rem;
    margin: 0;
  }
`;

function Contact() {
  return (
    <div style={{ width: "100%" }}>
      <Testimonial />
      <Body>
        <Container>
          <Column1>
            <h2>About Us</h2>
            <Row>
              <i className="fa-solid fa-location-arrow"></i>
              <p>Recibo, 99 Knightsbridge, London</p>
            </Row>
            <Row>
              <i className="fa-solid fa-location-arrow"></i>
              <p>Recibo, 99 Knightsbridge, London</p>
            </Row>
            <Row>
              <i className="fa-solid fa-location-arrow"></i>
              <p>Recibo, 99 Knightsbridge, London</p>
            </Row>
          </Column1>
          <Column2>
            <h1 className="container2" style={{ background: "#715871" }}>
              Container2
            </h1>
            <h1 className="container2" style={{ background: "#715871" }}>
              Container2
            </h1>
            <h1 className="container2" style={{ background: "#715871" }}>
              Container2
            </h1>
          </Column2>
          <Column3 className="container3" style={{ background: "#538ea2" }}>
            Container3
          </Column3>
        </Container>
      </Body>
      <CopyRight />
    </div>
  );
}

export default Contact;
