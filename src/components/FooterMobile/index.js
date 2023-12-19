import { deviceMobileCheckerCustom } from "@/functions/mobileChecker";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function FooterMobile(props) {
  const [deviceType, setDeviceType] = useState("tablet");
  const tabletSection = (
    <>
      <div className="rowTopFooter  ">
        <div className="col-5 col py-5 " id="footerLogoCol">
          <img
            alt="logoFooter"
            className="img-fluid"
            src="/LogoSmedFooter.png"
          />
        </div>
        <div className="col-6 py-5 px-auto" id="footerMapaCol">
          <h2 className="tracking-widest textLightGreen py-4 px-1">
            Mapa do site
          </h2>
          <div className="d-flex px-1">
            <ul className="list-unstyled me-5">
              <li className="pb-4 ajusteMap">
                <Link href="/" className="font14px">
                  Home
                </Link>
              </li>
              <li className="pb-4 ajusteMap">
                <Link href="/quemsomos" className="font14px">
                  Quem Somos
                </Link>
              </li>
              <li className="pb-4 ajusteMap">
                <Link href="#navBarDiv" className="font14px">
                  Produtos
                </Link>
              </li>
            </ul>
            <ul className="list-unstyled me-5">
              <li className="pb-4 ajusteMap">
                <Link href="/cases" className="font14px">
                  Cases
                </Link>
              </li>
              <li className="pb-4 ajusteMap">
                <Link href="/contato" className="font14px">
                  Contato
                </Link>
              </li>
              <li className="pb-4 ajusteMap">
                <Link href="/login" className="font14px">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rowBotFooter">
        <div className="col-5 col py-5 px-auto" id="footerContatoCol">
          <img
            src="/icon-materiallocalphone.svg"
            alt="phoneIcon"
            className="mb-2  img-fluid"
          />
          <h2 className="textFooterColor tracking-widest mb-3">Contatos</h2>
          <ul className="list-unstyled mb-4">
            <li>
              <Link
                href="https://api.whatsapp.com/send?phone=5571991500161&text="
                target="_blank"
                className="font14px"
              >
                Telefone: (71)99150-0161
              </Link>
            </li>
            <li>
              <a href="#" className="font14px">
                contato@smedtecnologia.com.br
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 py-5 px-auto" id="footerEndCol">
          <Link
            href="https://www.google.com/maps/place/Mais+Empresarial/@-12.8701992,-38.2998725,15z/data=!4m6!3m5!1s0x7163e16a0d82513:0x130e7ebf24ae7c63!8m2!3d-12.8701992!4d-38.2998725!16s%2Fg%2F11b6hydyg8?entry=ttu"
            legacyBehavior
            target="_blank"
          >
            <img
              src="/icon-awesomemappin.svg"
              alt="mapPinIcon"
              className=" mb-2 img-fluid"
            />
          </Link>
          <h2 className="textFooterColor tracking-widest mb-3">Endereço</h2>
          <ul className="list-unstyled mb-4">
            <li>
              <Link
                href="https://www.google.com/maps/place/Mais+Empresarial/@-12.8701992,-38.2998725,15z/data=!4m6!3m5!1s0x7163e16a0d82513:0x130e7ebf24ae7c63!8m2!3d-12.8701992!4d-38.2998725!16s%2Fg%2F11b6hydyg8?entry=ttu"
                legacyBehavior
                target="_blank"
              >
                <a href="#" className="font14px">
                  Rua João Chagas Ortins de Freitas, 577 Salas 802 e 812.Ed Mais
                  Empresarial.Buraquinho Lauro de Freitas, BA - CEP 42.710-610.
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
  const mobileSection = (
    <>
      <div className="rowTopFooter ">
        <div className="col-5 col py-5 px-auto" id="footerLogoCol">
          <img
            alt="logoFooter"
            className="img-fluid"
            src="/LogoSmedFooter.png"
          />
        </div>
        <div className="col-6 py-5 px-auto" id="footerMapaCol">
          <h2 className="tracking-widest textLightGreen py-4 px-1">
            Mapa do site
          </h2>
          <div className="d-flex px-1">
            <ul className="list-unstyled me-5">
              <li className="pb-4 ajusteMap">
                <Link href="/" className="font14px">
                  Home
                </Link>
              </li>
              <li className="pb-4 ajusteMap">
                <Link href="/quemsomos" className="font14px">
                  Quem Somos
                </Link>
              </li>
              <li className="pb-4 ajusteMap">
                <Link href="#navBarDiv" className="font14px">
                  Produtos
                </Link>
              </li>
            </ul>
            <ul className="list-unstyled me-5">
              <li className="pb-4 ajusteMap">
                <Link href="/cases" className="font14px">
                  Cases
                </Link>
              </li>
              <li className="pb-4 ajusteMap">
                <Link href="/contato" className="font14px">
                  Contato
                </Link>
              </li>
              <li className="pb-4 ajusteMap">
                <Link href="/login" className="font14px">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rowBotFooter">
        <div className="col-6 col  px-auto" id="footerContatoCol">
          <img
            src="/icon-materiallocalphone.svg"
            alt="phoneIcon"
            className="mb-2  img-fluid"
          />
          <h2 className="textFooterColor mb-3">Contatos</h2>
          <ul className="list-unstyled mb-4">
            <li>
              <Link
                href="https://api.whatsapp.com/send?phone=5571991500161&text="
                target="_blank"
                className="font14px"
              >
                Telefone: (71)99150-0161
              </Link>
            </li>
            <li>
              <a href="#" className="font14px">
                contato@smedtecnologia.com.br
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6  px-auto" id="footerEndCol">
          <Link
            href="https://www.google.com/maps/place/Mais+Empresarial/@-12.8701992,-38.2998725,15z/data=!4m6!3m5!1s0x7163e16a0d82513:0x130e7ebf24ae7c63!8m2!3d-12.8701992!4d-38.2998725!16s%2Fg%2F11b6hydyg8?entry=ttu"
            legacyBehavior
            target="_blank"
          >
            <img
              src="/icon-awesomemappin.svg"
              alt="mapPinIcon"
              className=" mb-2 img-fluid"
            />
          </Link>
          <h2 className="textFooterColor tracking-widest mb-3">Endereço</h2>
          <ul className="list-unstyled mb-4">
            <li>
              <Link
                href="https://www.google.com/maps/place/Mais+Empresarial/@-12.8701992,-38.2998725,15z/data=!4m6!3m5!1s0x7163e16a0d82513:0x130e7ebf24ae7c63!8m2!3d-12.8701992!4d-38.2998725!16s%2Fg%2F11b6hydyg8?entry=ttu"
                legacyBehavior
                target="_blank"
              >
                <a href="#" className="font14px">
                  Rua João Chagas Ortins de Freitas, 577 Salas 802 e 812.Ed Mais
                  Empresarial.Buraquinho Lauro de Freitas, BA - CEP 42.710-610.
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
  const mobileSmSection = (
    <>
      <div className="rowTopFooter ">
        <div className="col-8 col mt-3 " id="footerLogoCol">
          <img
            alt="logoFooter"
            className="img-fluid"
            src="/LogoSmedFooter.png"
          />
        </div>
        <div className="col-8 py-2" id="footerMapaCol">
          <h2 className="tracking-widest textLightGreen py-4">Mapa do site</h2>
          <div className="d-flex px-1">
            <ul className="list-unstyled me-5">
              <li className="pb-4 ajusteMap">
                <Link href="/" className="font14px">
                  Home
                </Link>
              </li>
              <li className="pb-4 ajusteMap">
                <Link href="/quemsomos" className="font14px">
                  Quem Somos
                </Link>
              </li>
              <li className="pb-4 ajusteMap">
                <Link href="#navBarDiv" className="font14px">
                  Produtos
                </Link>
              </li>
            </ul>
            <ul className="list-unstyled me-5">
              <li className="pb-4 ajusteMap">
                <Link href="/cases" className="font14px">
                  Cases
                </Link>
              </li>
              <li className="pb-4 ajusteMap">
                <Link href="/contato" className="font14px">
                  Contato
                </Link>
              </li>
              <li className="pb-4 ajusteMap">
                <Link href="/login" className="font14px">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rowBotFooter">
        <div className="col-8 px-auto" id="footerContatoCol">
          <img
            src="/icon-materiallocalphone.svg"
            alt="phoneIcon"
            className="mb-2  img-fluid"
          />
          <h2 className="textFooterColor tracking-widest mb-3">Contatos</h2>
          <ul className="list-unstyled mb-4">
            <li>
              <Link
                href="https://api.whatsapp.com/send?phone=5571991500161&text="
                target="_blank"
                className="font14px"
              >
                Telefone: (71)99150-0161
              </Link>
            </li>
            <li>
              <a href="#" className="font14px">
                contato@smedtecnologia.com.br
              </a>
            </li>
          </ul>
        </div>
        <div className="col-8  px-auto" id="footerEndCol">
          <Link
            href="https://www.google.com/maps/place/Mais+Empresarial/@-12.8701992,-38.2998725,15z/data=!4m6!3m5!1s0x7163e16a0d82513:0x130e7ebf24ae7c63!8m2!3d-12.8701992!4d-38.2998725!16s%2Fg%2F11b6hydyg8?entry=ttu"
            legacyBehavior
            target="_blank"
          >
            <img
              src="/icon-awesomemappin.svg"
              alt="mapPinIcon"
              className=" mb-2 img-fluid"
            />
          </Link>
          <h2 className="textFooterColor tracking-widest mb-3">Endereço</h2>
          <ul className="list-unstyled mb-4">
            <li>
              <Link
                href="https://www.google.com/maps/place/Mais+Empresarial/@-12.8701992,-38.2998725,15z/data=!4m6!3m5!1s0x7163e16a0d82513:0x130e7ebf24ae7c63!8m2!3d-12.8701992!4d-38.2998725!16s%2Fg%2F11b6hydyg8?entry=ttu"
                legacyBehavior
                target="_blank"
              >
                <a href="#" className="font14px">
                  Rua João Chagas Ortins de Freitas, 577 Salas 802 e 812.Ed Mais
                  Empresarial.Buraquinho Lauro de Freitas, BA - CEP 42.710-610.
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  useEffect(() => {
    deviceMobileCheckerCustom(532, 420, setDeviceType);
  }, []);

  let footerTopSection;

  switch (deviceType) {
    case "mobileSm":
      footerTopSection = mobileSmSection;
      break;
    case "mobile":
      footerTopSection = mobileSection;
      break;
    default:
      footerTopSection = tabletSection;
  }

  return (
    <>
      <div className="topFooter row container fontSpace">
        {footerTopSection}
      </div>
      <div className="col-12 bottomFooter fontSpace">
        <span className="fontSpace text-center">
          ® 2023 Todos os direitos reservados. Smed
        </span>
      </div>
    </>
  );
}
