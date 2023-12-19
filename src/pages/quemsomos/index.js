import React, { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import FooterRender from "@/components/FooterRender";
import HeaderRender from "@/components/HeaderRender";
import QuotesCarousel from "@/components/QuotesCarousel";
import CertificadosCarousel from "@/components/CertificadosCarousel";
import BtnZap from "@/components/BtnZap";
import { isMobileChecker } from "@/functions/mobileChecker";

export default function QuemSomos() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [marceloExpanded, setMarceloExpanded] = useState(false);
  const [andreExpanded, setAndreExapanded] = useState(false);
  const [agilidadeExpanded, setAgilidadeExapanded] = useState(false);
  const [segExapanded, setSegExapanded] = useState(isExpanded);
  const [interaIntegraExpanded, setInteraIntegraExpanded] = useState(false);
  const [qualidadeAssistExapanded, setQualidadeAssistExapanded] =
    useState(false);
  const [metodosCientExapanded, setMetodosCientExapanded] = useState(false);
  const [escalaTrabExpanded, setEscalaTrabExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    isMobileChecker(setIsMobile, isMobile);
  }, []);

  const toggleExpanded = (setterFunction) => () => {
    setterFunction((prevState) => !prevState);
  };

  return (
    <>
      <PageHeader titulo="SMED - Quem Somos" />
      <BtnZap />
      <main>
        <HeaderRender />
        <section
          className="quemSomosSection1 container-fluid fontSpace col-12"
          id="quemSomosSection1"
        >
          <div className="container-fluid row">
            <div className="col-lg-6 col-md-12 caseImg col-sm-12 ">
              <img
                className="imgMain img-fluid"
                alt="Case ICOM"
                src="/ImgQuemSomos.png"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 textContainer ">
              <div className="caseTitleContainer container">
                <h2>Quem somos</h2>
              </div>
              <div className="caseDesc container">
                <p>
                  A SMED é uma iniciativa dedicada à inovação e aplicação de
                  novas tecnologias focadas em sistemas de gestão de saúde.
                </p>
                <p>
                  Surgimos agregando toda a inteligência e expertise de mais de
                  20 anos de atuação da SM Gestão hospitalar com as práticas
                  mais modernas de tecnologia da informação e automação para
                  oferecer um serviço exclusivo.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="propostaValorSection container-fluid fontSpace col-12"
          id="propostaValorSection"
        >
          <div className="container">
            <div className="sectionTitle text-center">
              <h2>Nossa proposta de valor</h2>
            </div>
            <div className="sectionContainerGrid">
              <div className="gridPropostas row">
                <div className="cellPropostas col-lg-4 col-md-4 col-6 col-xxl-4 col-xl-4 col-sm-6">
                  <div className="cellIcon">
                    <img
                      className="cellIconImg img-fluid"
                      alt=""
                      src="/escalaIconImg.png"
                    />
                  </div>
                  <div className="cellText">
                    <div className="cellTitle">
                      <h5>ESCALA DE TRABALHO </h5>

                      {(!isMobile || escalaTrabExpanded) && (
                        <>
                          <div className="cellDesc">
                            <p>
                              Apta a prestar serviço desde pequenas empresas até
                              as instituições com grandes volumes de atendimento
                              e complexidade de serviços.
                            </p>
                          </div>
                          {isMobile && (
                            <a
                              href="#moreInfoQualAssist"
                              className="btn btnSaibaMenos"
                              data-bs-toggle="collapse"
                              onClick={toggleExpanded(setEscalaTrabExpanded)}
                            >
                              - Reduzir o texto...
                            </a>
                          )}
                        </>
                      )}
                      {isMobile && !escalaTrabExpanded && (
                        <div className="cellDesc">
                          <p>
                            Apta a prestar serviço desde pequenas empresas até
                            as instituições com...
                          </p>
                          <a
                            href="#moreInfoQualAssist"
                            className="btn btnSaibaMais"
                            data-bs-toggle="collapse"
                            onClick={toggleExpanded(setEscalaTrabExpanded)}
                          >
                            + Saiba mais...
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="cellPropostas  col-lg-4 col-md-4 col-6 col-xxl-4 col-xl-4 col-sm-6">
                  <div className="cellIcon">
                    <img
                      className="cellIconImg img-fluid"
                      alt=""
                      src="/flexibilidadeIconImg.png"
                    />
                  </div>
                  <div className="cellText">
                    <div className="cellTitle">
                      <h5>FLEXIBILIDADE</h5>
                      <div className="cellDesc">
                        <p>
                          Oferta dos serviços com contínua customização às
                          demandas do cliente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cellPropostas  col-lg-4 col-md-4 col-6 col-xxl-4 col-xl-4 col-sm-6">
                  <div className="cellIcon">
                    <img
                      className="cellIconImg img-fluid"
                      alt=""
                      src="/altaTecIconImg.png"
                    />
                  </div>
                  <div className="cellText">
                    <div className="cellTitle">
                      <h5>ALTA TECNOLOGIA A BAIXO CUSTO</h5>
                    </div>
                    <div className="cellDesc">
                      <p>
                        Plataforma com base em software livre que evita o
                        pagamento por licenças de uso.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="cellPropostas  col-lg-4 col-md-4 col-6 col-xxl-4 col-xl-4 col-sm-6">
                  <div className="cellIcon">
                    <img
                      className="cellIconImg img-fluid"
                      alt=""
                      src="/metodosCientIconImg.png"
                    />
                  </div>
                  <div className="cellText">
                    <div className="cellTitle">
                      <h5>MÉTODOS CIENTÍFICOS </h5>
                      {(!isMobile || metodosCientExapanded) && (
                        <>
                          <div className="cellDesc">
                            <p>
                              Tecnologias de automação e análises estatísticas
                              queanalisam deficiências em processos de trabalho
                              hospitalares, assim como pontos fortes para
                              aprimorá-los.
                            </p>
                          </div>
                          {isMobile && (
                            <a
                              href="#moreInfoQualAssist"
                              className="btn btnSaibaMenos"
                              data-bs-toggle="collapse"
                              onClick={toggleExpanded(setMetodosCientExapanded)}
                            >
                              - Reduzir o texto...
                            </a>
                          )}
                        </>
                      )}
                      {isMobile && !metodosCientExapanded && (
                        <div className="cellDesc">
                          <p>
                            Tecnologias de automação e análises estatísticas
                            queanalisam deficiências em...
                          </p>
                          <a
                            href="#moreInfoQualAssist"
                            className="btn btnSaibaMais"
                            data-bs-toggle="collapse"
                            onClick={toggleExpanded(setMetodosCientExapanded)}
                          >
                            + Saiba mais...
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="cellPropostas  col-lg-4 col-md-4 col-6 col-xxl-4 col-xl-4 col-sm-6">
                  <div className="cellIcon">
                    <img
                      className="cellIconImg img-fluid"
                      alt=""
                      src="/interacaoIconImg.png"
                    />
                  </div>
                  <div className="cellText">
                    <div className="cellTitle">
                      <h5>INTERAÇÃO E INTEGRAÇÃO</h5>
                      {(!isMobile || interaIntegraExpanded) && (
                        <>
                          <div className="cellDesc">
                            <p>
                              Informações completas com integração de todas as
                              áreas assistenciais com acesso seguro, inclusive
                              ao paciente que pode ver seus resultados e
                              históricos de resultados
                            </p>
                          </div>
                          {isMobile && (
                            <a
                              href="#moreInfoIntegra"
                              className="btn btnSaibaMenos"
                              data-bs-toggle="collapse"
                              onClick={toggleExpanded(setInteraIntegraExpanded)}
                            >
                              - Reduzir o texto...
                            </a>
                          )}
                        </>
                      )}
                      {isMobile && !interaIntegraExpanded && (
                        <div className="cellDesc">
                          <p>
                            Informações completas com integração de todas as
                            áreas assistenciais com acesso seguro....
                          </p>
                          <a
                            href="#moreInfoIntegra"
                            className="btn btnSaibaMais"
                            data-bs-toggle="collapse"
                            onClick={toggleExpanded(setInteraIntegraExpanded)}
                          >
                            + Saiba mais...
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="cellPropostas  col-lg-4 col-md-4 col-6 col-xxl-4 col-xl-4 col-sm-6">
                  <div className="cellIcon">
                    <img
                      className="cellIconImg img-fluid"
                      alt=""
                      src="/qualidadeIconImg.png"
                    />
                  </div>
                  <div className="cellText">
                    <div className="cellTitle">
                      <h5>QUALIDADE NA ASSISTÊNCIA</h5>
                      {(!isMobile || qualidadeAssistExapanded) && (
                        <>
                          <div className="cellDesc">
                            <p>
                              A disponibilidade do histórico clínico do paciente
                              proporciona visão completa de todas as informações
                              para a determinação mais precisa e segura do
                              diagnóstico.
                            </p>
                          </div>
                          {isMobile && (
                            <a
                              href="#moreInfoQualAssist"
                              className="btn btnSaibaMenos"
                              data-bs-toggle="collapse"
                              onClick={toggleExpanded(
                                setQualidadeAssistExapanded
                              )}
                            >
                              - Reduzir o texto...
                            </a>
                          )}
                        </>
                      )}
                      {isMobile && !qualidadeAssistExapanded && (
                        <div className="cellDesc">
                          <p>
                            A disponibilidade do histórico clínico do paciente
                            proporciona visão completa de todas...
                          </p>
                          <a
                            href="#moreInfoQualAssist"
                            className="btn btnSaibaMais"
                            data-bs-toggle="collapse"
                            onClick={toggleExpanded(
                              setQualidadeAssistExapanded
                            )}
                          >
                            + Saiba mais...
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="cellPropostas  col-lg-4 col-md-4 col-6 col-xxl-4 col-xl-4 col-sm-6">
                  <div className="cellIcon">
                    <img
                      className="cellIconImg img-fluid"
                      alt=""
                      src="/segurancaIconImg.png"
                    />
                  </div>
                  <div className="cellText">
                    <div className="cellTitle">
                      <h5>SEGURANÇA</h5>
                    </div>
                    {(!isMobile || segExapanded) && (
                      <>
                        <div className="cellDesc">
                          <p>
                            Rastreamento dos dados que proporcionam correção e
                            qualidade no processo de faturamento.
                          </p>
                        </div>
                        {isMobile && (
                          <a
                            href="#moreInfoSeg"
                            className="btn btnSaibaMenos"
                            data-bs-toggle="collapse"
                            onClick={toggleExpanded(setSegExapanded)}
                          >
                            - Reduzir o texto...
                          </a>
                        )}
                      </>
                    )}
                    {isMobile && !segExapanded && (
                      <>
                        <div className="cellDesc">
                          <p>
                            Rastreamento dos dados que proporcionam correção e..
                          </p>
                        </div>
                        <a
                          href="#moreInfoSeg"
                          className="btn btnSaibaMais"
                          data-bs-toggle="collapse"
                          onClick={toggleExpanded(setSegExapanded)}
                        >
                          + Saiba mais...
                        </a>
                      </>
                    )}
                  </div>
                </div>
                <div className="cellPropostas  col-lg-4 col-md-4 col-6 col-xxl-4 col-xl-4 col-sm-6">
                  <div className="cellIcon">
                    <img
                      className="cellIconImg img-fluid"
                      alt=""
                      src="/agilidadeIconImg.png"
                    />
                  </div>
                  <div className="cellText">
                    <div className="cellTitle">
                      <h5>AGILIDADE E PRODUTIVIDADE</h5>
                      {(!isMobile || agilidadeExpanded) && (
                        <>
                          <div className="cellDesc">
                            <p>
                              Reduz os prazos no processo de assistência,
                              permitindo atender mais pacientes com a mesma
                              capacidade instalada. Garantia de registros das
                              atividades, de materiais e de medicamentos
                              dispensados ao paciente. O histórico de registros
                              elimina a realização de exames em duplicidade.
                            </p>
                          </div>
                          {isMobile && (
                            <a
                              href="#moreInfoAgilProd"
                              className="btn btnSaibaMenos"
                              data-bs-toggle="collapse"
                              onClick={toggleExpanded(setAgilidadeExapanded)}
                            >
                              - Reduzir o texto...
                            </a>
                          )}
                        </>
                      )}
                      {isMobile && !agilidadeExpanded && (
                        <div className="cellDesc">
                          <p>
                            Reduz os prazos no processo de assistência,
                            permitindo atender mais pacientes com a mesma
                            capacidade instalada....
                          </p>
                          <a
                            href="#moreInfoAgilProd"
                            className="btn btnSaibaMais"
                            data-bs-toggle="collapse"
                            onClick={toggleExpanded(setAgilidadeExapanded)}
                          >
                            + Saiba mais...
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="cellPropostas  col-lg-4 col-md-4 col-6 col-xxl-4 col-xl-4 col-sm-6">
                    {" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="executivosSection container-fluid fontSpace col-12"
          id="executivosSection"
        >
          <div className="container">
            <div className="sectionTitle text-center py-4">
              <h2>Executivos</h2>
            </div>
            <div className="sectionCardGrid row">
              <div className="row col-12">
                <div className="card mb-4 container-fluid">
                  <div className="row g-0 card-body">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 card-image">
                      <img
                        src="/marceloBadgeIMg.png"
                        className="img-fluid rounded-start"
                        alt="MarceloMariani"
                      />
                    </div>

                    <div className="card-text container col-lg-8 col-md-12 col-sm-12 col-xxl-8 col-xl-8">
                      <h6 className="card-title container">
                        Marcelo Mariani Andrade
                      </h6>
                      <p className="card-subtitle container">
                        Fundador e diretor da SMED, Marcelo Mariani Andrade é
                        formado em Engenharia Civil pela Escola Politécnica da
                        Universidade de São Paulo e possui pós-graduação em
                        Administração de Empresas e Administração Hospitalar.
                        <br />
                        {(!isMobile || marceloExpanded) && (
                          <>
                            <span>
                              Tem titulação Black Belt em controle de processos
                              com a ferramenta Six Sigma. É também especializado
                              em Direito do Estado, onde desenvolveu pesquisa na
                              área de Parcerias Público-Privadas no Setor de
                              Saúde.Tem MBA em PPP e Concessões e 25 anos de
                              experiência em instituições bancárias e de saúde,
                              especialmente em unidades de grande complexidade.
                            </span>
                            <br />
                            {isMobile && (
                              <a
                                href="#moreInfoMarcelo"
                                className="btn btnSaibaMenos"
                                data-bs-toggle="collapse"
                                onClick={toggleExpanded(setMarceloExpanded)}
                              >
                                - Reduzir o texto...
                              </a>
                            )}
                          </>
                        )}
                        {isMobile && !marceloExpanded && (
                          <a
                            href="#moreInfoMarcelo"
                            className="btn btnSaibaMais"
                            data-bs-toggle="collapse"
                            onClick={toggleExpanded(setMarceloExpanded)}
                          >
                            + Saiba mais...
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="card mb-4 container-fluid">
                  <div className="row g-0 card-body">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-6 card-image">
                      <img
                        src="/andreTopazioCardImg.png"
                        className="img-fluid rounded-start"
                        alt="AndréTopázio"
                      />
                    </div>
                    <div className="card-text container col-lg-8 col-md-12 col-sm-12 col-xxl-8 col-xl-8">
                      <h6 className="card-title container">André Topazio</h6>
                      <p className="card-subtitle container">
                        Fundador e diretor de TI da SMED, André Topázio é
                        graduado em Processamento de Dados com especialização em
                        Sistemas de Informação, em Gestão de Projetos em
                        Ambientes Virtuais e Gestão Avançada da Amana-Key.
                        <br />
                        {(!isMobile || andreExpanded) && (
                          <>
                            <span>
                              Topázio tem experiência em gestão e
                              desenvolvimento de projetos de TI onde atuou como
                              gestor e arquiteto de soluções em grandes fábricas
                              de softwares como IBM, META-IT para clientes no
                              Brasil e na Europa como Porto Seguro, Schahin,
                              Embratel, TNT, Cybelar, Vivo, Jornal A Tarde,
                              Insinuante, BPN, SM Consultoria, bancos Itaú e
                              Santander, ao longo da sua carreira adquiriu
                              algumas certificações mundiais na tecnologia
                              Java/Oracle(Sun Certified Business Component
                              Developer, Sun Certified Web Component Developer,
                              Sun Certified Programmer)
                            </span>
                            <br />
                            {isMobile && (
                              <a
                                href="#moreinfotopazio"
                                className="btn btnSaibaMenos"
                                data-bs-toggle="collapse"
                                onClick={toggleExpanded(setAndreExapanded)}
                              >
                                - Reduzir o texto...
                              </a>
                            )}
                          </>
                        )}
                        {isMobile && !andreExpanded && (
                          <a
                            href="#moreinfotopazio"
                            className="btn btnSaibaMais"
                            data-bs-toggle="collapse"
                            onClick={toggleExpanded(setAndreExapanded)}
                          >
                            + Saiba mais...
                          </a>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="quoteCarouselSection container-fluid fontSpace col-12"
          id="quoteCarouselSection"
        >
          <div className=" container">
            <div className="sectionTitle text-center py-4">
              <h2>Depoimentos</h2>
            </div>
            <QuotesCarousel />
          </div>
        </section>
        <section
          className="certificadosCarouselSection container-fluid col-12 fontSpace"
          id="certificadosCarouselSection"
        >
          <div className="containerSectionCertificados container">
            <div className="sectionTitle text-left py-3">
              <h2>Certificados</h2>
            </div>
          </div>
          <CertificadosCarousel />
        </section>
        <footer className="col-12 shadowFooterVerde fontSpace">
          <FooterRender />
        </footer>
      </main>
    </>
  );
}
