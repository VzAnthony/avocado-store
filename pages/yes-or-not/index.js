import React, { useState, useRef } from 'react'
import Link from 'next/link'
import { container, container__yes_no, container__button, container__anchor, change_color_green, change_color_red } from './YesOrNot.module.css'

const YesOrNot = () => {
  const [yesOrNot, setYesOrNot] = useState('YES');
  const myRef = useRef()

  const toggle = () => {
    myRef.current.classList.remove(change_color_green, change_color_red)
    let numb = Math.floor(Math.random() * (0 + 2))
    if(numb) {
      myRef.current.classList.toggle(change_color_green)
      setYesOrNot('YES')
    } else {
      myRef.current.classList.toggle(change_color_red)
      setYesOrNot('NO')

    }
  }

  return (
    <div className={container}>
      <p ref={myRef} className={`${container__yes_no} ${change_color_green}`}>{yesOrNot}</p>
      <button className={container__button} onClick={toggle}>Try Again</button>
      <Link href="/">
        <a className={container__anchor}>Back to Home</a>
      </Link>
    </div>
  )
}

export default YesOrNot
