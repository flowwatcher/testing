import React from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import CustomComboNew from "../CustomComboNew";

export default function ModalProdutosForm(props) {
  const createUserFormSchema = z.object({
    nome: z
      .string()
      .nonempty("Campo obrigatório")
      .min(3, "Mínimo 3 caracteres")
      .max(25),
    email: z
      .string()
      .nonempty("Campo obrigatório")
      .min(3, "Mínimo 3 caracteres"),
    modulos: z.array(z.string()),
    qtdLeitos: z.string(),
    estacoesTrabQtd: z.string(),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(createUserFormSchema),
    defaultValues: {
      nome: "",
      email: "",
      modulos: ["modAtendimento"],
      qtdLeitos: "",
      estacoesTrabQtd: "",
    },
  });

  function createUser(data) {
    console.log(data);
    console.log("Formulário enviado");

    reset({
      nome: "",
      email: "",
      modulos: [],
      qtdLeitos: "",
      estacoesTrabQtd: "",
    });

    toast.success("Cadastrado com sucesso!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const optionsLeitoArrayInit = [
    { id: 30, nome: "30", value: "30" },
    { id: 60, nome: "60", value: "60" },
    { id: 120, nome: "120", value: "120" },
  ];

  const optionsEstacoesTrabQtd = [
    { id: 18, nome: "18", value: "18" },
    { id: 25, nome: "25", value: "25" },
    { id: 100, nome: "100", value: "100" },
  ];

  return (
    <div className="modal-dialog modal-dialog-centered container-fluid fontSpace">
      <div className="modal-content ">
        <button
          type="button"
          className="btnCloseModal btn"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <img src="/CloseDialogIcon.png" alt="Close" className="img-fluid" />
        </button>
        <div className="modal-header">
          <h1 className="modal-title" id="modalProdutoLabel">
            Preencha o Formulário para entraremos em contato
          </h1>
        </div>
        <div className="modal-body">
          <form
            className="modalProdutoForm container-fluid"
            id="formClinica"
            onSubmit={handleSubmit(createUser)}
          >
            <div className="position-relative mb-5 fontSpace">
              <label
                htmlFor="nomeInputClinica"
                className={`custom-label fontSpace ${
                  errors.nome && "erroLabel"
                }`}
              >
                Nome
              </label>
              <input
                type="text"
                className={`form-control custom-input fontSpace mb-2 ${
                  errors.nome && "erroInput"
                }`}
                id="nomeInputClinica"
                placeholder="Escreva seu nome aqui"
                {...register("nome")}
              />
              <span className="erroMsg">
                {errors.nome && errors.nome.message}
              </span>
            </div>
            <div className="position-relative mb-5 fontSpace">
              <label
                htmlFor="mailInputClinica"
                className={`custom-label ${errors.email && "erroLabel"}`}
              >
                E-mail
              </label>
              <input
                type="text"
                className={`form-control custom-input mb-2 ${
                  errors.email && "erroInput"
                }`}
                id="mailInputClinica"
                placeholder="Escreva seu e-mail aqui"
                {...register("email")}
              />
              <span className="erroMsg">
                {errors.email && errors.email.message}
              </span>
            </div>
            <div className="mb-1 checkBoxGrid">
              <div className="checkBoxesRow mb-1 fontSpace">
                <div className="form-check mb-3 form-check-inline col-lg-3 col-md-4 col-sm-4 col-8">
                  <input
                    className={`form-check-input custom-checkbox`}
                    type="checkbox"
                    id="modAtendimentoCheck"
                    key="modAtendimentoCheck_sim"
                    value="modAtendimento"
                    {...register("modulos")}
                  />
                  <label
                    className={`form-check-label`}
                    htmlFor="modAtendimentoCheck"
                  >
                    Módulo de Atendimento
                  </label>
                </div>
                <div className="form-check mb-3  form-check-inline col-lg-3 col-md-4 col-sm-4 col-8">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    id="modSuprimentosCheck"
                    value="modSuprimentos"
                    {...register("modulos")}
                  />
                  <label
                    className={`form-check-label `}
                    htmlFor="modSuprimentosCheck"
                  >
                    Módulo de Suprimentos
                  </label>
                </div>
                <div className="form-check mb-3  form-check-inline col-lg-3 col-md-4 col-sm-4 col-8">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    id="modAssistenciaMultCheck"
                    value="modAssistenciaMult"
                    {...register("modulos")}
                  />
                  <label
                    className={`form-check-label `}
                    htmlFor="modAssistenciaMultCheck"
                  >
                    Módulo de Assistencia Multidisciplnar
                  </label>
                </div>
                <div className="form-check mb-3  form-check-inline col-lg-3 col-md-4 col-sm-4 col-8">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    id="modFinanceiroCheck"
                    value="modFinanceiro"
                    {...register("modulos")}
                  />
                  <label
                    className={`form-check-label `}
                    htmlFor="modFinanceiroCheck"
                  >
                    Módulo Financeiro
                  </label>
                </div>
                <div className="form-check mb-3  form-check-inline col-lg-3 col-md-4 col-sm-4 col-8">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    id="modApoioAssistCheck"
                    value="modApoioAssist"
                    {...register("modulos")}
                  />
                  <label
                    className={`form-check-label `}
                    htmlFor="modApoioAssistCheck"
                  >
                    Módulo de Apoio Assistencial
                  </label>
                </div>
                <div className="form-check mb-3  form-check-inline col-lg-3 col-md-4 col-sm-4 col-8">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    id="modGesAdmECheck"
                    value="modGesAdmE"
                    {...register("modulos")}
                  />
                  <label
                    className={`form-check-label `}
                    htmlFor="modGesAdmECheck"
                  >
                    Módulo gestão Administrativa e Estratégia
                  </label>
                </div>
                <div className="form-check mb-3  form-check-inline col-lg-3 col-md-4 col-sm-4 col-8">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    id="modTICheck"
                    value="modTI"
                    {...register("modulos")}
                  />
                  <label className={`form-check-label `} htmlFor="modTICheck">
                    Módulo de tecnologia da informação
                  </label>
                </div>
                <div className="form-check mb-3  form-check-inline col-lg-3 col-md-4 col-sm-4 col-8">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    id="modAnalyCheck"
                    value="modAnaly"
                    {...register("modulos")}
                  />
                  <label
                    className={`form-check-label `}
                    htmlFor="modAnalyCheck"
                  >
                    Módulo de Analytics
                  </label>
                </div>
                <div className="form-check mb-3  form-check-inline col-lg-3 col-md-4 col-sm-4 col-8">
                  <input
                    className="form-check-input custom-checkbox"
                    type="checkbox"
                    id="modLabCheck"
                    value="modLab"
                    {...register("modulos")}
                  />
                  <label className={`form-check-label `} htmlFor="modLabCheck">
                    Laboratório
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <span className="erroMsg">
                  {errors.modulos && errors.modulos.message}
                </span>
              </div>
            </div>
            <div className="mb-4 selectGrid">
              <div className="selectRows row" id="selectRowsContainer">
                <Controller
                  name="qtdLeitos"
                  control={control}
                  defaultValue=""
                  rules={{ required: false }}
                  render={({ field }) => (
                    <CustomComboNew
                      field={field}
                      label="Quantidade de Leitos"
                      placeholder="Escolha a quantidade de leitos"
                      options={optionsLeitoArrayInit}
                      erro={errors.qtdLeitos && "Selecione uma opção"}
                    />
                  )}
                />
                <Controller
                  name="estacoesTrabQtd"
                  control={control}
                  defaultValue=""
                  rules={{ required: false }}
                  render={({ field }) => (
                    <CustomComboNew
                      field={field}
                      label="Quantidade de estações de trabalho"
                      placeholder="Escolha a quantidade de estações"
                      options={optionsEstacoesTrabQtd}
                      erro={errors.estacoesTrabQtd && "Selecione uma opção"}
                    />
                  )}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="submit"
                className="btn btnDialogSubmit"
                onClick={() => console.log("Botão clicado")}
              >
                Próximo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
