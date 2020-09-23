import React from 'react'
import { section, section__title, section__image, section__source, section__list, section__list__item } from './About.module.css'

const avoFacts = [
  {
    title: 'Most avocados come from Mexico',
    content:
      'While avocados are grown in California and Florida, the majority sold in grocery stores come from south central Mexico. The main reason for the abundance of “south of the border” avocados is that Mexico is blessed with a year-round growing climate. The avocado is believed to have originated in the state of Puebla, Mexico, as far back as 10,000 B.C.',
  },
  {
    title: 'The conquistadors were huge fans.',
    content:
      'Spanish explorers arriving in Mexico during the 16th century survived on avocados and were the first Europeans to consume them. As a result of the Spanish Conquest, avocados spread to South America and Central America. ',
  },
  {
    title: '“Avocado” wasn’t its original name.',
    content:
      'Irishman Sir Hans Sloane called it an avocado in 1696 in a Jamaican-plants catalog. He also dubbed the avocado tree the “alligator pear tree.”',
  },
  {
    title: 'It’s actually a fruit.',
    content:
      'Did you know that an avocado is a fruit? While definitely not sweet, it falls firmly in the fruit-not the vegetable-family. That’s because the avocado tree is part of the flowering-plant family Lauraceae.',
  },
  {
    title: 'There’s a secret trick to ripening them up quick',
    content:
      'Need to ripen that avocado ASAP? Place it in a brown paper bag with a banana or two. The bananas will release ethylene gas, a natural plant hormone that aids in ripening fruit. On the other hand, check out this guide to learn how to store them for later.',
  },
]


function About() {
  console.log(avoFacts)
  return (
    <section className={section}>
      <h1 className={section__title}>13 Surprising Facts About Avocados</h1>
      <picture>
        <img className={section__image} src="/images/avocados.jpg" alt=""/>
      </picture>
      <p className={section__source}>Originally from <a target="_blank" href="https://www.tasteofhome.com/article/13-surprising-facts-about-avocados/">Taste of Home</a></p>
      <ol className={section__list}>
        {
          avoFacts.map(({title, content}) => (
            <li className={section__list__item} key={title}>
              <h3>{title}</h3>
              <p>{content}</p>
            </li>
          ))
        }
      </ol>
    </section>
  )
}

export default About
