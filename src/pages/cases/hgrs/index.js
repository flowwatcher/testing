import PageHeader from "@/components/PageHeader";
import FooterRender from "@/components/FooterRender";
import CasesCarousel from "@/components/CasesCarousel";
import HeaderRender from "@/components/HeaderRender";
import BtnZap from "@/components/BtnZap";

export default function HGRS() {
  return (
    <>
      <PageHeader titulo="SMED - Cases/HGRS" />
      <BtnZap />
      <main>
        <HeaderRender />
        <section
          className="caseSectionMain1 container-fluid fontSpace col-12"
          id="caseSectionMain1"
        >
          <div className="row">
            <div className="col-lg-6 col-md-12 caseImg col-sm-12 col-12">
              <img
                className="imgMain img-fluid"
                alt="Case HGRS"
                src="/CaseHGRSImg.png"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 textContainer">
              <div className="caseTitleContainer">
                <h2>Hospital Geral Roberto Santos</h2>
              </div>
              <div className="caseDesc">
                <p>
                  O Hospital Geral Roberto Santos é o maior hospital público da
                  Bahia. A unidade tinha um problema crônico: não conseguia
                  atingir as metas financeiras pactuadas com o Ministério da
                  Saúde e com a Secretaria Estadual de Saúde. A solução veio com
                  a automatizaçãodo setor de faturamento por meio do módulo de
                  faturamento do sistema SMED - Hospitalar.
                  <br />
                  Após aimplantação do sistema, houve drástica redução das
                  glosas, aumento no número de atendimentos em função de maior
                  produtividade e, com a análise crítica executada pelo SMED -
                  Hospitalar as faturas passaram a ser corrigidas antes do
                  envio, evitando cortes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="container-fluid fontSpace col-12"
          id="casesSectionCar"
        >
          <div className="container">
            <h1 className="casesTitle">Cases</h1>
            <p className="sectionSubTitle fontSpace">
              Conheça alguns dos meus cases de sucesso
            </p>
          </div>
          <div className="container-fluid fontSpace" id="fluidCarouselCont">
            <CasesCarousel />
          </div>
        </section>
        <footer className="col-12 shadowFooterAzul fontSpace">
          <FooterRender />
        </footer>
      </main>
    </>
  );
}
