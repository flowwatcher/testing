import PageHeader from "@/components/PageHeader";
import FooterRender from "@/components/FooterRender";
import HeaderRender from "@/components/HeaderRender";
import Link from "next/link";
import BtnZap from "@/components/BtnZap";

export default function Cases() {
  return (
    <>
      <PageHeader titulo="SMED - Nossos Cases" />
      <BtnZap />
      <main>
        <HeaderRender />
        <section className="container-fluid fontSpace" id="casesSection">
          <div className="containerCases container fontSpace">
            <div className="pagetitle container pb-4 ">
              <h1 className="col-12">Cases</h1>
              <p className="col-lg-8 col-sm-12 col-md-12">
                Veja como a implementação dos nossos eletrônicos transformaram a
                realidade de renomadas instituições.
              </p>
            </div>
            <div className="caseContentContainer container row ">
              <div className="caseContent col-12 row">
                <div className="imgContainer col-lg-4 col-md-6 col-sm-12">
                  <img className="img-fluid" src="/caseimg@3x.png" alt="ICOM" />
                </div>
                <div className="casesTextContainer col-lg-8 col-md-6 col-sm-12">
                  <div className="caseTitleText">
                    <h2>ICOM – Instituto Couto Maia</h2>
                  </div>

                  <div className="descTextContainer">
                    <p>
                      O Instituto Couto Maia – ICOM é o primeiro hospital
                      público do país a ser totalmente paperless. A SMED é
                      responsável pelo planejamento, implantação e manutenção do
                      serviço de tecnologia do instituto. O ICOM é uma
                      instituição com 166 anos de existência que, recentemente,
                      foi transferido para novas instalações. Nesse processo de
                      mudança…
                    </p>
                  </div>
                  <Link className="btnCase btn" href="/cases/icom">
                    <label>Clique e saiba mais</label>
                  </Link>
                </div>
              </div>
              <div className="divider col-12 row">
                <img
                  className="casesunderline-icon"
                  alt=""
                  src="/casesunderline@1x.png"
                />
              </div>
              <div className="caseContent  col-12 row">
                <div className="imgContainer col-lg-4 col-md-6 col-sm-12">
                  <img
                    className="img-fluid"
                    src="/caseimg1@3x.png"
                    alt="Hosp. Mulher"
                  />
                </div>
                <div className="casesTextContainer col-lg-8 col-md-6 col-sm-12">
                  <div className="caseTitleText">
                    <h2>Hospital da Mulher</h2>
                  </div>
                  <div className="descTextContainer">
                    <p>
                      O Hospital da Mulher, localizado em Salvador, é
                      considerado o maior hospital do Norte/Nordeste
                      especializado no atendimento à saúde da mulher, e se
                      diferencia por ter diversas unidades de atendimento
                      móveis, além de todos os ambientes e serviços
                      médico-hospitalares de um hospital tradicional. Essas
                      unidades móveis, formadas por…
                    </p>
                  </div>
                  <Link className="btnCase btn" href="/cases/hospm">
                    <label>Clique e saiba mais</label>
                  </Link>
                </div>
              </div>
              <div className="divider1  col-12 row">
                <img
                  className="casesunderline-icon"
                  alt=""
                  src="/casesunderline@1x.png"
                />
              </div>
              <div className="caseContent  col-12 row">
                <div className="imgContainer col-lg-4 col-md-6 col-sm-12">
                  <img
                    className="img-fluid"
                    src="/caseimg2@3x.png"
                    alt="Hosp. Roberto Santos"
                  />
                </div>
                <div className="casesTextContainer col-lg-8 col-md-6 col-sm-12">
                  <div className="caseTitleText">
                    <h2>Hospital Geral Roberto Santos</h2>
                  </div>
                  <div className="descTextContainer">
                    <p>
                      O Hospital Geral Roberto Santos é o maior hospital público
                      da Bahia. A unidade tinha um problema crônico: não
                      conseguia atingir as metas financeiras pactuadas com o
                      Ministério da Saúde e com a Secretaria Estadual de Saúde.
                      A solução veio com a automatização do setor de faturamento
                      por meio do SMED - Hospitalar. Após a implantação do
                      sistema …
                    </p>
                  </div>
                  <Link className="btnCase btn" href="/cases/hgrs">
                    <label>Clique e saiba mais</label>
                  </Link>
                </div>
              </div>
              <div className="divider2  col-12 row">
                <img
                  className="casesunderline-icon"
                  alt=""
                  src="/casesunderline@1x.png"
                />
              </div>
              <div className="caseContent  col-12 row">
                <div className="imgContainer col-lg-4 col-md-6 col-sm-12">
                  <img
                    className="img-fluid"
                    src="/caseimg3@3x.png"
                    alt="Hosp. SAJ"
                  />
                </div>
                <div className="casesTextContainer col-lg-8 col-md-6 col-sm-12">
                  <div className="caseTitleText">
                    <h2>Hospital Regional Santo Antônio de Jesus</h2>
                  </div>
                  <div className="descTextContainer">
                    <p className="esta-instituio-localizada">
                      Esta instituição localizada na Bahia necessitava migrar
                      para um novo sistema de gestão.
                      <br />A equipe da SMED realizou a migração de forma segura
                      e rápida…
                    </p>
                  </div>
                  <Link className="btnCase btn" href="/cases/hrsaj">
                    <label>Clique e saiba mais</label>
                  </Link>
                </div>
              </div>
              <div className="divider2  col-12 row">
                <img
                  className="casesunderline-icon"
                  alt=""
                  src="/casesunderline@1x.png"
                />
              </div>
              <div className="caseContent  col-12 row">
                <div className="imgContainer col-lg-4 col-md-6 col-sm-12">
                  <img
                    className="img-fluid"
                    src="/dbdiagimg@1x.png"
                    alt="Db Diagnosticos"
                  />
                </div>
                <div className="casesTextContainer col-lg-8 col-md-6 col-sm-12">
                  <div className="caseTitleText">
                    <h2>DB Diagnóstico</h2>
                  </div>
                  <div className="descTextContainer">
                    <p>
                      A DB Diagnóstico é responsável pelos exames de análises
                      clínicas no Hospital da Mulher, em Salvador-Bahia, onde
                      realiza uma gama completa de serviço de apoio à diagnose.
                      <br />A SMED fez a integração dos sistemas da DB
                      Diagnósticos e do hospital. O módulo de laboratório do
                      SMED - Hospitalar é 100% automatizado porque permite
                      integração com as…
                    </p>
                  </div>
                  <Link className="btnCase btn" href="/cases/dbd">
                    <label>Clique e saiba mais</label>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="col-12 shadowFooterAzul fontSpace">
          <FooterRender />
        </footer>
      </main>
    </>
  );
}
