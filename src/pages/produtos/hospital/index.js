import React, { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import CarouselProdutos from "@/components/CarouselProdutos";
import FooterRender from "@/components/FooterRender";
import HeaderRender from "@/components/HeaderRender";
import ModalProdutosForm from "@/components/ModalProdutoForm";
import BtnZap from "@/components/BtnZap";
import ModuloProduto from "@/components/ModuloProduto";
import modulesDataHospital from "./modulesDataHospital.json";
import { deviceMobileProdChecker } from "@/functions/mobileChecker";

export default function Hospital() {
  const { modules, buttonText } = modulesDataHospital;
  const [deviceType, setDeviceType] = useState("desktop");
  const tabletSection = (
    <>
      <div className="row ">
        <div className="col-lg-5 col-md-5 caseImg col-sm-5 col-5">
          <img
            src="/prodHospImg.png"
            alt="Hospital"
            className="img-fluid imgMain"
          />
        </div>
        <div className="textoProdMain  col-lg-6 col-md-6 col-sm-6 col-6 container-fluid">
          <div className="prodTitleContainer">
            <h2>Hospital</h2>
          </div>
          <div className="prodDesc">
            <h4>
              Controle total, com gestão plena e compartilhada, para ampliar a
              melhoria dos serviços hospitalares.
            </h4>
          </div>
        </div>
      </div>
      <div className="row container-fluid">
        <div className="container">
          <div className="textoProdMain justify-text-center align-self-center justify-content-center align-items-center">
            <div className="prodDesc">
              <ul className="ulStyleCard">
                <li className="liStyleCard">Automação plena de processos</li>
                <li className="liStyleCard">
                  Integração total do fluxo de atendimento
                </li>
                <li className="liStyleCard">
                  Controle em tempo real dos ciclos de atendimento
                </li>
                <li className="liStyleCard">
                  Customização completa por especialidade
                </li>
                <li className="liStyleCard">
                  Mapeamento em tempo real de pendências
                </li>
                <li className="liStyleCard">
                  Acesso a formulários de pesquisa médica para futuras análises
                  estatísticas e formulação de modelos preditivos
                </li>
                <li className="liStyleCard">
                  Planejamento, melhorias e controle de qualidade
                </li>

                <li className="liStyleCard">
                  Identificação de novos padrões (invisíveis a olho nu ou ao
                  “sentimento” do gestor)
                </li>
                <li className="liStyleCard">Redução de custos do hospital</li>
                <li className="liStyleCard">
                  Para médico e paciente: Facilidade no acesso aos registros
                  clínicos
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
          <img
            src="/prodHospImg.png"
            alt="Hospital"
            className="img-fluid imgMain"
          />
        </div>
      </div>
      <div className="row container-fluid">
        <div className="container">
          <div className="textoProdMain  col-12 ">
            <div className="prodTitleContainer">
              <h2>Hospital</h2>
            </div>
            <div className="prodDesc">
              <h4>
                Controle total, com gestão plena e compartilhada, para ampliar a
                melhoria dos serviços hospitalares.
              </h4>
            </div>
          </div>
          <div className="textoProdMain">
            <div className="prodDesc">
              <ul className="ulStyleCard">
                <li className="liStyleCard">Automação plena de processos</li>
                <li className="liStyleCard">
                  Integração total do fluxo de atendimento
                </li>
                <li className="liStyleCard">
                  Controle em tempo real dos ciclos de atendimento
                </li>
                <li className="liStyleCard">
                  Customização completa por especialidade
                </li>
                <li className="liStyleCard">
                  Mapeamento em tempo real de pendências
                </li>
                <li className="liStyleCard">
                  Acesso a formulários de pesquisa médica para futuras análises
                  estatísticas e formulação de modelos preditivos
                </li>
                <li className="liStyleCard">
                  Planejamento, melhorias e controle de qualidade
                </li>

                <li className="liStyleCard">
                  Identificação de novos padrões (invisíveis a olho nu ou ao
                  “sentimento” do gestor)
                </li>
                <li className="liStyleCard">Redução de custos do hospital</li>
                <li className="liStyleCard">
                  Para médico e paciente: Facilidade no acesso aos registros
                  clínicos
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
        <img
          src="/prodHospImg.png"
          alt="Hospital"
          className="img-fluid imgMain"
        />
      </div>
      <div className="textoProdMain  col-lg-6 col-md-12 col-sm-4">
        <div className="prodTitleContainer">
          <h2>Hospital</h2>
        </div>
        <div className="prodDesc">
          <h4>
            Controle total, com gestão plena e compartilhada, para ampliar a
            melhoria dos serviços hospitalares.
          </h4>

          <ul className="ulStyleCard">
            <li className="liStyleCard">Automação plena de processos</li>
            <li className="liStyleCard">
              Integração total do fluxo de atendimento
            </li>
            <li className="liStyleCard">
              Controle em tempo real dos ciclos de atendimento
            </li>
            <li className="liStyleCard">
              Customização completa por especialidade
            </li>
            <li className="liStyleCard">
              Mapeamento em tempo real de pendências
            </li>
            <li className="liStyleCard">
              Acesso a formulários de pesquisa médica para futuras análises
              estatísticas e formulação de modelos preditivos
            </li>
            <li className="liStyleCard">
              Planejamento, melhorias e controle de qualidade
            </li>

            <li className="liStyleCard">
              Identificação de novos padrões (invisíveis a olho nu ou ao
              “sentimento” do gestor)
            </li>
            <li className="liStyleCard">Redução de custos do hospital</li>
            <li className="liStyleCard">
              Para médico e paciente: Facilidade no acesso aos registros
              clínicos
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
      <PageHeader titulo="SMED - Produtos/Hospitais" />
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
                <h2>Módulos inclusos</h2>
              </div>
            </div>
            <ModuloProduto data={modulesDataHospital} />
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
