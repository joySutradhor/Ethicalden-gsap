'use client'
import axios from 'axios'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function ServiceDetailsCmp () {
  const [data, setData] = useState(null)
  const params = useParams()
  const id = params?.id

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          `https://api.clientservice.mrshakil.com/api/client_service_questionaries/${id}/`
        )
        setData(res.data)
      } catch (error) {
        console.error('Error fetching service details:', error)
      }
    }

    if (id) getData()
  }, [id])

  if (!data) return <p className='text-white'>Loading...</p>

  const {
    full_name,
    email,
    service,
    service_id,
    service_status,
    updated_at,
    created_at,
    question_set,
    client_project_assets
  } = data

  console.log(data)

  return (
    <div className='text-white '>
      <h1 className='text-3xl font-bold mb-6 text-[#a8ff57]'>
        Service Details
      </h1>

      <div className=''>
        <div>
          {/* Basic Info */}
          <div className=' bg-white/5 p-6 rounded-lg border border-white/10'>
            <div className='flex justify-between '>
              <div>
                <h3 className='text-2xl font-semibold text-white/80'>
                  {' '}
                  {full_name}
                </h3>
                <p className='text-sm text-white/80 mt-1'>{email}</p>
                <div className='py-5'>
                  <p className='font-medium'>Requested On: {updated_at}</p>
                </div>
              </div>
              <div className='flex flex-col gap-5'>
                <button className='border border-white/10 py-1.5 px-8 rounded-full'>
                  {service}
                </button>
                <button className='border text-black border-white/10 py-1.5 px-8 rounded-full bg-amber-200'>
                  {service_status}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-[70%_30%] gap-x-10 '>
          <div>
            {/* Question Set */}
            <h2 className='text-2xl font-semibold mt-10 mb-4 text-[#a8ff57]'>
              Client Questionnaire
            </h2>
            <div className='grid md:grid-cols-2 gap-5 bg-white/5 p-6 rounded-lg border border-white/10'>
              {Object.entries(question_set).map(([key, value]) => (
                <div key={key}>
                  <strong className='capitalize'>
                    {key.replace(/([A-Z])/g, ' $1')}
                  </strong>
                  :
                  {Array.isArray(value) ? (
                    <ul className='list-disc list-inside ml-2 text-sm text-gray-300'>
                      {value.map((v, i) => (
                        <li key={i}>{v}</li>
                      ))}
                    </ul>
                  ) : (
                    <span className='block text-sm text-gray-300'>
                      {value || 'N/A'}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className='mr-10'>
            {/* Assets */}
            {client_project_assets?.length > 0 && (
              <>
                <h2 className='text-2xl font-semibold mt-10 mb-4 text-[#a8ff57]'>
                  Uploaded Assets
                </h2>
                <div className='grid gap-4'>
                  {client_project_assets.map(asset => (
                    <div
                      key={asset.id}
                      className='bg-white/5 p-3 rounded border border-white/10'
                    >
                      <a href={asset.project_assets} target='_blank'>
                        <p className='text-sm mt-2'>
                          {asset.filename}.{asset.file_type}
                        </p>
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
