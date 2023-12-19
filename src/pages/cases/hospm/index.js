import PageHeader from "@/components/PageHeader";
import FooterRender from "@/components/FooterRender";
import CasesCarousel from "@/components/CasesCarousel";
import HeaderRender from "@/components/HeaderRender";
import BtnZap from "@/components/BtnZap";

export default function Hospm() {
  return (
    <>
      <PageHeader titulo="SMED - Cases/H. da Mulher" />
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
                alt="CaseHOSPM"
                src="/CasesHospMImg.png"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12  col-12 textContainer">
              <div className="caseTitleContainer">
                <h2>Hospital da Mulher</h2>
              </div>
              <div className="caseDesc">
                <h4>Atendimento remoto em unidades móveis.</h4>
                <p>
                  O Hospital da Mulher, localizado em Salvador, é considerado o
                  maior hospital do Norte/Nordeste especializado no atendimento
                  à saúde da mulher, e se diferencia por ter diversas unidades
                  de atendimento móveis, além de todos os ambientes e serviços
                  médico-hospitalares de um hospital tradicional.
                </p>
                <p>
                  Essas unidades móveis, formadas por caminhões, também são
                  atendidas pelo sistema informação de forma integrada com todo
                  o hospital. Isso é possível porque o SMED - Hospitalar
                  funciona em nuvem usando a arquitetura da internet. Desse
                  modo, a equipe trabalha em rede de forma integrada e segura,
                  onde todos acessam a mesma base de dados e se comunicam
                  livremente, independentemente de onde estejam.
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
