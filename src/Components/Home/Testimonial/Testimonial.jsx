import React from "react";
import styled from "styled-components";

const Body = styled.div`
  position: relative;
  display: block;
  color: #fff;
  width: 100%;
  padding: 60px 20px;
  text-align: center;
  background-image: url("https://www.multifoodindustries.com/wp-content/uploads/2021/06/Artboard_1-fMbwe7gs-scaled.jpg");
  background-size: cover;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  line-height: 0.7rem;
  padding: 0 3%;

  h1 {
    position: relative;
    font-size: clamp(1rem, 11vw, 3rem);
    font-family: "Marck Script";
    color: ${({ theme }) => theme.primaryColor};
  }
  p {
    position: relative;
    width: 100%;
    max-width: 400px;
    font-size: clamp(0.1rem, 5vw, 1rem);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 2rem;
    @media (width > 767px) {
      max-width: 600px;
    }
  }
  span {
    font-size: clamp(0.1rem, 5vw, 1rem);
    color: ${({ theme }) => theme.primaryColor};
  }
`;

function Testimonial() {
  return (
    <Body>
      <Container>
        <h1>Testimonial</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non,
          incidunt asperiores Sit non fuguist adipisicing Total temporizers
          skep, ducimus accusant vern rescinds custom provident libero office
          arum nisi consequently option.
        </p>
        <p>
          Alexander Müller, <span>Journalist</span>
        </p>
      </Container>
    </Body>
  );
}

export default Testimonial;
