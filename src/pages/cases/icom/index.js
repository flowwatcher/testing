import PageHeader from "@/components/PageHeader";
import FooterRender from "@/components/FooterRender";
import CasesCarousel from "@/components/CasesCarousel";
import HeaderRender from "@/components/HeaderRender";
import BtnZap from "@/components/BtnZap";

export default function ICOM() {
  return (
    <>
      <PageHeader titulo="SMED - Cases/ICOM" />
      <BtnZap />
      <main>
        <HeaderRender />
        <section
          className="caseSectionMain1 container-fluid col-12 fontSpace"
          id="caseSectionMain1"
        >
          <div className="row ">
            <div className="col-lg-6 col-md-12 caseImg col-sm-12 col-12">
              <img
                className=" imgMain img-fluid"
                alt="Case ICOM"
                src="/caseICOMImg.png"
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 textContainer ">
              <div className="caseTitleContainer ">
                <h2>ICOM - Instituto Couto Maia</h2>
              </div>
              <div className="caseDesc ">
                <p>
                  O Instituto Couto Maia - ICOM é o primeiro hospital público do
                  país a ser totalmente paperless. A SMED é responsável pelo
                  planejamento, implantação e manutenção do serviço de
                  tecnologia do instituto. O ICOM é uma instituição com 166 anos
                  de existência que, recentemente, foi transferido para novas
                  instalações. Nesse processo de mudança, a SMED garantiu que,
                  desde o primeiro dia na nova estrutura, o funcionamento do
                  serviço de TI foi pleno, para os novos pacientes e para a
                  migração dos pacientes internados no antigo Hospital Couto
                  Maia.
                </p>
              </div>
            </div>
          </div>
          <div className="container-fluid mb-4 fontSpace">
            <div className="textContainer2 align-items-center container">
              <div className="caseSubTitle mb-2">
                <h2>O processo de mudança</h2>
              </div>
              <p className="row-2 mb-1">
                Com foco na garantia da segurança do paciente, foi planejado uma
                implantação em duas etapas, a primeira no antigo Hospital Couto
                Maia e a segunda já no novo ICOM. Para a primeira etapa foi
                necessário reformar a rede de dados do hospital, bem como
                instalar estações de trabalho (computador e acessórios). Apenas
                os processos críticos foram automatizados na primeira etapa a
                fim de se garantir qualidade da informação e segurança ao
                paciente.
              </p>
              <p className="row-2 mt-1">
                Na segunda etapa, foram implantados os demais módulos e
                realizado o treinamento dos novos profissionais contratados para
                trabalhar na nova unidade. O planejamento foi executado com o
                objetivo de não haver nenhuma descontinuidade de informações
                clínicas na mudança do paciente, de tal forma que a equipe
                assistencial pudesse prescrever para o paciente onde quer que
                ele estivesse. Durante o curto prazo de migração, as duas
                unidades funcionaram concomitantemente e integradas em uma única
                base de dados.
              </p>
            </div>
          </div>
        </section>
        <section
          className="caseSectionCard container-fluid col-12 fontSpace"
          id="caseSectionCard"
        >
          <div className="container fontSpace">
            <div className="row container-fluid topPositioner fontSpace">
              <div className="card mb-4 container-fluid">
                <div className="row-12  g-0 card-body fontSpace">
                  <div className="card-title fontSpace container row-5">
                    <h2>Benefícios</h2>
                  </div>
                  <div className="card-description container row-5">
                    <div className="card-subtitle">
                      <p>
                        A implantação de gestão de informações e de processos
                        totalmente eletrônica trouxe grandes benefícios para a
                        instituição:
                      </p>
                    </div>
                    <div className="card-text">
                      <ul className="ulStyleCard">
                        <li className="liStyleCard">
                          Melhoria da segurança ao paciente com histórico
                          completo e legível disponível para um diagnóstico mais
                          preciso e rápido
                        </li>
                        <li className="liStyleCard">
                          Melhoria de segurança ao acesso de dados clínicos
                          confidenciais
                        </li>
                        <li className="liStyleCard">
                          Agilidade no tratamento multidisciplinar pois todos se
                          comunicam em tempo real e podem atender prontamente
                          aos chamados
                        </li>
                        <li className="liStyleCard">
                          Redução do tempo de permanência com menor risco de
                          infecção hospitalar e aumento da rotatividade por
                          leito
                        </li>
                        <li className="liStyleCard">
                          Redução nos custos de arquivamento e faturamento de
                          contas médicas
                        </li>
                        <li className="liStyleCard">
                          Redução de custos com impressões
                        </li>
                        <li className="liStyleCard">
                          Redução de custos com a repetição de exames já
                          realizados
                        </li>
                        <li className="liStyleCard">
                          Aumento de faturamento com a redução das perdas de
                          registros de atendimentos
                        </li>
                        <li className="liStyleCard">
                          Redução de perdas com a padronização de processos
                        </li>
                        <li className="liStyleCard">
                          Melhoria na gestão e nos controles com rico acesso a
                          informações
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="caseSectionQuote container-fluid col-12 fontSpace"
          id="caseSectionQuote"
        >
          <div className="row container-fluid">
            <div className="container topContainerQuote mb-5 fontSpace">
              <div className="quoteTextContent col-lg-6 col-md-12 col-sm-12 ">
                <img
                  className="img-fluid quoteIcon"
                  alt=""
                  src="/QuoteBgn.png"
                />
                <p className="fontSpace">
                  A evolução do ICOM para um ambiente 100% digital nos trouxe
                  muitos ganhos, entre eles, maior facilidade e agilidade para
                  as notificações no sistema da vigilância sanitária
                  (obrigatórias em grande parte das doenças tratadas por nós),
                  maior sustentabilidade e economia pela grande redução no uso
                  de papel e também mais produtividade para as equipes. No que
                  refere à segurança clínica, o fato dos acessos ao prontuário
                  eletrônico do paciente serem delimitados pela área de atuação
                  do profissional, garante a confidencialidade dos dados e
                  protege a privacidade dos pacientes. Além disso, a formação do
                  banco de dados confiável e seguro nos permite analisar nosso
                  desempenho nos desfechos clínicos e contribuir com o Estado na
                  definição de políticas públicas.
                </p>
                <div className="quotedNomePessoa">
                  <h6>Dra Ceuci Nunes, Diretora Geral do ICOM.</h6>
                  <img
                    className="img-fluid quoteIcon"
                    alt=""
                    src="/QuoteFin.png"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 imgContainerQuote">
                <img
                  className="imgMain img-fluid"
                  alt=""
                  src="/DraSeuciImg.png"
                />
              </div>
            </div>
          </div>
          <div className="row container-fluid">
            <div className="quoteBottom quoteTextContent2  col-lg-12 col-md-12 col-sm-12 container">
              <img className="quoteIcon img-fluid" alt="" src="/QuoteBgn.png" />
              <p>
                Ganhamos agilidade no acesso às informações e a eliminação de
                necessidade de espaço físico para arquivamento. Foi muito
                benéfico, tanto para a instituição quanto para pacientes e
                familiares. Antigamente, para fornecermos a cópia de um
                prontuário era necessário imprimir, e que na maioria das vezes
                tinham em média 500 páginas a depender do período de
                internamento. Hoje o paciente recebe um dvd com o prontuário
                gravado em PDF.
              </p>
              <div className="quotedNomePessoa2">
                <h6>
                  Marcus Vinicius Almeida Loureiro, Diretor Administrativo do
                  ICOM.
                </h6>
                <img
                  className="quoteIcon quoteFin2 img-fluid"
                  alt=""
                  src="/QuoteFin.png"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className="caseSectionContato container-fluid col-12 fontSpace"
          id="caseSectionContato"
        >
          <div className="containerMid">
            <div className="container">
              <div className="textTop col-12">
                <h5>
                  Para agendar uma visita técnica ao ICOM e conhecer
                  pessoalmente estas mudanças, envie uma mensagem para nós:
                </h5>
              </div>
            </div>
            <div className="container ">
              <div className="textBot col-12">
                <div className="container-fluid containerRowler">
                  <a
                    href="https://api.whatsapp.com/send?phone=5571991650254&text="
                    type="button"
                    target="_blank"
                    className="d-flex flex-nowrap"
                  >
                    <img
                      className="img-fluid iconContato "
                      src="/PhoneIcon.png"
                    />
                    <p className="px-3">(71) 99150-0161</p>
                  </a>
                </div>
                <div className="container-fluid containerRowler">
                  <div className="d-flex flex-nowrap">
                    <img
                      className="img-fluid iconContato px-1"
                      src="/MailIcon.png"
                    />
                    <p className="px-2">contato@smedtecnologia.com.br</p>
                  </div>
                </div>
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
          <div className="container-fluid" id="fluidCarouselCont">
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
