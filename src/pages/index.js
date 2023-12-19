import PageHeader from "@/components/PageHeader";
import CarouselHomePage from "@/components/CarouselHomePage";
import CarouselProdutos from "@/components/CarouselProdutos";
import NovidadesCarousel from "@/components/NovidadesCarousel";
import HeaderRender from "@/components/HeaderRender";
import FooterRender from "@/components/FooterRender";
import BtnZap from "@/components/BtnZap";
import Link from "next/link";
import CasesCarousel from "@/components/CasesCarousel";

export default function HomePage() {
  return (
    <>
      <PageHeader titulo="SMED-Tecnologia - Home" />
      <main>
        <HeaderRender />
        <BtnZap />
        <section
          className="sectionHomeCarousel container-fluid fontSpace col-12"
          id="sectionHomeCarousel"
        >
          <CarouselHomePage />
        </section>
        <section
          className="quemSomosSection container-fluid col-12 fontSpace"
          id="quemSomosSection"
        >
          <div className="container mx-auto mt-5 mb-2">
            <div className="row fontSpace col-12">
              <div className="col-lg-6 col-md-6 col-sm-12 container gapper39">
                <h3 className="fontSpace">Quem somos</h3>
                <p>
                  Nossa missão é tornar a gestão de gestão em saúde simples,
                  flexível, segura, rápida e integrada, transformando
                  positivamente a vida das pessoas: pacientes e profissionais.
                </p>
                <Link href="/quemsomos" legacyBehavior>
                  <a className="btn btnQuemSomos" type="button">
                    <span className="fontSpace">Clique e saiba mais</span>
                  </a>
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 container iconGapper">
                <div className="d-flex align-items-center ">
                  <img
                    alt="Engrenagens"
                    className="img-fluid"
                    src="/descompliqueIconImg.png"
                  />
                  <div className="container">
                    <h4 className="fontSpace">Descomplique</h4>
                    <p>Sistemas intuitivos para facilitar a sua gestão</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    alt="Segurança"
                    className="img-fluid"
                    src="/segurancaHomeIconImg.png"
                  />
                  <div className="container">
                    <h4 className="fontSpace">Segurança</h4>
                    <p>Processo de gestão seguro dos dados</p>
                  </div>
                </div>
                <div className="d-flex align-items-center ">
                  <img
                    alt="Suporte"
                    className="img-fluid"
                    src="/suportHomeIcnImg.png"
                  />
                  <div className="container">
                    <h4 className="fontSpace">Suporte</h4>
                    <p>Conte sempre com nosso time especializado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="container-fluid col-12 fontSpace"
          id="produtosSectionHome"
        >
          <div className="container">
            <h1 className="produtosTitle">Produtos</h1>
            <p className="sectionSubTitle fontSpace">
              Automação plena com otimização dos recursos na gestão em saúde.
            </p>
          </div>
          <CarouselProdutos />
        </section>
        <section
          className="container-fluid fontSpace col-12 caseSectionMarginizerHome"
          id="casesSectionCar"
        >
          <div className="container ">
            <h1 className="casesTitle ">Cases</h1>
            <p className="sectionSubTitle fontSpace">
              Conheça alguns dos meus cases de sucesso
            </p>
          </div>
          <CasesCarousel />
        </section>
        <section
          className="container-fluid fontSpace col-12"
          id="novidadesSectionCar"
        >
          <div className="container">
            <h1 className="sectionTitle">Novidades</h1>
          </div>
          <div className="container-fluid" id="fluidCarouselCont">
            <NovidadesCarousel />
          </div>
        </section>
        <footer className="col-12 shadowFooterVerde fontSpace">
          <FooterRender />
        </footer>
      </main>
    </>
  );
}
