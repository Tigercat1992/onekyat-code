import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { catlist } from '../../constants/categoryConst'; 

class CategorySldier extends React.Component {
  render() {
    return (
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 8,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 4,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 6,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={4}
        swipeable
      >
      {catlist.map((item, i) =>
        <div className="cat-gallery" key={i+1}>
          <FontAwesomeIcon className="cat-gallery-img" icon={item.icon} size='3x' />
          <div className="cat-label">{item.label}</div>
        </div>
      )}
      </Carousel>
    );
  }
}

export default CategorySldier;