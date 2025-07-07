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

  return (
    <section className='text-white '>
      {/* Desktop Table */}
      <div className='hidden md:block'>
        <table className='w-full divide-y divide-white/10 border border-white/10'>
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
                Status
              </th>
              <th className='px-6 py-3 text-left text-sm font-semibold text-[#a8ff57]'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-white/10'>
            {cardsData?.map((data, i) => (
              <tr key={i} className='hover:bg-white/5 transition'>
                <td className='px-6 py-4 text-sm'>{data.updated_at}</td>
                <td className='px-6 py-4 text-sm'>{data.full_name}</td>
                <td className='px-6 py-4 text-sm'>{data.service}</td>
                <td className='px-6 py-4 text-sm'>{data.service_status}</td>
                <td className='px-6 py-4 text-sm'>
                  <Link
                    href={`/dashboard/admin/service-offer-requests/${data.id}`}
                  >
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

      {/* Mobile Cards */}
      <div className='md:hidden space-y-4 mt-4'>
        {cardsData?.map((data, i) => (
          <div
            key={i}
            className='bg-white/5 border border-white/10 rounded-lg p-5 space-y-2'
          >
            <div className='flex justify-between'>
              <div>
                <span className='text-[#a8ff57] font-medium'>Full Name:</span>
                <p className='text-sm'>{data.full_name}</p>
              </div>
              <div>
                <span className='text-[#a8ff57] font-medium'>
                  Request Date:
                </span>
                <p className='text-sm'>{data.updated_at}</p>
              </div>
            </div>

            <div className='flex justify-between items-center  gap-x-1.5'>
              <div>
                <p className='text-sm text-[#a8ff57]'>{data.service}</p>
              </div>
              <div>
                <div>
                  <Link
                    href={`/dashboard/admin/service-offer-requests/${data.id}`}
                  >
                    <button className='mt-2 border border-white/10 text-white px-4 py-1.5 rounded-md text-sm hover:bg-[#a8ff57] hover:text-black transition'>
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
