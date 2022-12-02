// import { TextField } from "@mui/material";
import { TextField } from "../TextField";
import { ArrowRight } from "phosphor-react";

import "./styles.css";

export const FormLogin = () => {
  return (
    <div className="login-container">
      <h1 className="title-login-container">
        Com o Nubank, a resposta vem em menos de 1 minuto
      </h1>
      <div className="box-input-login-container">
        <TextField />
      </div>
      <button id="btn" className="button-login-container">
        Continuar
        <ArrowRight size={20} weight="bold" />
      </button>
    </div>
  );
};
