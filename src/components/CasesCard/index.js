import React from "react";
import Link from "next/link";
export default function CasesCard({
  caseTitle,
  caseDesc,
  paginaCase,
  imgCaseSrc,
  currentIndex,
  nextIndex,
  prevIndex,
  index,
  activeItemsCount,
}) {
  return (
    <div
      {...index}
      className={`carousel-item ${index < activeItemsCount ? "active" : ""}`}
    >
      <div
        key={currentIndex}
        className={`card d-block position-relative fontSpace`}
      >
        <img
          src={imgCaseSrc}
          className="casesImg rounded-circle"
          alt={imgCaseSrc}
        />
        <div className="card-body">
          <div className="card-content">
            <h6 className="card-title cardTtles">{caseTitle}</h6>
            <p className="card-subtitle">{caseDesc}</p>
            {paginaCase && (
              <Link href={paginaCase} className="btn btn-primary" role="button">
                Clique e saiba mais
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
