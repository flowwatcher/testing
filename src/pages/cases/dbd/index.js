import PageHeader from "@/components/PageHeader";
import FooterRender from "@/components/FooterRender";
import CasesCarousel from "@/components/CasesCarousel";
import HeaderRender from "@/components/HeaderRender";
import BtnZap from "@/components/BtnZap";

export default function DBD() {
  return (
    <>
      <PageHeader titulo="SMED - Cases/DBD" />
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
                alt="Case DBD"
                src="/caseDbImg.png"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 textContainer">
              <div className="caseTitleContainer">
                <h2>DB Diagnóstico</h2>
              </div>
              <div className="caseDesc">
                <h4>
                  Integração automatizada e segura com sistemas de diagnóstico.
                </h4>
                <p>
                  A DB Diagnóstico é responsável pelos exames de análises
                  clínicas no Hospital da Mulher, em Salvador-Bahia, onde
                  realiza uma gama completa de serviço de apoio à diagnose.
                  <strong>A SMED fez a integração dos sistemas</strong>da DB
                  Diagnósticos e do hospital. O módulo de laboratório do SMED -
                  Hospitalar é 100% automatizado porque permite integração com
                  as máquinas que processam os materiais coletados, com isso, o
                  processo ocorre de maneira mais segura, evitando erros de
                  digitação e troca de amostras.
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
        <footer className="col-12 shadowFooterAzul">
          <FooterRender />
        </footer>
      </main>
    </>
  );
}
