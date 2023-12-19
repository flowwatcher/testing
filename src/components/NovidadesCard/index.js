import React from "react";
import Link from "next/link";

export default function NovidadesCards({
  newsTitle,
  newsDesc,
  paginaNews,
  imgNewsSrc,
}) {
  return (
    <div className="card d-block position-relative fontSpace">
      <img src={imgNewsSrc} className="cardImg" alt={imgNewsSrc} />
      <div className="card-body">
        <p className="card-text">
          {newsDesc}
          <b>{newsTitle}</b>
        </p>
        <Link href={paginaNews} className="btn btn-primary">
          Saiba mais
        </Link>
      </div>
    </div>
  );
}
