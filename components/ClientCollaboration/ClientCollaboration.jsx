import React from 'react'
import ClientsLogo from './ClientsLogo'

function ClientCollaboration() {
  return (
    <section className=' my-[30vh]'>
        <h2 className='text-center text-3xl lg:text-6xl font-bold px-[5vw] lg:px-0 max-w-5xl mx-auto mb-[10vh]'>Relationships this intimate are illegal in some countries.</h2>
        
        {/* clients logos */}
        <div>
            <ClientsLogo/>
        </div>
    </section>
  )
}

export default ClientCollaboration