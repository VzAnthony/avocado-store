import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { card, card__image, card__title, card__price, card__sku, card__form, card__form__input, card__form__button, card__details, card__details__description, card__details__attributes, card__details__attributes__title, card__details__attributes__shape, card__details__attributes__shape__value, card__details__attributes__hardiness,card__details__attributes__hardiness__value, card__details__attributes__taste, card__details__attributes__taste__value } from './Avocado.module.css'

const Avocado = () => {
  const { query : { id } } = useRouter()
  const [avo, setAvo] = useState({})
  useEffect(() => {
    if(id){
      fetch(`/api/avo/${id}`)
      .then(response => response.json())
      .then(data => setAvo(data))
    }
  }, [id])
  if(avo.attributes) {
    return (
      <div className={card}>
        <picture>
          <img className={card__image} src={avo.image} alt={avo.name}/>
        </picture>
        <h3 className={card__title}>{avo.name}</h3>
        <p className={card__price}>Price: ${avo.price}</p>
        <p className={card__sku}>SKU: {avo.sku}</p>
        <div className={card__form}>
          <input className={card__form__input} type='number' placeholder='Quantity'/>
          <button className={card__form__button}>Add to Card</button>
        </div>
        <div className={card__details}>
          <h3>About this avocado</h3>
          <p className={card__details__description}>{avo.attributes.description}</p>
        </div>
        <div className={card__details__attributes}>
          <h3 className={card__details__attributes__title}>Attributes</h3>
          <p className={card__details__attributes__shape}>Shape</p>
          <p className={card__details__attributes__shape__value}>{avo.attributes.shape}</p>
          <p className={card__details__attributes__hardiness}>Hardiness</p>
          <p className={card__details__attributes__hardiness__value}>{avo.attributes.hardiness}</p>
          <p className={card__details__attributes__taste}>Taste</p>
          <p className={card__details__attributes__taste__value}>{avo.attributes.taste}</p>
        </div>
      </div>
    )
  }
  return <h3>cargando</h3>
}

export default Avocado
