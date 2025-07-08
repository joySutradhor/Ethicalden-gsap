import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import AiServiceCmp from '../../dashboardComponent/clientCmp/aiServiceCmp/AiServiceCmp'

export default function page () {
  return (
    <div className='section_space max-h-screen overflow-hidden overflow-y-auto'>
      <Topbar
        title='AI Service'
        des='Manage and optimize AI service requests efficiently. Stay proactive in updating models, responding to feedback, and ensuring seamless AI-driven solutions.'
      />
      {/* ai serviecs */}
      <AiServiceCmp />
    </div>
  )
}
