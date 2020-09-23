import React, { useState, useEffect } from 'react'
import { list_avocados, anchor, card__picture, card__picture__img, card, card__details, card__details__title, card__details__price } from './ListAvocados.module.css'
import Link from 'next/link'

function ListAvocados() {
  const [listAvocados, setListAvocados] = useState({})
  useEffect(() => {
    fetch('/api/avo')
    .then(response => response.json())
    .then(data => setListAvocados(data))
  }, [])
  if (listAvocados.data) {
    return (
      <ul className={list_avocados}>
        {listAvocados.data.map((item, index) => (
          <li className={card} key={index}>
            <Link href={`/product/${item.id}`}>
              <a className={anchor}>
                <picture className={card__picture}>
                  <img className={card__picture__img} src={item.image} alt={item.name}/>
                </picture>
                <div className={card__details}>
                  <h3 className={card__details__title}>{item.name}</h3>
                  <p className={card__details__price}>Price: ${item.price}</p>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    )
  } else {
    return <h2>Cargando...</h2>
  }
}

export default ListAvocados
