import React, { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import CarouselProdutos from "@/components/CarouselProdutos";
import FooterRender from "@/components/FooterRender";
import HeaderRender from "@/components/HeaderRender";
import ModalProdutosForm from "@/components/ModalProdutoForm";
import BtnZap from "@/components/BtnZap";
import ModuloProduto from "@/components/ModuloProduto";
import modulesDataAnalytics from "./modulesDataAnalytics.json";
import { deviceMobileProdChecker } from "@/functions/mobileChecker";

export default function Analytics() {
  const { modules, buttonText } = modulesDataAnalytics;
  const [deviceType, setDeviceType] = useState("desktop");
  const tabletSection = (
    <>
      <div className="row ">
        <div className="col-lg-5 col-md-5 caseImg col-sm-5 col-5">
          <img
            src="/AnalImg.png"
            alt="Analytics"
            className="img-fluid imgMain"
          />
        </div>
        <div className="textoProdMain  col-lg-6 col-md-6 col-sm-6 col-6 container-fluid">
          <div className="prodTitleContainer">
            <h2>Analytics</h2>
          </div>
          <div className="prodDesc">
            <h4>
              Uma poderosa ferramenta de negócio para identificar perdas,
              melhorar qualidade, custo e desempenho dos serviços.
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
                  O módulo Analytics 6s permite o gestor ter acesso a
                  conhecimento antes inalcançável
                </li>
                <li className="liStyleCard">
                  Todo processo de análise, desde a coleta dos dados, é
                  elaborado visando minimizar possíveis vieses/distorções
                </li>
                <li className="liStyleCard">
                  Mede os indicadores críticos e suas fontes de variação,
                  compara com padrões de referência, calcula o custo da baixa
                  qualidade (CBQ) e identifica as causas raízes dos problemas
                  através de análises estatísticas avançadas que o olho humano
                  sozinho não consegue capturar
                </li>
                <li className="liStyleCard">
                  A ferramenta utiliza métodos científicos para analisar
                  deficiências em processos de trabalho hospitalares
                </li>
                <li className="liStyleCard">
                  As causas de variação identificadas pela ferramenta são
                  classNameificadas em comuns ou especiais para melhor
                  direcionamento das soluções (solução de problemas -
                  troubleshooting)
                </li>
                <li className="liStyleCard">
                  A solução tem a capacidade de identificar a existência de
                  condutas médicas comprovadamente melhores ou comprovadamente
                  piores que estejam sendo aplicadas na unidade hospitalar
                  sempre que identificar padrões diferentes da variação esperada
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
            src="/AnalImg.png"
            alt="Analytics"
            className="img-fluid imgMain"
          />
        </div>
      </div>
      <div className="row container-fluid">
        <div className="container">
          <div className="textoProdMain  col-12 ">
            <div className="prodTitleContainer">
              <h2>Analytics</h2>
            </div>
            <div className="prodDesc">
              <h4>
                Uma poderosa ferramenta de negócio para identificar perdas,
                melhorar qualidade, custo e desempenho dos serviços.
              </h4>
            </div>
          </div>
          <div className="textoProdMain">
            <div className="prodDesc">
              <ul className="ulStyleCard">
                <li className="liStyleCard">
                  O módulo Analytics 6s permite o gestor ter acesso a
                  conhecimento antes inalcançável
                </li>
                <li className="liStyleCard">
                  Todo processo de análise, desde a coleta dos dados, é
                  elaborado visando minimizar possíveis vieses/distorções
                </li>
                <li className="liStyleCard">
                  Mede os indicadores críticos e suas fontes de variação,
                  compara com padrões de referência, calcula o custo da baixa
                  qualidade (CBQ) e identifica as causas raízes dos problemas
                  através de análises estatísticas avançadas que o olho humano
                  sozinho não consegue capturar
                </li>
                <li className="liStyleCard">
                  A ferramenta utiliza métodos científicos para analisar
                  deficiências em processos de trabalho hospitalares
                </li>
                <li className="liStyleCard">
                  As causas de variação identificadas pela ferramenta são
                  classNameificadas em comuns ou especiais para melhor
                  direcionamento das soluções (solução de problemas -
                  troubleshooting)
                </li>
                <li className="liStyleCard">
                  A solução tem a capacidade de identificar a existência de
                  condutas médicas comprovadamente melhores ou comprovadamente
                  piores que estejam sendo aplicadas na unidade hospitalar
                  sempre que identificar padrões diferentes da variação esperada
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
        <img src="/AnalImg.png" alt="Analytics" className="img-fluid imgMain" />
      </div>
      <div className="textoProdMain  col-lg-6 col-md-6 col-sm-4">
        <div className="prodTitleContainer">
          <h2>Analytics</h2>
        </div>
        <div className="prodDesc">
          <h4>
            Uma poderosa ferramenta de negócio para identificar perdas, melhorar
            qualidade, custo e desempenho dos serviços.
          </h4>
          <ul className="ulStyleCard">
            <li className="liStyleCard">
              O módulo Analytics 6s permite o gestor ter acesso a conhecimento
              antes inalcançável
            </li>
            <li className="liStyleCard">
              Todo processo de análise, desde a coleta dos dados, é elaborado
              visando minimizar possíveis vieses/distorções
            </li>
            <li className="liStyleCard">
              Mede os indicadores críticos e suas fontes de variação, compara
              com padrões de referência, calcula o custo da baixa qualidade
              (CBQ) e identifica as causas raízes dos problemas através de
              análises estatísticas avançadas que o olho humano sozinho não
              consegue capturar
            </li>
            <li className="liStyleCard">
              A ferramenta utiliza métodos científicos para analisar
              deficiências em processos de trabalho hospitalares
            </li>
            <li className="liStyleCard">
              As causas de variação identificadas pela ferramenta são
              classNameificadas em comuns ou especiais para melhor
              direcionamento das soluções (solução de problemas -
              troubleshooting)
            </li>
            <li className="liStyleCard">
              A solução tem a capacidade de identificar a existência de condutas
              médicas comprovadamente melhores ou comprovadamente piores que
              estejam sendo aplicadas na unidade hospitalar sempre que
              identificar padrões diferentes da variação esperada
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
      <PageHeader titulo="SMED - Produtos/Anaylitcs" />
      <div
        className="modal fade fadeColorCustom fontSpace"
        id="modalProduto"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
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
            <ModuloProduto data={modulesDataAnalytics} />
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
