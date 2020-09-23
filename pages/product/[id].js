import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Avocado from '@components/Avocado'

const ProductItem = () => {
  // const { query : { id } } = useRouter()
  // const [avo, setAvo] = useState(null)
  // useEffect(() => {
  //   if(id) {
  //     fetch(`/api/avo/${id}`)
  //     .then(data => data.json())
  //     .then(response => setAvo(response))
  //   }
  // }, [id])

  return (
    <div>
      <Avocado />
      {/* {avo && 
        <>
          <h1>{avo.name}</h1>
          <h3>{avo.id}</h3>
          <p>{avo.attributes.description}</p>
        </>
      } */}
    </div>
  )
}

export default ProductItem
