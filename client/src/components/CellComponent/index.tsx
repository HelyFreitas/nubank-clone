import "./styles.css";
import Cell from "../../assets/cellphonelogin.webp";

export const CellComponent = () => {
  return (
    <div className="cell-container">
      <div className="content-cell-container">
        <h2 className="text-cell-container">Conta digital do Nubank</h2>
        <img className="img1-second-content-container" src={Cell} alt="" />
        <p className="paragraph-cell-container">
          Rende mais que a poupança, sem taxa de manutenção nem tarifas
          escondidas.
        </p>
      </div>
    </div>
  );
};
