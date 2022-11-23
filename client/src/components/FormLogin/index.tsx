// import { TextField } from "@mui/material";
import { TextField } from "../TextField";
import { ArrowRight } from "phosphor-react";

import "./styles.css";
import { useState } from "react";

export const FormLogin = () => {
  const [cpf, setCpf] = useState("");
  // const [disable, setDisable] = useState(true);

  const btn: any = document.querySelector("#btn");

  const handleusername = (e: any) => {
    const getCpf = e.target.value;
    setCpf(getCpf);
  };

  function disableBtn() {
    if (e.currentTarget.value.length < 11) {
      btn.disabled = true;
    } else {
      btn.disabled = false;
    }
  }

  return (
    <div className="login-container">
      <h1 className="title-login-container">
        Com o Nubank, a resposta vem em menos de 1 minuto
      </h1>
      <div className="box-input-login-container">
        <TextField value={cpf} onChange={(e) => handleusername(e)} id="input" />
      </div>
      <button id="btn" disabled={disableBtn} className="button-login-container">
        Continuar
        <ArrowRight size={20} weight="bold" />
      </button>
    </div>
  );
};
