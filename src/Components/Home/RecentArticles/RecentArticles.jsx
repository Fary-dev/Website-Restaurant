import React from "react";
import styled, { CSSProperties } from "styled-components";

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
  max-width: ${({ theme }) => theme.screenSize.maxWidth};
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  line-height: 0.7rem;
  padding: 50px 0;
  margin: 0 3%;
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
`;
const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: Row;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  @media (width < 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  width: 33.33%;
  gap: 20px;
  @media (width < 767px) {
    width: 100%;
    max-width: 400px;
  }
  h4 {
    letter-spacing: 2px;
    font-weight: 500;
  }
  p {
    font-size: 0.7rem;
    letter-spacing: 0.05rem;
    font-family: Arial, "Open Sans";
    color: ${({ theme }) => theme.text.weight};
    line-height: 1.3rem;
    font-weight: 100;
    padding: 0;
    margin: 0;
    @media (width < 839px) and (width > 767px) {
      font-size: 0.6rem;
    }
  }
  i {
    padding: 5px 15px 0 0;
    font-size: 0.8rem;
  }
`;
const RowItem: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "start",
};
const RowItemWithSpaceBetween: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  width: "100%",
};
const ColumnItem: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "start",
};
const Button = styled.a`
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  text-decoration: none;
  background-color: transparent;
  padding: 15px 25px;
  border: 2px solid ${({ theme }) => theme.primaryColor};
  border-radius: 5px;
  margin-top: 25px;
  &:hover {
    background-color: ${({ theme }) => theme.primaryColor};
    color: #000;
  }
`;

function RecentArticles() {
  return (
    <Banner>
      <Container>
        <h1>How to get to us</h1>
        <Row>
          <Column>
            <h4>RESERVATION</h4>
            <p>
              We only accept reservation before 17:00 Tables held for 30 minutes
              only from reservation time.
            </p>
            <p>
              Dress code applies : Smart Casual, no singlets, flips flops, sport
              shorts. Reservations are required
            </p>
            <Button>Reserve table</Button>
          </Column>
          <Column>
            <h4>CONTACT INFO</h4>
            <div style={RowItem}>
              <i className="fa-solid fa-location-arrow"></i>
              <div style={ColumnItem}>
                <p>
                  Foodo Restaurant
                  <br />
                  Ludwig, 99 Vianna, Austria
                </p>
              </div>
            </div>
            <div style={RowItem}>
              <i className="fa-solid fa-phone"></i>
              <div style={ColumnItem}>
                <p>
                  +43-11-123-4567
                  <br />
                  +43-11-222-3456
                </p>
              </div>
            </div>
            <div style={RowItem}>
              <i className="fa-solid fa-envelope"></i>
              <div style={ColumnItem}>
                <p>reservation@foodorestaurant.com</p>
              </div>
            </div>
          </Column>
          <Column>
            <h4>OPENING HOURS</h4>
            <div style={RowItemWithSpaceBetween}>
              <div style={ColumnItem}>
                <p>
                  <i className="fa-regular fa-clock"></i>
                  Monday
                </p>
              </div>
              <p>10:00 AM - 9:00 PM</p>
            </div>
            <div style={RowItemWithSpaceBetween}>
              <div style={ColumnItem}>
                <p>
                  <i className="fa-regular fa-clock"></i>
                  Tuesday
                </p>
              </div>
              <p>CLOSED</p>
            </div>
            <div style={RowItemWithSpaceBetween}>
              <div style={ColumnItem}>
                <p>
                  <i className="fa-regular fa-clock"></i>
                  Wednesday
                </p>
              </div>
              <p>10:00 AM - 9:00 PM</p>
            </div>
            <div style={RowItemWithSpaceBetween}>
              <div style={ColumnItem}>
                <p>
                  <i className="fa-regular fa-clock"></i>
                  Thursday
                </p>
              </div>
              <p>10:00 AM - 9:00 PM</p>
            </div>
            <div style={RowItemWithSpaceBetween}>
              <div style={ColumnItem}>
                <p>
                  <i className="fa-regular fa-clock"></i>
                  Friday
                </p>
              </div>
              <p>10:00 AM - 9:00 PM</p>
            </div>
            <div style={RowItemWithSpaceBetween}>
              <div style={ColumnItem}>
                <p>
                  <i className="fa-regular fa-clock"></i>
                  Saturday
                </p>
              </div>
              <p>09:00 AM - 11:00 PM</p>
            </div>
            <div style={RowItemWithSpaceBetween}>
              <div style={ColumnItem}>
                <p>
                  <i className="fa-regular fa-clock"></i>
                  Sunday
                </p>
              </div>
              <p>09:00 AM - 11:00 PM</p>
            </div>
          </Column>
        </Row>
      </Container>
    </Banner>
  );
}

export default RecentArticles;
