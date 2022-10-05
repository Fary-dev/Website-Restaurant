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
  margin: 40px 3%;
  width: 100%;
  max-width: ${({ theme }) => theme.screenSize.maxWidth};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(auto, 1fr); */
  gap: 20px;
  .container3 {
    grid-column: 3 / 5;
  }
  @media (width< 768px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
    max-width: 400px;
  }
`;
const Column1 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.text.detailsColor};
  h1 {
    font-size: 1.2rem;
    font-family: "Marck Script";
  }
`;
const Column2 = styled(Column1)`
  span {
    width: 100%;
    border-bottom: 1px solid #353535;
  }
  p {
    color: ${({ theme }) => theme.text.underTitleColor};
    &:hover {
      color: ${({ theme }) => theme.text.detailsColor};
      cursor: pointer;
    }
  }
`;
const Column3 = styled(Column1)`
  p {
    color: ${({ theme }) => theme.text.underTitleColor};
  }
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
const ListPhoto = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 100%;
  }
`;

function Contact() {
  return (
    <div style={{ width: "100%" }}>
      <Testimonial />
      <Body>
        <Container>
          <Column1>
            <h1>About Us</h1>
            <Row>
              <i className="fa-solid fa-location-arrow"></i>
              <p>Foodo, 100 Exampel, Österreich</p>
            </Row>
            <Row>
              <i className="fa-solid fa-phone"></i>
              <p>+44-30-3544-7658</p>
            </Row>
            <Row>
              <i className="fa-solid fa-mobile-screen-button"></i>
              <p>+44-30-3874-7658</p>
            </Row>
            <Row>
              <i className="fa-solid fa-envelope"></i>
              <p>reservation@reciborestaurant.com</p>
            </Row>
            <Row>
              <i className="fa-solid fa-link"></i>
              <p>http://reciborestaurantthemes.com</p>
            </Row>
          </Column1>
          <Column2>
            <h1 className="container2">Recent Posts</h1>
            <Row>
              <i class="fa-solid fa-chevron-right"></i>
              <p>Sem Porta Mollis Parturient</p>
            </Row>
            <span />
            <Row>
              <i class="fa-solid fa-chevron-right"></i>
              <p>Nullam Lorem Mattis Purus</p>
            </Row>
            <span />
            <Row>
              <i class="fa-solid fa-chevron-right"></i>
              <p>Nibh Sem Sit Ullamcorper</p>
            </Row>
            <span />
            <Row>
              <i class="fa-solid fa-chevron-right"></i>
              <p>Donec luctus imperdiet</p>
            </Row>
            <span />
          </Column2>
          <Column3 className="container3">
            <h1>Award Winning</h1>
            <ListPhoto>
              <img
                src="https://demo.goodlayers.com/recibo/wp-content/uploads/2015/06/awards.png"
                alt="image1"
              />
            </ListPhoto>
            <p>
              Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum
              id ligula porta felis euismod semper. Aenean lacinia bibendum
              nulla sed consectetur. Donec ullamcorper nulla non metus auctor
              fringilla. Duis mollis, est non commodo luctus.
            </p>
          </Column3>
        </Container>
      </Body>
      <CopyRight />
    </div>
  );
}

export default Contact;
