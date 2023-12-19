import React, { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import CarouselProdutos from "@/components/CarouselProdutos";
import FooterRender from "@/components/FooterRender";
import HeaderRender from "@/components/HeaderRender";
import ModalProdutosForm from "@/components/ModalProdutoForm";
import BtnZap from "@/components/BtnZap";
import ModuloProduto from "@/components/ModuloProduto";
import modulesDataLaboratorio from "./modulesDataLaboratorio.json";
import { deviceMobileProdChecker } from "@/functions/mobileChecker";

export default function Laboratorio() {
  const { modules, buttonText } = modulesDataLaboratorio;
  const [deviceType, setDeviceType] = useState("desktop");
  const tabletSection = (
    <>
      <div className="row ">
        <div className="col-lg-5 col-md-5 caseImg col-sm-5 col-5">
          <img src="/ProdLabImg.png" alt="Lab" className="img-fluid imgMain" />
        </div>
        <div className="textoProdMain  col-lg-6 col-md-6 col-sm-6 col-6 container-fluid">
          <div className="prodTitleContainer">
            <h2>Laboratórios</h2>
          </div>
          <div className="prodDesc">
            <h4>
              Solução 100% digital com automação plena da gestão dos processos,
              integrando todos os sistemas do laboratório.
            </h4>
          </div>
        </div>
      </div>
      <div className="row container-fluid">
        <div className="container">
          <div className="textoProdMain justify-text-center align-self-center justify-content-center align-items-center">
            <div className="prodDesc">
              <ul className="ulStyleCard">
                <li className="liStyleCard">
                  Dispensa a exigência legal do uso depapel, permitindo que os
                  laudos sejam analisados e assinados eletronicamente
                </li>
                <li className="liStyleCard">Dimensiona recursos</li>
                <li className="liStyleCard">
                  Disponibiliza os resultados de exames na internet e/ou no
                  prontuário médico
                </li>
                <li className="liStyleCard">
                  Promove a mobilidade, permitindo acesso via plataformas
                  móveis: tablets e smartphones
                </li>
                <li className="liStyleCard">
                  Traz segurança e robustez, garantindo a integridade das
                  informações
                </li>
                <li className="liStyleCard">
                  Proporciona integração de dados, que podem ser alocados, em
                  segurança, na nuvem
                </li>
                <li className="liStyleCard">
                  Permite integrar a rede de laboratórios em base única, na
                  nuvem
                </li>
                <li className="liStyleCard">
                  Capacita a integração do sistema com as máquinas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  const mobileSection = (
    <>
      <div className="row ">
        <div className="col-12">
          <img src="/ProdLabImg.png" alt="Lab" className="img-fluid imgMain" />
        </div>
      </div>
      <div className="row container-fluid">
        <div className="container">
          <div className="textoProdMain  col-12 ">
            <div className="prodTitleContainer">
              <h2>Laboratórios</h2>
            </div>
            <div className="prodDesc">
              <h4>
                Solução 100% digital com automação plena da gestão dos
                processos, integrando todos os sistemas do laboratório.
              </h4>
            </div>
          </div>
          <div className="textoProdMain">
            <div className="prodDesc">
              <ul className="ulStyleCard">
                <li className="liStyleCard">
                  Dispensa a exigência legal do uso depapel, permitindo que os
                  laudos sejam analisados e assinados eletronicamente
                </li>
                <li className="liStyleCard">Dimensiona recursos</li>
                <li className="liStyleCard">
                  Disponibiliza os resultados de exames na internet e/ou no
                  prontuário médico
                </li>
                <li className="liStyleCard">
                  Promove a mobilidade, permitindo acesso via plataformas
                  móveis: tablets e smartphones
                </li>
                <li className="liStyleCard">
                  Traz segurança e robustez, garantindo a integridade das
                  informações
                </li>
                <li className="liStyleCard">
                  Proporciona integração de dados, que podem ser alocados, em
                  segurança, na nuvem
                </li>
                <li className="liStyleCard">
                  Permite integrar a rede de laboratórios em base única, na
                  nuvem
                </li>
                <li className="liStyleCard">
                  Capacita a integração do sistema com as máquinas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  const desktopSection = (
    <div className="row">
      <div className="col-lg-5 col-md-5 caseImg col-sm-8">
        <img src="/ProdLabImg.png" alt="Lab" className="img-fluid imgMain" />
      </div>
      <div className="textoProdMain  col-lg-6 col-md-6 col-sm-4">
        <div className="prodTitleContainer">
          <h2>Laboratórios</h2>
        </div>
        <div className="prodDesc">
          <h4>
            Solução 100% digital com automação plena da gestão dos processos,
            integrando todos os sistemas do laboratório.
          </h4>

          <ul className="ulStyleCard">
            <li className="liStyleCard">
              Dispensa a exigência legal do uso depapel, permitindo que os
              laudos sejam analisados e assinados eletronicamente
            </li>
            <li className="liStyleCard">Dimensiona recursos</li>
            <li className="liStyleCard">
              Disponibiliza os resultados de exames na internet e/ou no
              prontuário médico
            </li>
            <li className="liStyleCard">
              Promove a mobilidade, permitindo acesso via plataformas móveis:
              tablets e smartphones
            </li>
            <li className="liStyleCard">
              Traz segurança e robustez, garantindo a integridade das
              informações
            </li>
            <li className="liStyleCard">
              Proporciona integração de dados, que podem ser alocados, em
              segurança, na nuvem
            </li>
            <li className="liStyleCard">
              Permite integrar a rede de laboratórios em base única, na nuvem
            </li>
            <li className="liStyleCard">
              Capacita a integração do sistema com as máquinas
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
  useEffect(() => {
    deviceMobileProdChecker(setDeviceType, deviceType);
  }, []);

  let mainSection;

  switch (deviceType) {
    case "mobile":
      mainSection = mobileSection;
      break;
    case "tablet":
      mainSection = tabletSection;
      break;
    default:
      mainSection = desktopSection;
  }

  return (
    <>
      <PageHeader titulo="SMED - Produtos/Laboratório" />
      <div
        className="modal fade fadeColorCustom fontSpace"
        id="modalProduto"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="modalProdutoLabel"
        aria-hidden="true"
      >
        <ModalProdutosForm />
      </div>
      <BtnZap />
      <main>
        <HeaderRender />
        <section
          className="produtoMainSection container-fluid fontSpace col-12"
          id="produtoMainSection"
        >
          {mainSection}
        </section>
        <section
          className="prodModsGridSection container-fluid col-12 fontSpace"
          id="prodModsGridSection"
        >
          <div className="container-fluid">
            <div className="container">
              <div className="sectionTitle">
                <h2>Funcionalidades</h2>
              </div>
            </div>
            <ModuloProduto data={modulesDataLaboratorio} />
          </div>
        </section>
        <section
          className="container-fluid col-12 fontSpace"
          id="produtoPageSection"
        >
          <div className="container">
            <h1 className="produtosTitle">Outros Produtos</h1>
          </div>
          <CarouselProdutos />
        </section>
        <footer className="col-12 shadowFooterVerde fontSpace">
          <FooterRender />
        </footer>
      </main>
    </>
  );
}
