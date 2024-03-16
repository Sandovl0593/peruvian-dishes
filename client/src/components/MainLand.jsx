import { Link } from "react-router-dom";
import "../assets/MainLand.css";

export const MainLand = () => {
  return (
    <section id="sec-main-land">
      <div className="box-text box-main-land">
        <div>
          <h1>Peruvian</h1>
        </div>
        <div id="cont-main-land">
          <div>Toda la gastronomia peruana en una RestFul API</div>
          <div id="check-docs">
            <div>Chequea la documentación</div>
            <Link to="/docs">
              <button id="button-docs">Aquí</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
