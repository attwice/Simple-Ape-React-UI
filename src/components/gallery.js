import React from "react";
// import { Carousel } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1200 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 1200, min: 992 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 992, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 360 },
    items: 2
  }
};

const Gallery = () => {
  return (
    <div >
      <h2 className="ournftbg f-70 font-weight-bold font-ms mt-300 text-center">
        OUR NFT'S
      </h2>
      <p className="f-23 mt-3 text-center font-ms">
        weiurghlrenglsiefnlwriuenflshlifug afuihlws f aefbuawlef a<br />
        aquwegfkhebvfwuefbvkeusfhgbk qruvnblauicbd.la<br />
        wriegnbleifgnblsdfjng
      </p>

      <div className="IndicatorCarousel">
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="IndicatorCarouselCard">
            <img className="w-100" src="../images/Group 101.png" />
          </div>
          <div className="IndicatorCarouselCard">
            <img className="w-100" src="../images/Edit 1.png" />
          </div>
          <div className="IndicatorCarouselCard">
            <img className="w-100" src="../images/Group 101.png" />
          </div>
          <div className="IndicatorCarouselCard">
            <img className="w-100" src="../images/Edit 1.png" />
          </div>
          <div className="IndicatorCarouselCard">
            <img className="w-100" src="../images/Group 101.png" />
          </div>
          <div className="IndicatorCarouselCard">
            <img className="w-100" src="../images/Edit 1.png" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;