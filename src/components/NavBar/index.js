import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const { pathname } = router;
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleDropdownShow = () => {
      setDropdownAberto(true);
    };

    const handleDropdownHide = () => {
      setDropdownAberto(false);
    };

    const dropdownElement = dropdownRef.current;
    dropdownElement.addEventListener("show.bs.dropdown", handleDropdownShow);
    dropdownElement.addEventListener("hide.bs.dropdown", handleDropdownHide);

    return () => {
      dropdownElement.removeEventListener(
        "show.bs.dropdown",
        handleDropdownShow
      );
      dropdownElement.removeEventListener(
        "hide.bs.dropdown",
        handleDropdownHide
      );
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg container gradient-border"
      id="navBarDiv"
    >
      <div className="d-flex ">
        <Link href="/" legacyBehavior>
          <img
            alt="Company Logo"
            className="navbar-brand"
            src={`${
              pathname === "/"
                ? "/logoSmedNavWhite.png"
                : "/LogoSmedColoredNav.png"
            }`}
          />
        </Link>
      </div>
      <div className="navbar-collapse collapse" id="navbarContent">
        <div className="d-flex leftNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li>
              <Link className="liNavBar d-flex flex-column" href="/quemsomos">
                <span
                  className={` minWidth110 ${
                    pathname === "/" ? "liNavBarTextHome" : "liNavBarText"
                  }`}
                >
                  Quem somos
                </span>
                {pathname === "/" ? (
                  ""
                ) : (
                  <img
                    src="/ActiveUnderQuemSomos.png"
                    alt="underQuemSomos"
                    className={`${
                      pathname === "/quemsomos" ? "underActive" : "d-none"
                    }`}
                  />
                )}
              </Link>
            </li>

            <li
              className="nav-item dropdown liNavDropDown d-flex flex-column justify-content-center"
              ref={dropdownRef}
            >
              <a
                aria-expanded="false"
                className="nav-link dropdown-toggle liNavBar d-flex flex-column justify-content-center"
                data-bs-toggle="dropdown"
                href="#"
                id="productsDropdown"
                role="button"
              >
                <span
                  className={`${
                    pathname === "/" ? "liNavBarTextHome" : "liNavBarText"
                  }`}
                >
                  Produtos
                  {pathname === "/" ? (
                    <img
                      src={
                        dropdownAberto
                          ? "/dropdownCima16.png"
                          : "/dropdownBaixo16.png"
                      }
                      alt="dropdown"
                      className="custom-dropdown-icon"
                    />
                  ) : (
                    <img
                      src={
                        dropdownAberto
                          ? "/dropdownCima16Azul.png"
                          : "/dropdownBaixo16Azul.png"
                      }
                      alt="dropdown"
                      className="custom-dropdown-icon"
                    />
                  )}
                </span>

                {pathname === "/" ? (
                  ""
                ) : (
                  <img
                    src="/ActiveUnderProdutos.png"
                    alt="underProdutos"
                    className={`align-self-center ${
                      pathname.startsWith("/produtos")
                        ? "underActive"
                        : "d-none"
                    }`}
                  />
                )}
              </a>

              <ul aria-labelledby="productsDropdown" className="dropdown-menu ">
                <li className="dropdown-item">
                  <Link href="/produtos/clinica">Clinica</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/produtos/hospital">Hospital</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/produtos/ubs">UBS</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/produtos/laboratorio">Laboratorio</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/produtos/analytics">Analytics</Link>
                </li>
                <li className="dropdown-item">
                  <Link href="/produtos/upa">UPA</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link className="liNavBar d-flex flex-column" href="/cases">
                <span
                  className={`${
                    pathname === "/" ? "liNavBarTextHome" : "liNavBarText"
                  }`}
                >
                  Cases
                </span>
                {pathname === "/" ? (
                  ""
                ) : (
                  <img
                    src="/ActiveUnderCases.png"
                    alt="underCases"
                    className={`${
                      pathname === "/cases" ? "underActive" : "d-none"
                    }`}
                  />
                )}
              </Link>
            </li>
            <li>
              <Link className="liNavBar d-flex flex-column" href="/contato">
                <span
                  className={`${
                    pathname === "/" ? "liNavBarTextHome" : "liNavBarText"
                  }`}
                >
                  Contato
                </span>
                {pathname === "/" ? (
                  ""
                ) : (
                  <img
                    src="/ActiveUnderContatos.png"
                    alt="underContatos"
                    className={`${
                      pathname === "/contato" ? "underActive" : "d-none"
                    }`}
                  />
                )}
              </Link>
            </li>

            <Link className="loginBtn btn rounded-pill py-2" href="/login">
              <span className="liNavBarTextBtn">Login</span>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
