import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import FooterRender from "@/components/FooterRender";
import HeaderRender from "@/components/HeaderRender";
import BtnZap from "@/components/BtnZap";

export default function Custom404() {
  return (
    <>
      <PageHeader titulo="404 - Página não existe!" />
      <BtnZap />
      <main>
        <HeaderRender />
        <section
          className="page404Page container-fluid fontSpace col-12"
          id="page404Page"
        >
          <div className="row container">
            <div className="col-lg-6 col-md-12 col-sm-12 text404">
              <h4>Erro</h4> <h1>404</h1>
              <p>
                Parece que a página que você procurou não existe,
                <strong>você deseja voltar para a página inicial?</strong>
              </p>
              <Link type="button" href="/" legacyBehavior>
                <a className="btn btn404" type="button">
                  Volte para a pagina inicial
                </a>
              </Link>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img
                className="img-fluid img404"
                alt="404 Pagina não encontrada"
                src="/public/error404Img.png"
              />
            </div>
          </div>
        </section>
        <footer className="col-12 shadowFooterVerde fontSpace">
          <FooterRender />
        </footer>
      </main>
    </>
  );
}
