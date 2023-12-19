import React, { useState, useRef, useEffect } from "react";
import CertificadosBadge from "../CertificadosBadge";
import { getActiveItemsCountCustom } from "@/functions/mobileChecker";

export default function CertificadosCarousel() {
  const certificadosLista = [
    {
      certImg: "Cert01",
      certNome: "Certificado 1",
      certDesc: "Nunc fringilla mi eleifend, bibendum erat at, cursus dui.",
      certImgSrc: "/CertBadge01.png",
    },
    {
      certImg: "Cert01",
      certNome: "Certificado 2",
      certDesc: "Nunc fringilla mi eleifend, bibendum erat at, cursus dui.",
      certImgSrc: "/CertBadge01.png",
    },
    {
      certImg: "Cert01",
      certNome: "Certificado 3",
      certDesc: "Nunc fringilla mi eleifend, bibendum erat at, cursus dui.",
      certImgSrc: "/CertBadge01.png",
    },
    {
      certImg: "Cert01",
      certNome: "Certificado 4",
      certDesc: "Nunc fringilla mi eleifend, bibendum erat at, cursus dui.",
      certImgSrc: "/CertBadge01.png",
    },
    {
      certImg: "Cert01",
      certNome: "Certificado 5",
      certDesc: "Nunc fringilla mi eleifend, bibendum erat at, cursus dui.",
      certImgSrc: "/CertBadge01.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselNewsRef = useRef(null);
  const [visibleCertificados, setVisibleCertificados] = useState(
    certificadosLista.slice(0, 1)
  );
  const [activeItemsCount, setActiveItemsCount] = useState();

  function getVisibleCertificados(index, count) {
    let items = [];
    for (let i = 0; i < count; i++) {
      items.push(certificadosLista[(index + i) % certificadosLista.length]);
    }
    return items;
  }
  function updateActiveItemsCount() {
    const newActiveItemsCount = getActiveItemsCountCustom(992, 728);
    setActiveItemsCount(newActiveItemsCount);
    setVisibleCertificados(
      getVisibleCertificados(currentIndex, newActiveItemsCount)
    );
  }
  const nextSlideCarousel = () => {
    const newIndex = (currentIndex + 1) % certificadosLista.length;
    setCurrentIndex(newIndex);
    setVisibleCertificados(getVisibleCertificados(newIndex, activeItemsCount));
  };

  const prevSlideCarousel = () => {
    const newIndex =
      (currentIndex - 1 + certificadosLista.length) % certificadosLista.length;
    setCurrentIndex(newIndex);
    setVisibleCertificados(getVisibleCertificados(newIndex, activeItemsCount));
  };

  useEffect(() => {
    updateActiveItemsCount();
    window.addEventListener("resize", updateActiveItemsCount);
    return () => {
      window.removeEventListener("resize", updateActiveItemsCount);
    };
  }, [currentIndex, activeItemsCount]);

  return (
    <>
      <div
        id="certificadosCarousel"
        className="carousel container-fluid fontSpace"
        data-bs-touch="true"
      >
        <div ref={carouselNewsRef} className="carousel-inner container d-flex">
          {visibleCertificados.map((badge, index) => (
            <div
              key={index}
              className={`carousel-item  ${
                index < activeItemsCount ? "active" : ""
              }`}
            >
              <CertificadosBadge {...badge} />
            </div>
          ))}
        </div>

        <button className="carousel-control-prev" onClick={prevSlideCarousel}>
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <img src="/arrowCarLeftGreen.png" alt="Previous" />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" onClick={nextSlideCarousel}>
          <span className="carousel-control-next-icon" aria-hidden="true">
            <img src="/nextCertCarouselBtn.png" alt="Next" />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
