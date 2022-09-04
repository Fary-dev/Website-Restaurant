import React from "react";
import styled from "styled-components";
import RecentArticles from "../RecentArticles/RecentArticles";

const Banner = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#ffd44c",
  justifyContent: "center",
  alignItems: "center",
  // padding: "0 3%",
};
const Container = styled.div`
  max-width: ${({ theme }) => theme.screenSize.maxWidth};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  gap: 50px;
  img {
    height: 50px;
  }
  @media (width < 767px) {
    flex-direction: column;
    gap: 10px;
    padding: 40px 0;
    max-width: 400px;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  h1 {
    font-family: "Birthstone";
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    line-height: 4rem;
    word-wrap: wrap;
    text-align: center;
    padding: 0;
    margin: 0;
  }
  h2 {
    font-family: Arial;
    font-size: 0.9rem;
    font-weight: 100;
    line-height: 2rem;
    word-wrap: wrap;
    text-align: center;
    padding: 0;
    margin: 0;
  }
`;

function GeneralInformation() {
  return (
    <div style={Banner}>
      <Container>
        <img
          src="https://i.kisscc0.com/20180814/llq/kisscc0-loudspeaker-speakerphone-sound-megaphone-computer-loud-megaphone-5b72b9deaf4dd3.3172438115342453427181.png"
          alt=""
        />
        <Row>
          <h1>Special Promotion For This Month!</h1>
          <h2>
            Come with more than 8 people get 20% off. Bring all your friends
            here!
          </h2>
        </Row>
      </Container>
      <RecentArticles />
    </div>
  );
}

export default GeneralInformation;
