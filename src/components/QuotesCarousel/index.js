import React from "react";
import { useState, useEffect } from "react";

export default function QuotesCarousel() {
  var data = {
    itens: [
      {
        titulo: "Primeiro Item",
        descricao:
          "Nunc fringilla mi eleifend, bibendum erat at, cursus dui. Sed aliquet ut libero bibendum condimentum.Mauris vitae nisi urna.Fusce urna purus, iaculis in condimentum et, imperdiet consectetur elit.Nulla facilisi.Nunc luctus odio et anteposuere malesuada.Quisque dignissim mauris fringilla auctor suscipit.Sed venenatis vehicula nibh sed bibendum.Morbi 											faucibus odio et turpis tristique consequat.Aliquam turpis tortor,dignissim vitae luctus in, pellentesque id diam. Nullam posuere sodales dui, non consectetur diam hendrerit in.Nam eget luctus nulla.Integer egestas sem at tristique pretium.Phasellus ut leo magna.Ut fringilla mauris at tristique aliquet.",
        imagem: "./carouselImgItem1.png",
        nomePessoa: "Laura Lopez",
      },
      {
        titulo: "Segundo Item",
        descricao: `Nunc fringilla mi eleifend, bibendum erat at, cursus dui. Sed aliquet ut libero bibendum condimentum.Mauris vitae nisi urna.Fusce urna purus, iaculis in condimentum et, imperdiet consectetur elit.Nulla facilisi.Nunc luctus odio et anteposuere malesuada.Quisque dignissim mauris fringilla auctor suscipit.Sed venenatis vehicula nibh sed bibendum.Morbi 											faucibus odio et turpis tristique consequat.Aliquam turpis tortor,dignissim vitae luctus in, pellentesque id diam. Nullam posuere sodales dui, non consectetur diam hendrerit in.Nam eget luctus nulla.Integer egestas sem at tristique pretium.Phasellus ut leo magna.Ut fringilla mauris at tristique aliquet.`,
        imagem: "./CarouselImgitem2.png",
        nomePessoa: "João Antonio",
      },
      {
        titulo: "Terceiro Item",
        descricao:
          "Nunc fringilla mi eleifend, bibendum erat at, cursus dui. Sed aliquet ut libero bibendum condimentum.Mauris vitae nisi urna.Fusce urna purus, iaculis in condimentum et, imperdiet consectetur elit.Nulla facilisi.Nunc luctus odio et anteposuere malesuada.Quisque dignissim mauris fringilla auctor suscipit.Sed venenatis vehicula nibh sed bibendum.Morbi 											faucibus odio et turpis tristique consequat.Aliquam turpis tortor,dignissim vitae luctus in, pellentesque id diam. Nullam posuere sodales dui, non consectetur diam hendrerit in.Nam eget luctus nulla.Integer egestas sem at tristique pretium.Phasellus ut leo magna.Ut fringilla mauris at tristique aliquet.",
        imagem: "./CarouselImgItem3.png",
        nomePessoa: "Antonio João",
      },
    ],
  };
  const [index, setIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const atualizarDepoimento = () => {
    if (!imagesLoaded) return;

    const textoQuoteElemento = document.querySelector(".textoQuote");
    const nomePessoaElemento = document.querySelector(".quoteNomePessoa h3");
    const imgPessoaElemento = document.querySelector(".quotedImgPessoa img");
    const imgNext1Elemento = document.querySelector(".imgNext1");
    const imgNext2Elemento = document.querySelector(".imgNext2");

    textoQuoteElemento.textContent = data.itens[index].descricao;
    nomePessoaElemento.textContent = data.itens[index].nomePessoa;
    imgPessoaElemento.src = data.itens[index].imagem;
    imgPessoaElemento.alt = data.itens[index].nomePessoa;

    const indiceProximo1 = (index + 1) % data.itens.length;
    const indiceProximo2 = (index + 2) % data.itens.length;

    imgNext1Elemento.src = data.itens[indiceProximo1].imagem;
    imgNext1Elemento.alt = data.itens[indiceProximo1].nomePessoa;
    imgNext2Elemento.src = data.itens[indiceProximo2].imagem;
    imgNext2Elemento.alt = data.itens[indiceProximo2].nomePessoa;
  };

  useEffect(() => {
    const imagePromises = data.itens.map((item) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = item.imagem;
        image.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
      atualizarDepoimento();
    });
  }, [index, imagesLoaded]);

  useEffect(() => {
    atualizarDepoimento();
  }, [index, imagesLoaded]);

  const prev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + data.itens.length) % data.itens.length
    );
    atualizarDepoimento();
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.itens.length);
    atualizarDepoimento();
  };

  return (
    <div
      id="quotesCarousel"
      className="carousel container fontSpace"
      data-bs-interval="false"
    >
      <div className="carousel-inner">
        <div className="d-flex">
          <div className="carousel-item active">
            <div className="row align-items-center" id="itensQuoteCarousel">
              <div
                className="col-12 col-sm-12 col-12 col-lg-6 col-md-6 col-xxl-6 col-xl-6 text-center text-md-start textQuoteContainer"
                id="dadosQuoteCarousel"
              >
                <div className="quoteIconBgn">
                  <img className="img-fluid" alt="" src="/QuoteBgn.png" />
                </div>
                <p className="textoQuote"></p>
                <div className="quoteNomePessoa">
                  <h3></h3>
                </div>
              </div>
              <div
                className="col-12 col-sm-12 col-12 col-lg-6 col-md-6 col-xxl-6 col-xl-6 text-center containerImgs"
                id="ImgQuoteCarousel"
              >
                <div className="quotedImgPessoa col">
                  <img
                    className="img-fluid minH346W236 quotedImgPessoaMobile"
                    alt=""
                    src=""
                  />
                </div>
                <div className="nextImgPessoa" id="nextImgCarouselQuotes">
                  <img
                    className="img-fluid imgNext1 opacity-50"
                    alt=""
                    src=""
                  />
                  <img
                    className="img-fluid imgNext2 opacity-25"
                    alt=""
                    src=""
                  />
                  <img className="img-fluid minH346W236" alt="" src="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-controls row">
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#quotesCarousel"
          data-bs-slide="prev"
          onClick={prev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true">
            <img
              className="prevbtndepo-icon img-fluid"
              alt=""
              src="/PrevBtnDepo.png"
            />
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#quotesCarousel"
          data-bs-slide="next"
          onClick={next}
        >
          <span className="carousel-control-next-icon" aria-hidden="true">
            <img
              className="prevbtndepo-icon img-fluid"
              alt=""
              src="/NextBtnDepo.png"
            />
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
