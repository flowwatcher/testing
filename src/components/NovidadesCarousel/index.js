import React, { useState, useRef, useEffect } from "react";
import NovidadesCards from "../NovidadesCard";
import {
  getActiveItemsCount578,
  getActiveItemsCountCustom,
} from "@/functions/mobileChecker";

export default function NovidadesCarousel() {
  const newsLista = [
    {
      newsTitle: "1",
      newsDesc:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy",
      paginaNews: ``,
      imgNewsSrc: "/abstractNovidadesImgCard.png",
    },
    {
      newsTitle: "2",
      newsDesc:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy",
      paginaNews: ``,
      imgNewsSrc: "/abstractNovidadesImgCard.png",
    },
    {
      newsTitle: "3",
      newsDesc:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy",
      paginaNews: ``,
      imgNewsSrc: "/abstractNovidadesImgCard.png",
    },
    {
      newsTitle: "4",
      newsDesc:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy",
      paginaNews: ``,
      imgNewsSrc: "/abstractNovidadesImgCard.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselNewsRef = useRef(null);
  const [visibleNews, setVisibleNews] = useState(newsLista.slice(0, 1));
  const [activeItemsCount, setActiveItemsCount] = useState();

  function getVisibleNews(index, count) {
    let items = [];
    for (let i = 0; i < count; i++) {
      items.push(newsLista[(index + i) % newsLista.length]);
    }
    return items;
  }
  function updateActiveItemsCount() {
    const newActiveItemsCount = getActiveItemsCountCustom(992, 578);
    setActiveItemsCount(newActiveItemsCount);
    setVisibleNews(getVisibleNews(currentIndex, newActiveItemsCount));
  }
  const nextSlideCarousel = () => {
    const newIndex = (currentIndex + 1) % newsLista.length;
    setCurrentIndex(newIndex);
    setVisibleNews(getVisibleNews(newIndex, activeItemsCount));
  };
  const prevSlideCarousel = () => {
    const newIndex = (currentIndex - 1 + newsLista.length) % newsLista.length;
    setCurrentIndex(newIndex);
    setVisibleNews(getVisibleNews(newIndex, activeItemsCount));
  };
  useEffect(() => {
    updateActiveItemsCount();
    window.addEventListener("resize", updateActiveItemsCount);
    return () => {
      window.removeEventListener("resize", updateActiveItemsCount);
    };
  }, [currentIndex, activeItemsCount]);

  return (
    <div
      id="novidadesCarousel"
      className="carousel fontSpace"
      data-bs-touch="true"
    >
      <div ref={carouselNewsRef} className="carousel-inner container">
        {visibleNews.map((card, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index < activeItemsCount ? "active" : ""
            }`}
          >
            <NovidadesCards {...card} />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        href="#novidadesCarousel"
        type="button"
        data-bs-target="#novidadesCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          onClick={prevSlideCarousel}
        >
          <img src="/arrowCarLeftGreen.png" alt="Previous" />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        href="#novidadesCarousel"
        type="button"
        data-bs-target="#novidadesCarousel"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          onClick={nextSlideCarousel}
        >
          <img src="/arrowCarRightGreen.png" alt="Previous" />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
