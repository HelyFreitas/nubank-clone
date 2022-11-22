import { FormLogin } from "../../components/FormLogin";

import Logo from "../../assets/logonubank.png";
import Cell from "../../assets/cellphonelogin.webp"
import Cartao from "../../assets/cartaologin.webp"

import "./styles.css";

export const Login = () => {
  return (
    <div className="container">
      <div className="content-container">
        <div className="first-content-container">
          <img className="logo-first-content-container" src={Logo} alt="" />
          <div className="texts-first-content-container">
            <p className="paragraph-first-content-container">
              Cartão de crédito com anuidade zero. Conta digital prática e sem
              custos.
            </p>
            <FormLogin />
          </div>
        </div>
        <div className="second-content-container">
            <img className="img1-second-content-container" src={Cell} alt="" />
            <img className="img2-second-content-container" src={Cartao} alt="" />
        </div>
      </div>
    </div>
  );
};
