import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import AiServiceCmp from '../../dashboardComponent/clientCmp/aiServiceCmp/AiServiceCmp'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='AI Service'
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />
      {/* ai serviecs */}
      <AiServiceCmp />
    </div>
  )
}
