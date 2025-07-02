import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import SEOOptimization from '../../dashboardComponent/clientCmp/seoOptimization/SEOOptimization'

export default function page () {
  return (
    <div className='section_space'>
      {' '}
      <Topbar
        title='SEO Optimization'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      <SEOOptimization />
    </div>
  )
}
