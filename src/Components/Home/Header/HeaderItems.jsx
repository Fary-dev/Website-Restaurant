import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  max-width: ${({ theme }) => theme.screenSize.maxWidth};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  @media (width > 767px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
  }
  margin: 0 3%;
  border-radius: 7px 7px 0 0;
  overflow: hidden;
  background: #aa1;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--paddingBG);
  justify-content: start;
  align-items: start;
  max-width: 400px;
  min-width: 250px;
  max-height: 400px;
  padding: 10px 40px;
  box-sizing: border-box;
  h2 {
    font-family: "Birthstone";
    font-weight: 700;

    i {
      font-size: 2.5rem;
      padding: 0 15px 0 0;
    }
  }
  p {
    text-align: justify;
    font-size: 0.8rem;
    margin: 0;
  }
  h6 {
    font-family: "Poppins";
  }
`;
const ItemList = [
  {
    title: "Perfect for dining",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elis. Quisquam, iure. Ducimus alias velit labours Mobis! Dolores qui eagre ad Magna!",
    readMore: "READ MORE",
  },
  {
    title: "Always New Menu",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elite. Quisquam, iure. Ducimus alias velit labrum mobis! Dolores qui eagle ad magnum!",
    readMore: "READ MORE",
  },
  {
    title: "Only Best Service",
    details:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elia. Quisquam, iure. Ducimus alias velit labarum mobis! Dolores qui eagre ad magnum!",
    readMore: "READ MORE",
  },
];

function HeaderItems() {
  return (
    <Grid>
      {ItemList.map((item, key) => (
        <Item
          style={{
            "--paddingBG": `${
              key === 0
                ? "rgb(255,212,76)"
                : key === 1
                ? "rgb(233,192,81)"
                : "rgb(214,179,83)"
            }`,
          }}
        >
          <h2>
            <i
              class={
                key === 0
                  ? "fa-solid fa-martini-glass-citrus"
                  : key === 1
                  ? "fa-solid fa-bowl-rice"
                  : "fa-solid fa-bell-concierge"
              }
            ></i>
            {item.title}
          </h2>
          <p>{item.details}</p>
          <h6>{item.readMore}</h6>
        </Item>
      ))}
    </Grid>
  );
}

export default HeaderItems;
