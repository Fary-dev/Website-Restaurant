import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 650px;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
  color: #fff;
  &::before {
    backdrop-filter: blur(2px);
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
  @media (width < 767px) {
    height: auto;
  }
`;
const Container = styled.div`
  height: 100%;
  width: 100%;
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  line-height: 0.7rem;
  padding: 50px 3%;
  h1 {
    display: inline-block;
    position: relative;
    font-size: clamp(1rem, 11vw, 3rem);
    font-family: "Marck Script";

    @media (width > 767px) {
      &::before,
      &::after {
        position: absolute;
        top: 50%;
        width: 80px;
        height: 4px;
        content: "";
        left: -125px;
        border-bottom: 1px solid ${({ theme }) => theme.primaryColor};
        border-top: 1px solid ${({ theme }) => theme.primaryColor};
        margin: 0 20px;
      }
      &::after {
        left: 100%;
      }
    }
  }
  h2 {
    position: relative;
    font-size: 2rem;
    color: #fff;
    padding-bottom: 40px;
  }
`;
function RecentArticles() {
  return (
    <Banner>
      <Container>
        <h1>How to get to us</h1>
        <h2>hallo</h2>
      </Container>
    </Banner>
  );
}

export default RecentArticles;
