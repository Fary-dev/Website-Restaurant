import React from "react";
import styled from "styled-components";

const CustomNavbar = styled.div`
  background: rgba(0, 0, 0, 0.7);
  margin: 0 auto;
  padding: 10px 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  color: ${({ theme }) => theme.text.wightColor};
  max-width: ${({ theme }) => theme.screenSize.maxWidth};
  @media (width < 1100px) {
    flex-direction: column;
  }
  @media (width < 768px) {
    flex-direction: row;
    padding: 3% 15%;
    background: #000;
    border-radius: 0;
  }
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
  @media (width < 768px) {
    background: #000;
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 25px;
  span {
    color: ${({ theme }) => theme.primaryColor};
    font-size: 2rem;
    font-weight: 600;
    font-family: "Marck Script";
    i {
      padding: 0 0 0 15px;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 25px;
  ul {
    display: flex;
    position: relative;
    justify-content: center;
    flex-wrap: nowrap;
    list-style-type: none;
    padding: 0;
    gap: 0 20px;
  }
  a {
    display: block;
    font-weight: 600;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.text.detailsColor};
    transition: ease 0.3s color;
    &:hover {
      color: ${({ theme }) => theme.text.wightColor};
    }
  }
  i {
    font-size: 0.8rem;
  }
  @media (width < 768px) {
    display: none;
  }
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
const Container = styled.div`
  margin: 0 3%;
  @media (width < 768px) {
    margin: 0;
  }
`;
const BurgerIcon = styled.div`
  display: none;
  padding: 0;
  margin: 0;
  i {
    font-size: 2rem;
  }
  @media (width < 768px) {
    display: block;
  }
`;
function Navbar() {
  return (
    <Container>
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
      <CustomNavbar>
        <Row>
          <span>
            Foodo<i class="fa-solid fa-wheat-awn"></i>
          </span>
        </Row>
        <BurgerIcon>
          <i class="fa-solid fa-bars"></i>
        </BurgerIcon>
        <Nav>
          <ul>
            <li>
              <a href="#a">home</a>
            </li>
            <li>
              <a href="#a">menu</a>
            </li>
            <li>
              <a href="#a">chefs</a>
            </li>
            <li>
              <a href="#a">reservation</a>
            </li>
            <li>
              <a href="#a">pages</a>
            </li>
            <li>
              <a href="#a">blog</a>
            </li>
          </ul>
          <a href="#a">
            <i class="fa-solid fa-magnifying-glass"></i>
          </a>
        </Nav>
      </CustomNavbar>
    </Container>
  );
}

export default Navbar;
