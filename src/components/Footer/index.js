import Link from "next/link";

export default function FooterPage(props) {
  return (
    <>
      <div className="topFooter row container">
        <div className="col py-5" id="footerLogoCol">
          <img
            alt="logoFooter"
            className="img-fluid"
            src="/LogoSmedFooter.png"
          />
        </div>
        <div className="col py-5 mt-4" id="footerContatoCol">
          <img
            src="/icon-materiallocalphone.svg"
            alt="phoneIcon"
            className="mb-4 py-1 img-fluid"
          />
          <h2 className="textFooterColor tracking-widest mb-4 ">Contatos</h2>
          <ul className="list-unstyled mb-4 ">
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=5571991500161&text="
                target="_blank"
                className="font14px"
              >
                Telefone: (71)99150-0161
              </a>
            </li>
            <li>
              <a href="#" className="font14px">
                contato@smedtecnologia.com.br
              </a>
            </li>
          </ul>
        </div>
        <div className="col py-5" id="footerEndCol">
          <Link
            href="https://www.google.com/maps/place/Mais+Empresarial/@-12.8701992,-38.2998725,15z/data=!4m6!3m5!1s0x7163e16a0d82513:0x130e7ebf24ae7c63!8m2!3d-12.8701992!4d-38.2998725!16s%2Fg%2F11b6hydyg8?entry=ttu"
            legacyBehavior
          >
            <a target="_blank">
              <img
                src="/icon-awesomemappin.svg"
                alt="mapPinIcon"
                className="mb-1 py-4 img-fluid"
              />
            </a>
          </Link>
          <h2 className="textFooterColor tracking-widest mb-4">Endereço</h2>
          <ul className="list-unstyled mb-4">
            <li>
              <Link
                href="https://www.google.com/maps/place/Mais+Empresarial/@-12.8701992,-38.2998725,15z/data=!4m6!3m5!1s0x7163e16a0d82513:0x130e7ebf24ae7c63!8m2!3d-12.8701992!4d-38.2998725!16s%2Fg%2F11b6hydyg8?entry=ttu"
                legacyBehavior
              >
                <a className="font14px" target="_blank">
                  Rua João Chagas Ortins de Freitas, 577 Salas 802 e 812. Ed
                  Mais Empresarial. Buraquinho, Lauro de Freitas, BA - CEP
                  42.710-610.
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col py-5" id="footerMapaCol">
          <h2 className="tracking-widest textLightGreen py-4 px-1">
            Mapa do site
          </h2>
          <div className="d-flex px-2">
            <ul className="list-unstyled me-5">
              <li className="pb-4">
                <Link href="/" className="font14px">
                  Home
                </Link>
              </li>
              <li className="pb-4">
                <Link href="/quemsomos" className="font14px">
                  Quem Somos
                </Link>
              </li>
              <li className="pb-4">
                <Link href="#navBarDiv" className="font14px">
                  Produtos
                </Link>
              </li>
            </ul>
            <ul className="list-unstyled me-5">
              <li className="pb-4">
                <Link href="/cases" className="font14px">
                  Cases
                </Link>
              </li>
              <li className="pb-4">
                <Link href="/contato" className="font14px">
                  Contato
                </Link>
              </li>
              <li className="pb-4">
                <Link href="/login" className="font14px">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 bottomFooter ">
        <span className="fontSpace">
          ® 2023 Todos os direitos reservados. Smed
        </span>
      </div>
    </>
  );
}
