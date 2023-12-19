import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavBar from "../NavBar";
import NavBarMobile from "../NavBarMobile";
import { isMobileHeaderFotter } from "@/functions/mobileChecker";

export default function HeaderRender() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    isMobileHeaderFotter(setIsMobile, isMobile);
  }, []);

  return (
    <header className="container-fluid col">
      <div className="container-fluid headerSize cabecalhoMobile">
        <div className="col-12 align-self-center container-fluid">
          <div className="d-flex align-items-center headerTopPositionR container ">
            <div
              className="d-flex align-items-center px-2"
              id="emailHeaderSection"
            >
              <Image
                src="/icon-feathermail.svg"
                alt="Email Icon"
                width="20"
                height="20"
              />
              <span className="px-2 text-white">
                contato@smedtecnologia.com.br
              </span>
            </div>
            <div className="px-2" id="dividerHeaderSection">
              <Image
                src="/dividerHeader.svg"
                alt="Divider"
                width="24"
                height="21"
              />
            </div>
            <div
              className="d-flex align-items-center px-2"
              id="phoneHeaderSection"
            >
              <a
                href="https://api.whatsapp.com/send?phone=5571991500161&text="
                target="_blank"
              >
                <img
                  src="/icon-featherphone.svg"
                  alt="Phone Icon"
                  width="20"
                  height="20"
                />
                <span className="px-2">
                  Fale com o comercial: (71) 99150-0161
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {isMobile ? <NavBarMobile /> : <NavBar />}
    </header>
  );
}
