import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 3%;
  // margin-top: 90px;
  max-width: ${({ theme }) => theme.screenSize.maxWidth};
  gap: 10px;
  @media (width > 767px) {
    flex-direction: row;
  }
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  h1 {
    font-family: "Birthstone";
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    line-height: 3rem;
    word-wrap: wrap;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  h2 {
    position: relative;
    font-family: "Poppins", "Open Sans", Arial;
    font-size: 1rem;
    line-height: 1.2rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: 0.1rem;
    color: ${({ theme }) => theme.text.underTitleColor};
    padding-bottom: 30px;
    &::after {
      content: "";
      position: absolute;
      width: 50px;
      height: 2px;
      background: ${({ theme }) => theme.primaryColor};
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }
  p {
    font-size: 0.8rem;
    letter-spacing: 0.05rem;
    font-family: Arial, "Open Sans";
    color: ${({ theme }) => theme.text.detailsColor};
    text-align: center;
    line-height: 1.3rem;
    font-weight: 100;
    padding: 0;
  }
  @media (width < 768px) {
    width: 100%;
    max-width: 400px;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  gap: 20px;

  img {
    max-width: 47%;
    object-fit: contain;
  }
  @media (width < 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 400px;
    img {
      max-width: 100%;
      margin-top: 30px;
    }
  }
`;
const Button = styled.a`
  display: block;
  font-weight: 600;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  text-decoration: none;
  background-color: transparent;
  padding: 10px 25px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 5px;
  margin-top: 25px;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;

function About() {
  return (
    <Container id={"about"}>
      <Left>
        <h1>Little About Us</h1>
        <h2>THE HISTORY OF US</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing Dolores. Ad Lorem
          ipsum dolor, sit amet consectetur adipisicing elis. Quisquam, iure.
          Ducimus alias velit labours Mobis, Dolores qui eagre ad Magna.
        </p>
        <Button>read more</Button>
      </Left>
      <Right>
        <img
          src="https://max-themes.net/demos/recibo/upload/food-circle-6.png"
          alt=""
        />
        <img
          src="https://max-themes.net/demos/recibo/upload/food-circle-5.png"
          alt=""
        />
      </Right>
    </Container>
  );
}

export default About;
