import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  display: block;
  padding: 7px 3%;
  background-color: #0f0f0f;
  width: 100%;
  color: ${({ theme }) => theme.text.detailsColor};
`;
const Container = styled.footer`
  width: 100%;
  max-width: ${({ theme }) => theme.screenSize.maxWidth};
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  p {
    color: ${({ theme }) => theme.text.underTitleColor};
    font-size: clamp(0.5rem, 3vw, 0.8rem);
    letter-spacing: 1px;
  }
  i {
    font-size: 0.8rem;
  }
  @media (width < 768px) {
    justify-content: space-between;
    flex-direction: column;
  }
`;
const SocialIcon = styled.div`
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    color: ${({ theme }) => theme.text.underTitleColor};
    &:hover {
      color: ${({ theme }) => theme.text.detailsColor};
      cursor: pointer;
    }
  }
`;
function CopyRight() {
  return (
    <Footer>
      <Container>
        <SocialIcon>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-pinterest-p"></i>
          <i className="fa-brands fa-instagram"></i>
        </SocialIcon>
        <p>Copyright 2022 Faramarz. All Right Revered.</p>
      </Container>{" "}
    </Footer>
  );
}

export default CopyRight;
