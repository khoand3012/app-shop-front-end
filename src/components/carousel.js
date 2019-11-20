import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

const items = [
  {
    id: 1,
    altText: "Slide 1",
    caption: "Slide 1",
    src:
      "https://nice-assets.s3-accelerate.amazonaws.com/smart_templates/ca4c35d0e5d51f9c8d18ce77bc30a41d/assets/preview_f364f7f9ed8995dfdfce9a5dc3490ca9.jpg"
  },
  {
    id: 2,
    altText: "Slide 2",
    caption: "Slide 2",
    src: ""
  },
  {
    id: 3,
    altText: "Slide 3",
    caption: "Slide 3",
    src: ""
  }
];

const AutoCarousel = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        className="custom-tag bg-dark"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src}></img>
        <CarouselCaption
          className="text-danger"
          captionText={item.altText}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              margin-top: 10px;
              max-width: 100%;
              height: 300px;
              background: black;
            }            
            .carousel-item.active{
                display:flex;
                flex-direction:column;
                align-items:center;
            }
            .carousel-item > img{
                height:100%;
                width: auto;
            }
            .carousel-caption {
                background: rgba(25,25,25,0.5)
            }
            .carousel-caption > h3{
                color:white;
            }
            .carousel-caption > p{
                color:white;
            }
            `}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </div>
  );
};

export default AutoCarousel;
