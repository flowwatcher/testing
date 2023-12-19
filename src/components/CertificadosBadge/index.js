import React from "react";

export default function CertificadosBadge({
  certImg,
  certNome,
  certDesc,
  certImgSrc,
}) {
  return (
    <>
      <div className="certContainer col-12 col-sm-3 col-md-3 col-sx-12 fontSpace">
        <div className="certBox  position-relative  text-center certContainer">
          <div className="certificadoImg">
            <img className="img-fluid" alt={certImg} src={certImgSrc} />
          </div>
          <div className="certBoxText">
            <div className="textCertContainer">
              <div className="certTitle">
                <h5>{certNome}</h5>
              </div>
              <div className="certText">{certDesc}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
