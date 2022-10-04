import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const InfoProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  margin: 20px 0;
`;
const ColumnLink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  line-height: 0.8rem;
  letter-spacing: 0.1rem;
  h6 {
    margin: 10px 0 0 10px;
    font-size: 0.9rem;
    letter-spacing: 1px;
  }
  p {
    margin: 10px 0 0 10px;
    font-size: 0.7rem;
  }
  i {
    padding: 0;
    margin: 10px 2px;
    font-size: 0.6rem;
    color: ${({ theme }) => theme.primaryColor};
  }
`;
const Rate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 100%;
  margin-left: 10px;
`;
const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: end;
  margin: 0 10px 0 0;
  line-height: 0;
  p {
    margin: 20px 10px;
    font-size: 2rem;
    color: ${({ theme }) => theme.primaryColor};
    font-family: "Marck Script";
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.screenSize.maxWidth};
  overflow: hidden;
  padding: 0;
  img {
    aspect-ratio: 3/2;
    width: 100%;
    border-radius: 5px;
  }
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    max-width: 420px;
    @media (width < 1000px) {
      max-width: 50%;
      flex: 0 0 50%;
    }
    @media (width < 500px) {
      max-width: 100%;
      flex: 0 0 100%;
    }
  }
`;

function Slider({ slides }) {
  return (
    <Container>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.photo} alt={`img-${index}`} />
            <InfoProduct>
              <ColumnLink>
                <h6>{slide.title}</h6>
                <p>{slide.details}</p>
                <Rate>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </Rate>
              </ColumnLink>
              <ColumnRight>
                <p>{`$${slide.price}`}</p>
              </ColumnRight>
            </InfoProduct>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Slider;
