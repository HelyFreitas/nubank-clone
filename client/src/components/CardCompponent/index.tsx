import "./styles.css";
import Card from "../../assets/cartaologin.webp";

export const CardComponent = () => {
  return (
    <div className="card-container">
      <div className="content-card-container">
        <h2 className="text-card-container">Conta digital do Nubank</h2>
        <img className="img1-second-content-container" src={Card} alt="" />
        <p className="paragraph-card-container">
          Rende mais que a poupança, sem taxa de manutenção nem tarifas
          escondidas.
        </p>
      </div>
    </div>
  );
};
