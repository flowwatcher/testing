import React, { useState } from "react";

export default function CarouselHomePage(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      image: "/bgCarouselHomeImg.png",
      title: "Prontuário Eletrônico por especialidade",
      description:
        "Ferramenta eficiente, leve, flexível, fácil de operar e com rápida implementação.",
      link: "#",
      buttonText: "Quero conhecer esta solução",
    },
    {
      image: "/bgCarouselHomeImg.png",
      title: "Prontuário Eletrônico por especialidade",
      description:
        "Ferramenta eficiente, leve, flexível, fácil de operar e com rápida implementação.",
      link: "#",
      buttonText: "Quero conhecer esta solução",
    },
    {
      image: "/bgCarouselHomeImg.png",
      title: "Prontuário Eletrônico por especialidade",
      description:
        "Ferramenta eficiente, leve, flexível, fácil de operar e com rápida implementação.",
      link: "#",
      buttonText: "Quero conhecer esta solução",
    },
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      id="homeCarousel"
      className="carousel slide container-fluid"
      data-bs-interval="false"
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img
              className="bd-placeholder-img img-fluid"
              src={slide.image}
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
              alt="bgCarousel"
            />

            <div className="container">
              <div className="carousel-caption">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <p>
                  <a className="btn carouselBtn" href={slide.link}>
                    <span>{slide.buttonText}</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        onClick={prevSlide}
        data-bs-target="#homeCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true">
          {" "}
          <img src="/leftArrowWhite.png" alt="Prev" className="img-fluid" />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={nextSlide}
        data-bs-target="#homeCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon " aria-hidden="true">
          <img src="/rightArrowWhite.png" alt="Next" className="img-fluid" />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
      <div className="carousel-indicators carouselIndicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide-to={index}
            className={index === currentIndex ? "active" : ""}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
