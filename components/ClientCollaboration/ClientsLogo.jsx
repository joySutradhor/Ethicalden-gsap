'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'
function ClientsLogo () {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get('/data/ClientsLogo.json')
      .then(response => {
        setItems(response.data)
        console.log('check data', response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })
  }, [])

  return (
    <div className=' px-[5vw] lg:px-[15vw]'>
      <div className='grid grid-cols-3 lg:grid-cols-6  gap-4'>
        {items.map(item => (
          <div
            key={item.id}
            className=' flex items-center rounded bg-white text-center'
          >
            <Image
              width={500}
              height={500}
              src={item.src}
              alt={`Item ${item.id}`}
              className='w-[80%] h-auto mb-2 '
            />
            {item.line === 'yes' && (
              <div className='h-[70px] w-[1px] bg-black/20 text-green-400 rotate-12 ml-5'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientsLogo
