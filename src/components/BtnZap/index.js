import React from "react";

export default function BtnZap() {
  function openWhatsApp() {
    const phoneNumber = "5571991650254";
    const message = "Olá! Vim através do Site!";

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink, "_blank");
  }

  return (
    <button
      className="btn btnZap sticky border-0 bg-transparent "
      id="btnZapControl"
      onClick={openWhatsApp}
    >
      <i className="btnZapIcon bi"> </i>
    </button>
  );
}
