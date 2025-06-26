import React from 'react'

export default function Topbar ({ title , des}) {
  return (
    <div className='mb-8 border-b border-white/10 shadow-white pb-5  '>
      <h1 className='text-xl md:text-3xl font-bold text-white/80'>{title}</h1>
      <p className='text-white mt-2 w-full lg:max-w-[25vw] '>{des}</p>
    </div>
  )
}
