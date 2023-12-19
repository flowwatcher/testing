import React from "react";
import Link from "next/link";

export default function ProdutosCard({ imageSrc, description, pagina }) {
  return (
    <div className="card d-block position-relative fontSpace">
      <img className="imgMiniCard" alt={description} src={imageSrc} />
      <div className="card-body">
        <h5 className="card-title cardTtles">{description}</h5>
        {pagina && (
          <Link href={pagina} className="btn btn-primary" role="button">
            Clique e saiba mais
          </Link>
        )}
      </div>
    </div>
  );
}
