import React, { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import CarouselProdutos from "@/components/CarouselProdutos";
import FooterRender from "@/components/FooterRender";
import HeaderRender from "@/components/HeaderRender";
import ModalProdutosForm from "@/components/ModalProdutoForm";
import BtnZap from "@/components/BtnZap";
import ModuloProduto from "@/components/ModuloProduto";
import modulesDataUbs from "./modulesDataUbs.json";
import { deviceMobileProdChecker } from "@/functions/mobileChecker";

export default function Ubs() {
  const { modules, buttonText } = modulesDataUbs;
  const [deviceType, setDeviceType] = useState("desktop");
  const tabletSection = (
    <>
      <div className="row ">
        <div className="col-lg-5 col-md-5 caseImg col-sm-5 col-5">
          <img src="/ProdLabImg.png" alt="Lab" className="img-fluid imgMain" />
        </div>
        <div className="textoProdMain  col-lg-6 col-md-6 col-sm-6 col-6 container-fluid">
          <div className="prodTitleContainer">
            <h2>UBS</h2>
          </div>
          <div className="prodDesc">
            <h4>
              Gere o fluxo de atendimento dentro da rede hierarquizada de saúde,
              da prevenção até a atenção especializada.
            </h4>
          </div>
        </div>
      </div>
      <div className="row container-fluid">
        <div className="container">
          <div className="textoProdMain justify-text-center align-self-center justify-content-center align-items-center">
            <div className="prodDesc">
              <ul className="ulStyleCard">
                <li className="liStyleCard">Gere o fluxo de atendimento</li>
                <li className="liStyleCard">Dimensiona recursos</li>
                <li className="liStyleCard">
                  Redimensiona serviços existentes
                </li>
                <li className="liStyleCard">
                  Agenda eletronicamente consultas, procedimentos e exames
                </li>
                <li className="liStyleCard">
                  Cadastra pacientes crônicos de risco
                </li>
                <li className="liStyleCard">
                  Emite avisos sobre os planos terapêuticos dos pacientes
                </li>
                <li className="liStyleCard">Disponibiliza histórico clínico</li>
                <li className="liStyleCard">Reduz erros de diagnóstico</li>
                <li className="liStyleCard">Reduz custos</li>
                <li className="liStyleCard">Aumenta faturamento</li>
                <li className="liStyleCard">
                  Promove o aprendizado contínuo, com troca de informações de
                  pesquisa online
                </li>
                <li className="liStyleCard">
                  Analisa o prontuário social para implantação de ações
                  assistencialistas
                </li>
                <li className="liStyleCard">
                  Obtém ganho real de eficiência com processos automatizados
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
              <h2>UBS</h2>
            </div>
            <div className="prodDesc">
              <h4>
                Gere o fluxo de atendimento dentro da rede hierarquizada de
                saúde, da prevenção até a atenção especializada.
              </h4>
            </div>
          </div>
          <div className="textoProdMain">
            <div className="prodDesc">
              <ul className="ulStyleCard">
                <li className="liStyleCard">Gere o fluxo de atendimento</li>
                <li className="liStyleCard">Dimensiona recursos</li>
                <li className="liStyleCard">
                  Redimensiona serviços existentes
                </li>
                <li className="liStyleCard">
                  Agenda eletronicamente consultas, procedimentos e exames
                </li>
                <li className="liStyleCard">
                  Cadastra pacientes crônicos de risco
                </li>
                <li className="liStyleCard">
                  Emite avisos sobre os planos terapêuticos dos pacientes
                </li>
                <li className="liStyleCard">Disponibiliza histórico clínico</li>
                <li className="liStyleCard">Reduz erros de diagnóstico</li>
                <li className="liStyleCard">Reduz custos</li>
                <li className="liStyleCard">Aumenta faturamento</li>
                <li className="liStyleCard">
                  Promove o aprendizado contínuo, com troca de informações de
                  pesquisa online
                </li>
                <li className="liStyleCard">
                  Analisa o prontuário social para implantação de ações
                  assistencialistas
                </li>
                <li className="liStyleCard">
                  Obtém ganho real de eficiência com processos automatizados
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
        <img src="/prodUbsImg.png" alt="Ubs" className="img-fluid imgMain" />
      </div>
      <div className="textoProdMain  col-lg-6 col-md-6 col-sm-4">
        <div className="prodTitleContainer">
          <h2>UBS</h2>
        </div>
        <div className="prodDesc">
          <h4>
            Gere o fluxo de atendimento dentro da rede hierarquizada de saúde,
            da prevenção até a atenção especializada.
          </h4>

          <ul className="ulStyleCard">
            <li className="liStyleCard">Gere o fluxo de atendimento</li>
            <li className="liStyleCard">Dimensiona recursos</li>
            <li className="liStyleCard">Redimensiona serviços existentes</li>
            <li className="liStyleCard">
              Agenda eletronicamente consultas, procedimentos e exames
            </li>
            <li className="liStyleCard">
              Cadastra pacientes crônicos de risco
            </li>
            <li className="liStyleCard">
              Emite avisos sobre os planos terapêuticos dos pacientes
            </li>
            <li className="liStyleCard">Disponibiliza histórico clínico</li>
            <li className="liStyleCard">Reduz erros de diagnóstico</li>
            <li className="liStyleCard">Reduz custos</li>
            <li className="liStyleCard">Aumenta faturamento</li>
            <li className="liStyleCard">
              Promove o aprendizado contínuo, com troca de informações de
              pesquisa online
            </li>
            <li className="liStyleCard">
              Analisa o prontuário social para implantação de ações
              assistencialistas
            </li>
            <li className="liStyleCard">
              Obtém ganho real de eficiência com processos automatizados
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
      <PageHeader titulo="SMED - Produtos/UBS" />
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
            <ModuloProduto data={modulesDataUbs} />
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
