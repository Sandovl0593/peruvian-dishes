import "../assets/Incentive.css";

export const Incentive = () => {
  return (
    <section id="sec-incentive">
      <div className="box-center box-incentive">
        {/* Slider con platos extraidos aleatoriamente */}
        <div className="content-incentive">
          <div>Platos y bebidas a todo gusto</div>
          {/* info */}
        </div>
        <div className="image-incentive">
          <img
            src="https://www.picsum.photos/200/200"
            alt="plato"
            loading="lazy"
          />
        </div>
      </div>
      <div className="box-center box-incentive">
        {/* Slider con platos extraidos aleatoriamente */}
        <div className="image-incentive">
          <img
            src="https://www.picsum.photos/200/200"
            alt="alimento"
            loading="lazy"
          />
        </div>
        <div className="content-incentive">
          <div>Alimentos de todas las regiones </div>
          {/* info */}
        </div>
      </div>
    </section>
  );
};
