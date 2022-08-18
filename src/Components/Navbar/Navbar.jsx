import React from "react";
import styled from "styled-components";

const CustomNavbar = styled.div`
  background: #d5a;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: ${({ theme }) => theme.screenSize.maxWidth};
`;
const Info = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.screenSize.maxWidth};
  padding: 0.8rem;
  gap: 0.2rem;
  @media (width < 960px) {
    flex-direction: column;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 25px;
`;
const InfoItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  h6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    color: ${({ theme }) => theme.text.wightColor};
    font-weight: 600;
    font-size: 0.8rem;
    margin: 0;
  }
  i {
    color: ${({ theme }) => theme.text.wightColor};
    font-size: 0.6rem;
    margin: 0 0.5rem;
  }
`;
const SocialMedia = styled.div`
  i {
    color: ${({ theme }) => theme.text.wightColor};
    font-size: 0.7rem;
    margin: 0 0.5rem;
    opacity: 1;
    transition: ease 0.2s opacity;
    &:hover {
      opacity: 0.5;
    }
  }
`;
function Navbar() {
  return (
    <>
      <Info>
        <Row>
          <InfoItem>
            <h6>
              <i class="fa-solid fa-phone"></i>+43-111-222-3333
            </h6>
          </InfoItem>
          <InfoItem>
            <h6>
              <i class="fa-solid fa-envelope"></i>justforexample@gmail.com
            </h6>
          </InfoItem>
        </Row>
        <Row>
          <InfoItem>
            <h6>
              <i class="fa-solid fa-clock"></i>Mo - Fr / 10:00 - 21:00,
              <h6>Sa - So / 09:00 - 23:00</h6>
            </h6>
          </InfoItem>
          <InfoItem>
            <SocialMedia>
              <a href="#a">
                <i class="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#a">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="#a">
                <i class="fa-brands fa-pinterest-p"></i>
              </a>
              <a href="#a">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </SocialMedia>
          </InfoItem>
        </Row>
      </Info>
      <CustomNavbar></CustomNavbar>
    </>
  );
}

export default Navbar;
