import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

export default function NavBarMobile() {
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

  useEffect(() => {
    document.body.style.overflow = "auto";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <nav className="navbar navbar-dark  navbar-expand-lg  fixed-top bgNavBarDivMobile px-3  my-0">
      <button
        className="navbar-toggler"
        type="button"
        id="bntNavBarMobile"
        data-bs-toggle="offcanvas"
        data-bs-target="#navbarOffcanvasLg"
        aria-controls="navbarOffcanvasLg"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="offcanvas offcanvas-start "
        id="navbarOffcanvasLg"
        aria-labelledby="navbarOffcanvasLgLabel"
      >
        <div className="offcanvas-header d-flex justify-content-between bgNavBarDivMobile">
          <h5 className="offcanvas-title" id="navbarOffcanvasLgLabel">
            {" "}
            Menu
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Fechar"
          ></button>
        </div>
        <div className="d-flex  flex-column offcanvas-body" id="itensSideBar">
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <li className="navItemMobile">
              <Link className="liNavBarMobile" href="/quemsomos">
                <span className="liNavBarTextMobile">Quem somos</span>
              </Link>
            </li>

            <li
              className="navItemMobile nav-item dropdown liNavDropDown"
              id="dropdownMobile"
              ref={dropdownRef}
            >
              <a
                aria-expanded="false"
                className="nav-link dropdown-toggle liNavBarMobile"
                data-bs-toggle="dropdown"
                href="#"
                id="productsDropdown"
                role="button"
              >
                <span className="liNavBarTextMobile">Produtos </span>

                <img
                  src={
                    dropdownAberto
                      ? "/dropdownCima16.png"
                      : "/dropdownBaixo16.png"
                  }
                  alt="dropdown"
                  className="custom-dropdown-icon"
                />
              </a>

              <ul aria-labelledby="productsDropdown" className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" href="/produtos/clinica">
                    Clinica
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/produtos/hospital">
                    Hospital
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item " href="/produtos/ubs">
                    UBS
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/produtos/laboratorio">
                    Laboratorio
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/produtos/analytics">
                    Analytics
                  </Link>
                </li>
                <li>
                  <Link 
                    className="dropdown-item" 
                    href="/produtos/upa"
                  >
                    UPA
                  </Link>
                </li>
              </ul>
            </li>

            <li className="navItemMobile">
              <Link className="liNavBarMobile" href="/cases">
                <span className="liNavBarTextMobile">Cases</span>
              </Link>
            </li>
            <li className="navItemMobile">
              <Link className="liNavBarMobile" href="/contato">
                <span className="liNavBarTextMobile">Contato</span>
              </Link>
            </li>
          </ul>
          <div className="align-self-center btnLoginMobile">
            <Link className="navItemMobile btnLogin" href="/login">
              <span className="liNavBarTextBtnMobile">Login</span>
            </Link>
          </div>
        </div>
      </div>

      <Link className="navbar-brand " href="/">
        <img
          alt="Company Logo"
          className=""
          href="#"
          src="/logoSmedNavWhite.png"
          width={50}
          height={50}
        />
      </Link>
    </nav>
  );
}
