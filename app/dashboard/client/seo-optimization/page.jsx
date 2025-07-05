import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import SEOOptimization from '../../dashboardComponent/clientCmp/seoOptimization/SEOOptimization'

export default function page () {
  return (
    <div className='section_space'>
      {' '}
      <Topbar
        title='SEO Optimization'
        des='Monitor and manage SEO tasks to improve search rankings. Analyze requests, apply optimization strategies, and ensure consistent digital growth.'
      />
      <SEOOptimization />
    </div>
  )
}
