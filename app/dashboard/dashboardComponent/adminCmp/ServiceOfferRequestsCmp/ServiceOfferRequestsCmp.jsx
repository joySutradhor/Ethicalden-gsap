'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuthInfo from '../../hooks/useAuthInfo'

export default function ServiceOfferRequestsCmp () {
  const { token } = useAuthInfo()
  const [cardsData, setCardsData] = useState([])
  useEffect(() => {
    if (!token) return

    const getData = async () => {
      try {
        const response = await axios.get(
          'https://api.clientservice.mrshakil.com/api/client_service_questionaries/',
          {
            headers: {
              Authorization: `Token ${token}`
            }
          }
        )
        setCardsData(response.data)
      } catch (error) {
        console.error('Error fetching service data:', error)
      }
    }

    getData()
  }, [token])

  console.log(cardsData)

  return (
    <section className='text-white'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 '>
        {cardsData?.map((data, i) => (
          <div key={i}>
            <div className='border border-white/10  rounded-md '>
              <div className='p-5'>
                <div>
                  <h3 className='text-xl font-semibold text-[#a8ff57] '>
                    {data.full_name}
                  </h3>
                  <p className='text-sm mt-1'>Request Date {data.updated_at}</p>
                </div>
                <p className='text-2xl  font-semibold py-5 '>{data.service}</p>
              </div>
              <p className='border border-white/10 text-left text-lg pl-5 py-2.5 hover:bg-[#a8ff57] hover:text-black transition rounded-t-xl cursor-pointer '>View Details</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
