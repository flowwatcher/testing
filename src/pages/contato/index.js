import React, { useEffect, useState } from "react";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputMask from "react-input-mask";
import PageHeader from "@/components/PageHeader";
import FooterRender from "@/components/FooterRender";
import HeaderRender from "@/components/HeaderRender";
import BtnZap from "@/components/BtnZap";
import { isMobileHeaderFotter } from "@/functions/mobileChecker";

export default function Contato() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    isMobileHeaderFotter(setIsMobile, isMobile);
  }, []);

  const contatoFormSchema = z.object({
    nome: z
      .string()
      .nonempty({ message: `Nome é um campo Obrigatório` })
      .min(3, "Nome precisa ter 3 caracteres, no mínimo.")
      .max(25, "No máximo 25 caractéres no campo Nome.")
      .refine(
        (value) => /^[a-zA-Z]+(\s+[a-zA-Z]+)+$/.test(value),
        "Favor incluir pelo menos um Sobrenome"
      ),

    email: z
      .string()
      .nonempty({ message: `E-mail é um campo Obrigatório` })
      .email("E-mail inválido."),
    telefone: z
      .string()
      .nonempty({ message: `Telefone é um campo Obrigatório` })
      .min(15, "Telefone deve possuir no mínimo 11 números")
      .max(18, "Telefone deve possuir no máximo 15 números")
      .refine((value) => /\(?[0-9]{2}\)?[\s][0-9]{5}/.test(value), {
        message: "Apenas números são aceitos no campo Telefone.",
      }),
    mensagem: z
      .string()
      .nonempty({ message: `Mensagem é um campo Obrigatório` })
      .min(10, "Mínimo 10 caracteres para a mensagem."),
  });

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm({
    resolver: zodResolver(contatoFormSchema, {
      shouldUseNativeValidation: false,
    }),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    },
  });
  const submitContatoData = (data) => {
    console.log(data);
    reset();
  };

  const getErrorMessages = () => {
    const errorValues = Object.values(errors);
    const hasEmptyFieldError = errorValues.some(
      (error) =>
        error.type === "too_small" && error.message.includes("Obrigatório")
    );

    if (hasEmptyFieldError) {
      return "Todos os campos são obrigatórios.";
    } else {
      return errorValues.map((error) => error.message).join(" / ");
    }
  };

  return (
    <>
      <PageHeader titulo="SMED - Contato" />
      <BtnZap />
      <main>
        <HeaderRender />
        <section
          className="contatoPageSection container-fluid fontSpace col-12"
          id="contatoPageSection"
        >
          <div className="container fontSpace" id="sectionContainerContato">
            <div className="row">
              <div
                className="col-md-12 col-sm-12 col-lg-4 col-xl-4 order-md-2 order-sm-2 order-2 order-lg-1 order-xl-1 order-xxl-1"
                id="leftContatoPage"
              >
                <div className="containerGapper " id="contatosFaleConosco">
                  <div className="iconDiv">
                    <img
                      className="img-fluid iconImgPin"
                      src={
                        isMobile
                          ? "/PhoneWhiteContatoPage.png"
                          : "/icon1@3x.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="contatoTextTitle">Contatos</div>
                  <div className="contatoSubText">
                    <span>Telefone: (71) 99150-0161</span>
                    <br />

                    <span>contato@smedtecnologia.com.br</span>
                  </div>
                  <div className="iconDiv">
                    <img
                      className="img-fluid iconImgPin"
                      src={
                        isMobile
                          ? "/MapPinWhiteContatoPage.png"
                          : "/icon@3x.png"
                      }
                      alt=""
                    />
                  </div>
                  <div className="contatoTextTitle">Endereço</div>
                  <div className="contatoSubText">
                    <span>Rua João Chagas Ortins de Freitas, 577. </span>

                    <span>
                      Salas 802 e 812. Ed Mais Empresarial. Buraquinho.
                    </span>
                    <span> Lauro de Freitas, BA - CEP 42.710-610. </span>
                  </div>
                  {isMobile ? (
                    ""
                  ) : (
                    <div className="contatoSubTextFim">
                      <span>® 2023 Todos os direitos reservados. Smed </span>
                    </div>
                  )}
                </div>
              </div>

              <div
                className="col-md-12 col-sm-12 col-lg-8 col-xl-8 order-md-1 order-sm-1 order-1 order-lg-2 order-xl-2 order-xxl-2"
                id="rightContatoPage"
              >
                <div className="card" id="formFaleConosco">
                  <div className="container card-body">
                    <h2 className="formTitle">Fale conosco</h2>
                    <h6 className="formSubTitle">
                      Preencha os campos abaixo para entrar em contato:
                    </h6>
                    <form
                      className="formContato"
                      onSubmit={handleSubmit(submitContatoData)}
                      noValidate
                    >
                      <div className="position-relative mb-4">
                        <label
                          htmlFor="nomeInput"
                          className={`mt-1 custom-label ${
                            errors.nome ? "erroLabel" : ""
                          }`}
                        >
                          Nome
                        </label>
                        <input
                          required
                          name="nome"
                          type="text"
                          className={`form-control custom-input ${
                            errors.nome ? "erroInput" : ""
                          } mb-1`}
                          id="nomeInput"
                          {...register("nome")}
                        />
                      </div>
                      <div className="position-relative mb-4">
                        <label
                          htmlFor="mailInput"
                          className={`mt-1 custom-label ${
                            errors.email ? "erroLabel" : ""
                          }`}
                        >
                          E-mail
                        </label>
                        <input
                          name="email"
                          required
                          type="text"
                          className={`form-control custom-input ${
                            errors.email ? "erroInput" : ""
                          } mb-1`}
                          id="mailInput"
                          placeholder=""
                          {...register("email")}
                        />
                      </div>
                      <div className="position-relative mb-4">
                        <label
                          htmlFor="telInput"
                          className={`mt-1 custom-label ${
                            errors.telefone ? "erroLabel" : ""
                          }`}
                        >
                          Telefone
                        </label>
                        <InputMask
                          type="text"
                          name="telefone"
                          className={`form-control custom-input ${
                            errors.telefone ? "erroInput" : ""
                          } mb-1`}
                          id="telInput"
                          {...register("telefone")}
                          mask="(99) 99999-9999"
                        />
                      </div>
                      <div className="position-relative mb-4">
                        <label
                          htmlFor="msgInput"
                          className={`mt-1 custom-label-text-area ${
                            errors.mensagem ? "erroLabel" : ""
                          }`}
                        >
                          Escreva sua mensagem
                        </label>
                        <textarea
                          name="mensagem"
                          type="textarea"
                          className={`form-control ${
                            errors.mensagem
                              ? "erroInputArea"
                              : "custom-input-text-area"
                          } mb-1 `}
                          id="msgInput"
                          placeholder=""
                          {...register("mensagem")}
                        />
                      </div>
                      <div className="position-relative errorsDivs">
                        {errors ? (
                          <span className="erroMsg">
                            {getErrorMessages()} <br />
                          </span>
                        ) : (
                          ""
                        )}
                      </div>
                      <button className="btn rounded-pill py-1 btnContatoSubmit">
                        <span>Enviar</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="col-12 shadowFooterVerde fontSpace">
          <FooterRender />
        </footer>
      </main>
    </>
  );
}
