import React from 'react'
import BrandingCmp from '../../dashboardComponent/clientCmp/brandingCmp/BrandingCmp'
import Topbar from '../../dashboardComponent/topbar'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Branding Service'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <BrandingCmp />
    </div>
  )
}
