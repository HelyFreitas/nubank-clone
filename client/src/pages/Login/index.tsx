import { FormLogin } from "../../components/FormLogin";

import Logo from "../../assets/logo.svg";
import Cartao from "../../assets/cartaologin.webp";
import Img from "../../assets/menlogin.webp";
import ImgNumbers from "../../assets/numberslogin.webp";
import BonecoImg from "../../assets/bonecologin.webp";

import "./styles.css";
import { CellComponent } from "../../components/CellComponent";
import { CardComponent } from "../../components/CardCompponent";
import { ArrowRight } from "phosphor-react";
import { FotoComponent1 } from "../../components/FotoComponent1";
import { Media } from "../../components/Media";

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
          <CellComponent />
          <CardComponent />
        </div>
        <div className="third-content-container">
          <div className="content-limit">
            <img className="img-third-content-container" src={Img} alt="" />
            <div className="texts-third-content-container">
              <h1 className="title-third-content-container">
                Envie e receba pagamentos em segundos
              </h1>
              <p className="paragraph-third-content-container">
                Use o Pix para fazer pagamentos e transferências instantâneas a
                qualquer hora. Sem burocracia e sem custo, do jeito Nubank.
              </p>
              <a className="link-third-content-container" href="#">
                Conhecer o Pix no Nubank&nbsp;
                <ArrowRight size={20} weight="bold" />
              </a>
            </div>
          </div>
        </div>
        <div className="bedroom-content-container">
          <FotoComponent1 />
        </div>
        <div className="fifth-content-container">
          <div className="align-content-container">
            <div className="texts-fifth-content-container">
              <h1 className="title-fifth-content-container">Zero anuidade</h1>
              <p className="paragraph-fifth-content-container">
                Burocracia custa caro. Somos eficientes para você não ter que
                pagar tarifas.
              </p>
            </div>
            <img className="img-numbers" src={ImgNumbers} alt="" />
          </div>
        </div>
        <div className="boneco-content-container">
          <div className="align-content-boneco">
            <div className="texts-content-container">
              <h1 className="title-texts-content-container">
                E sem burocracia
              </h1>
              <h4 className="paragraph-texts-content-container">
                Soluções simples, seguras e 100% digitais para você fazer tudo
                diretamente pelo celular.
              </h4>
            </div>
            <img className="img-boneco-container" src={BonecoImg} alt="" />
          </div>
        </div>
        <div className="medias-content-container">
          <div className="align-media">
            <h1 className="title-medias">O que já saiu na mídia.</h1>
            <Media />
          </div>
        </div>
        <div className="footer">
          <div className="footer-container">
            <section className="texts-footer-container">
              <h1 className="title-text-footer-container">
                O fim da complexidade
              </h1>
              <p className="paragraph-text-footer-container">
                Para quem sabe que tecnologia e design são melhores do que
                agências e papelada.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
