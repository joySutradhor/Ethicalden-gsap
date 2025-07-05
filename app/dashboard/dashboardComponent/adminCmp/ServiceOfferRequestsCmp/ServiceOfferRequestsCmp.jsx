'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useAuthInfo from '../../hooks/useAuthInfo'
import Link from 'next/link'

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
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y divide-white/10 border border-white/10'>
          <thead className='bg-white/5'>
            <tr>
              <th className='px-6 py-3 text-left text-sm font-semibold text-[#a8ff57]'>
                Request Date
              </th>

              <th className='px-6 py-3 text-left text-sm font-semibold text-[#a8ff57]'>
                Full Name
              </th>

              <th className='px-6 py-3 text-left text-sm font-semibold text-[#a8ff57]'>
                Service
              </th>
              <th className='px-6 py-3 text-left text-sm font-semibold text-[#a8ff57]'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-white/10'>
            {cardsData?.map((data, i) => (
              <tr key={i} className='hover:bg-white/5 transition'>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>
                  {data.updated_at}
                </td>

                <td className='px-6 py-4 whitespace-nowrap text-sm'>
                  {data.full_name}
                </td>

                <td className='px-6 py-4 whitespace-nowrap text-sm'>
                  {data.service}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm'>
                  <Link href={`/dashboard/admin/service-offer-requests/${data.id}`}>
                    <button className='border border-white/10 text-white px-4 py-1.5 rounded-md hover:bg-[#a8ff57] hover:text-black transition cursor-pointer'>
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
