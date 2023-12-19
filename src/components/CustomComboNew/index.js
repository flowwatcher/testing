import React, { useState } from "react";

export default function CustomComboNew({
  options,
  nome,
  label,
  initialValue,
  placeholder,
  erro,
  field
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [selectedValue, setSelectedValue] = useState(initialValue);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleItemClick(id, nome) {
    setSelectedValue(nome);
    field.onChange(nome);
    setIsOpen(false);
  }

  return (
    <div
      className={`position-relative col-lg-6 col-md-12 col-sm-12 mb-4 col-md-12 fontSpace`}
      id={`idSelect${nome}`}
    >
      <label className={`custom-label form-label py-1 px-2 `}>{label}</label>
      <div
        className={`custom-combobox fontSpace mb-2 fontPlaceHolder${
          invalid ? "is-invalid" : ""
        }`}
        onClick={toggleDropdown}
      >
        {selectedValue || placeholder}
        {isOpen ? (
          <img
            className="dropdownSelect"
            src="/ddiconmodUp.png"
            alt="dropdownFechado"
          />
        ) : (
          <img
            className="dropdownSelect"
            src="/DdIconMod.png"
            alt="dropdownAberto"
          />
        )}
      </div>
      {isOpen && (
        <ul
          className="dropdown-menu listaSelectCustom col-lg-6 col-md-12 col-sm-12 mb-3 col-md-12 fontSpace"
          aria-labelledby={`${nome}Dropdown`}
        >
          {options.map((option) => {
            return (
              <li
                key={option.id}
                onClick={() => handleItemClick(option.id, option.nome)}
                className="fontSpace"
              >
                {option.nome}
              </li>
            );
          })}
        </ul>
      )}
      {/* <span className="erroMsg">{erro}</span> */}
    </div>
  );
}
