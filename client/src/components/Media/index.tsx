import { ArrowUpRight } from "phosphor-react";
import CN from "../../assets/cnbrasil.png";
import ExameI from "../../assets/exameinvest.png";
import ValorI from "../../assets/valorinveste.png";

import "./styles.css";

export const Media = () => {
  return (
    <div className="media-container">
      <div className="media1">
        <h1 className="medias-text">
          Nubank recebe US$ 400 mi e se torna uma das 5 instituições mais
          valiosas da América Latina
        </h1>
        <a className="link-medias-content-container" href="#">
          Leia a matéria&nbsp;
          <ArrowUpRight size={20} color="#8225e1" weight="bold" />
        </a>
        <img className="img-medias" src={CN} alt="" />
      </div>
      <div className="media2">
        <h1 className="medias-text">
          O Nubank anuncia a aquisição da corretora Easynvest. O negócio
          representa a entrada no aquecido mercado de investimentos
        </h1>
        <a className="link-medias-content-container" href="#">
          Leia a matéria&nbsp;
          <ArrowUpRight size={20} color="#8225e1" weight="bold" />
        </a>
        <img className="img-medias" src={ExameI} alt="" />
      </div>
      <div className="media3">
        <h1 className="medias-text">
          Nubank é a primeira instituição financeira do Brasil a zerar emissões
          de gás carbono.
        </h1>
        <a className="link-medias-content-container" href="#">
          Leia a matéria&nbsp;
          <ArrowUpRight size={20} color="#8225e1" weight="bold" />
        </a>
        <img className="img-medias" src={ValorI} alt="" />
      </div>
    </div>
  );
};
