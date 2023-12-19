import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "@/styles/globals.css";
import "@/styles/Footer.css";
import "@/styles/CarouselCases.css";
import "@/styles/NovidadesCarousel.css";
import "@/styles/Home.css";
import "@/styles/MainCarouselHome.css";
import "@/styles/CarouselProdutos.css";
import "@/styles/NavbarHome.css";
import "@/styles/CasesHome.css";
import "@/styles/QuemSomos.css";
import "@/styles/CertificadosCarousel.css";
import "@/styles/QuotesCarousel.css";
import "@/styles/CasesPages.css";
import "@/styles/ContatoPage.css";
import "@/styles/ModulosProdutosCells.css";
import "@/styles/ProdutosPage.css";
import "@/styles/ModalProdutosForm.css";
import "@/styles/NavBarMobile.css";
import "@/styles/CustomInputOverriders.css";
import "@/styles/404page.css";

export const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/spacebold.ttf",
      weight: "600",
      style: "bold",
      display: "swap",
      className: "fontBold",
    },
    {
      path: "../../public/fonts/spacelight.ttf",
      weight: "200",
      style: "light",
      display: "swap",
      className: "fontLight",
    },
    {
      path: "../../public/fonts/spacemedium.ttf",
      weight: "400",
      style: "medium",
      display: "swap",
      className: "fontMed",
    },
    {
      path: "../../public/fonts/spaceregular.ttf",
      weight: "300",
      style: "normal",
      display: "swap",
      className: "fontReg",
    },
    {
      path: "../../public/fonts/spacesemibold.ttf",
      weight: "500",
      style: "semibold",
      display: "swap",
      className: "fontSB",
    },
  ],
  variable: "--font-SpaceTTF",
});

export default function App({ Component, pageProps, localFont = myFont }) {
  return (
    <>
      <Component {...pageProps} {...myFont} />

      <Script src="https://unpkg.com/@popperjs/core@2" />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" />
    </>
  );
}
