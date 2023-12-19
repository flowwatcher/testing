import React, { useState, useRef, useEffect } from "react";
import CasesCard from "../CasesCard";
import {
  getActiveItemsCount578,
  getActiveItemsCountCustom,
} from "@/functions/mobileChecker";

export default function CasesCarousel() {
  const caseLista = [
    {
      caseTitle: "Hospital Regional Santo Antônio de Jesus",
      caseDesc: "Estas duas instituições localizadas na Bahia, o hospital...",
      paginaCase: `/cases/hrsaj/`,
      imgCaseSrc: "/HRSAJBadgeCaseCard.png",
    },
    {
      caseTitle: "Hospital da Mulher",
      caseDesc:
        "Atendimento remoto em unidades móveis. O Hospital da Mulher, localizado em Salvador, é considerado o maior hospital...",
      paginaCase: `/cases/hospm/`,
      imgCaseSrc: "/HospMuBadgeCase.png",
    },
    {
      caseTitle: "Hospital Geral Roberto Santos",
      caseDesc:
        "O Hospital Geral Roberto Santos é o maior hospital público da Bahia. A unidade tinha um problema crônico: não conseguia atingir",
      paginaCase: `/cases/hgrs/`,
      imgCaseSrc: "/HGRSBadgeCase.png",
    },
    {
      caseTitle: "ICOM - Instituto Couto Maia",
      caseDesc:
        "O Instituto Couto Maia – ICOM é o primeiro hospital público do país a ser totalmente paperless. A SMED é responsável pelo......",
      paginaCase: `/cases/icom/`,
      imgCaseSrc: "/caseICOMCardBadgeImg.png",
    },
    {
      caseTitle: "DB Diagnósticos",
      caseDesc: "A DBD Diagnósticos...",
      paginaCase: `/cases/dbd/`,
      imgCaseSrc: "/caseDBCardBadgeImg.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselCaseRef = useRef(null);
  const [visibleCases, setVisibleCases] = useState(caseLista.slice(0, 1));
  const [activeItemsCount, setActiveItemsCount] = useState();
  const [nextIndex, setNextIndex] = useState(
    (currentIndex + 1) % caseLista.length
  );
  const [prevIndex, setPrevIndex] = useState(
    (currentIndex - 1 + caseLista.length) % caseLista.length
  );

  function updateActiveItemsCount() {
    const newActiveItemsCount = getActiveItemsCountCustom(992, 578);
    setActiveItemsCount(newActiveItemsCount);
    setVisibleCases(getVisibleCases(currentIndex, newActiveItemsCount));
  }
  function getVisibleCases(index, count) {
    let items = [];
    for (let i = 0; i < count; i++) {
      items.push(caseLista[(index + i) % caseLista.length]);
    }
    return items;
  }
  const nextSlideCarousel = () => {
    const newIndex = (currentIndex + 1) % caseLista.length;
    setCurrentIndex(newIndex);
    setNextIndex((newIndex + 1) % caseLista.length);
    setPrevIndex(currentIndex);
    setVisibleCases(getVisibleCases(newIndex, activeItemsCount));
  };
  const prevSlideCarousel = () => {
    const newIndex = (currentIndex - 1 + caseLista.length) % caseLista.length;
    setCurrentIndex(newIndex);
    setPrevIndex((newIndex - 1 + caseLista.length) % caseLista.length);
    setNextIndex(currentIndex);
    setVisibleCases(getVisibleCases(newIndex, activeItemsCount));
  };
  useEffect(() => {
    updateActiveItemsCount();
    window.addEventListener("resize", updateActiveItemsCount);
    return () => {
      window.removeEventListener("resize", updateActiveItemsCount);
    };
  }, [currentIndex, activeItemsCount]);

  return (
    <div id="casesCarousel" className="carousel fontSpace" data-bs-touch="true">
      <div ref={carouselCaseRef} className="carousel-inner container">
        {visibleCases.map((card, index) => (
          <CasesCard
            key={index}
            activeItemsCount={activeItemsCount}
            index={index}
            {...card}
            currentIndex={currentIndex}
            nextIndex={nextIndex}
            prevIndex={prevIndex}
          />
        ))}
      </div>
      <button className="carousel-control-prev" onClick={prevSlideCarousel}>
        <span className="carousel-control-prev-icon" aria-hidden="true">
          <img src="/arrowCarLeftBlue.png" alt="Previous" />
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" onClick={nextSlideCarousel}>
        <span className="carousel-control-next-icon" aria-hidden="true">
          <img src="/arrowCarRightBlue.png" alt="Previous" />
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
