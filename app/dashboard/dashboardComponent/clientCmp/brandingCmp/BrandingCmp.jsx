import React from 'react'
import Topbar from '../../topbar'

export default function BrandingCmp () {
  return (
    <div className='section_space'>
      <Topbar
        title='Branding Service'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />

      {/* branding services */}
      <div className='text-white'>
         <h2>Branding Services</h2>
      </div>
    </div>
  )
}

