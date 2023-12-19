import PageHeader from "@/components/PageHeader";
import FooterRender from "@/components/FooterRender";
import CasesCarousel from "@/components/CasesCarousel";
import HeaderRender from "@/components/HeaderRender";
import BtnZap from "@/components/BtnZap";

export default function HRSAJ() {
  return (
    <>
      <PageHeader titulo="SMED - Cases/HRSAJ" />
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
                alt="Case ICOM"
                src="/caseHRSAJimg.png"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 textContainer">
              <div className="caseTitleContainer">
                <h2>Hospital Regional de Santo Antonio de Jesus</h2>
              </div>
              <div className="caseDesc">
                <h4>Migração com segurança, confiabilidade rapidez.</h4>
                <p>
                  Esta instituição localizada na Bahia necessitava migrar para
                  um novo sistema de gestão. A equipe da SMED realizou a
                  migração de forma segura e rápida.
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="textContainer2 text-center container">
              <p className="row-2">
                As etapas foram planejadas de forma modular e em um curto
                período de tempo. Para cada ação foram estabelecidas
                redundâncias prioritárias e seguras de tal forma que não gerasse
                risco para pacientes e nem para a empresa com a perda de
                informações financeiras, contábeis e fiscais.{" "}
              </p>
              <p className="row-2">
                <b>A SMED forneceu total segurança dos dados ao cliente</b> por
                meio de sistemas de rotinas de back-up local e na nuvem. E
                também disponibilizou, de forma didática, as informações do
                banco de dados, para que se o cliente, no futuro, decidisse
                trocar de solução, teria total domínio do processo.
              </p>
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
