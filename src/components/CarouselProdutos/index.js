import React, { useState, useRef, useEffect } from "react";
import ProdutosCard from "../ProdutosCard";
import { useRouter } from "next/router";

export default function CarouselProdutos() {
  const cardsLista = [
    {
      imageSrc: "/HospCimg.png",
      description: "Hospitais",
      pagina: `/produtos/hospital`,
    },
    {
      imageSrc: "/CardUBSImg.png",
      description: "UBS",
      pagina: `/produtos/ubs`,
    },
    {
      imageSrc: "/labCardmg.png",
      description: "Laboratório",
      pagina: `/produtos/laboratorio`,
    },
    {
      imageSrc: "/analyCardImg.png",
      description: "Analytics",
      pagina: `/produtos/analytics`,
    },
    {
      imageSrc: "/Clinimg.png",
      description: "Clínica",
      pagina: `/produtos/clinica`,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselInnerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(cardsLista.slice(0, 1));
  const [activeItemsCount, setActiveItemsCount] = useState();
  const [isMobileCardProd, setIsMobileCardProd] = useState(false);
  const router = useRouter();
  const { pathname } = router;

  function handleResizeProdCar() {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;

      const isMobile =
        (width >= 1400 && width <= 1558) ||
        (width >= 1200 && width <= 1252) ||
        (width >= 993 && width <= 1150) ||
        (width >= 769 && width <= 872) ||
        width <= 625;

      setIsMobileCardProd(isMobile);
    }
  }
  const colorPickerImg = () => {
    if (pathname !== "/") {
      if (isMobileCardProd === true) {
        return <img src="/leftArrowWhite.png" alt="Previous" />;
      } else if (isMobileCardProd === false) {
        return (
          <img
            src="/arrowCarLeftBlue.png"
            alt="Previous"
            style={{ opacity: 2.5 }}
          />
        );
      }
    } else {
      return <img src="/leftArrowWhite.png" alt="Previous" />;
    }
  };
  useEffect(() => {
    handleResizeProdCar();
    window.addEventListener("resize", handleResizeProdCar);
    return () => {
      window.removeEventListener("resize", handleResizeProdCar);
    };
  }, []);
  function getActiveItemsCount() {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 992) {
        return 5;
      } else if (screenWidth >= 768) {
        return 5;
      }
      return 5;
    }
  }
  function updateActiveItemsCount() {
    setActiveItemsCount(getActiveItemsCount());
    setVisibleCards(cardsLista.slice(0, getActiveItemsCount()));
  }
  useEffect(() => {
    setActiveItemsCount(getActiveItemsCount());
    setVisibleCards(cardsLista.slice(0, getActiveItemsCount()));
    updateActiveItemsCount();
    window.addEventListener("resize", updateActiveItemsCount);

    return () => {
      window.removeEventListener("resize", updateActiveItemsCount);
    };
  }, []);

  const nextSlideCarousel = () => {
    setVisibleCards((prevCards) => {
      const nextCards = [...prevCards.slice(1), prevCards[0]];
      return nextCards.sort(
        (a, b) => cardsLista.indexOf(a) - cardsLista.indexOf(b)
      );
    });
    setCurrentIndex((currentIndex + 1) % cardsLista.length);
  };

  const prevSlideCarousel = () => {
    setVisibleCards((prevCards) => {
      const nextIndex = (currentIndex + 1) % cardsLista.length;
      const newCards = [...prevCards.slice(1), cardsLista[nextIndex]];
      return newCards.sort(
        (a, b) => cardsLista.indexOf(a) - cardsLista.indexOf(b)
      );
    });
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardsLista.length);
  };

  return (
    <div
      id="produtosCarousel"
      className="carousel fontSpace container-fluid"
      data-bs-interval="false"
    >
      <div id="prodInnerIdController">
        <div ref={carouselInnerRef} className="carousel-inner container">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index < activeItemsCount ? "active" : ""
              }`}
            >
              <ProdutosCard {...card} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" onClick={prevSlideCarousel}>
          {colorPickerImg()}
        </button>
        <button className="carousel-control-next" onClick={nextSlideCarousel}>
          <img src="/rightArrowWhite.png" alt="Next" />
        </button>
      </div>
    </div>
  );
}
