import React from "react";
import {
  card,
  picture,
  card__image,
  card__buy,
  card__title,
  card__price,
  card__sku,
  card__form,
  card__form__input,
  card__form__button,
  card__details,
  card__details__description,
  card__attributes,
  card__attributes__title,
  card__attributes__shape,
  card__attributes__shape__value,
  card__attributes__hardiness,
  card__attributes__hardiness__value,
  card__attributes__taste,
  card__attributes__taste__value,
} from "./Avocado.module.css";

const Avocado = ({ avo }) => {
  return (
    <div className={card}>
      <picture className={picture}>
        <img className={card__image} src={avo.image} alt={avo.name} />
      </picture>

      <div className={card__buy}>
        <h3 className={card__title}>{avo.name}</h3>
        <p className={card__price}>Price: ${avo.price}</p>
        <p className={card__sku}>SKU: {avo.sku}</p>
        <div className={card__form}>
          <input
            className={card__form__input}
            type="number"
            placeholder="Quantity"
          />
          <button className={card__form__button}>Add to Card</button>
        </div>
      </div>

      <div className={card__details}>
        <h3>About this avocado</h3>
        <p className={card__details__description}>
          {avo.attributes.description}
        </p>
      </div>
      <div className={card__attributes}>
        <h3 className={card__attributes__title}>Attributes</h3>
        <p className={card__attributes__shape}>Shape</p>
        <p className={card__attributes__shape__value}>{avo.attributes.shape}</p>
        <p className={card__attributes__hardiness}>Hardiness</p>
        <p className={card__attributes__hardiness__value}>
          {avo.attributes.hardiness}
        </p>
        <p className={card__attributes__taste}>Taste</p>
        <p className={card__attributes__taste__value}>{avo.attributes.taste}</p>
      </div>
    </div>
  );
};

export default Avocado;
