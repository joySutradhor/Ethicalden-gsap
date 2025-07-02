import React from 'react'
import Topbar from '../../dashboardComponent/topbar'
import PhotoAndVideoEditng from '../../dashboardComponent/clientCmp/PhotoAndVideoEditng/PhotoAndVideoEditng'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Photo And Video Editing '
        des='Review, update, or respond to incoming service requests. Ensure timely communication and keep your workflow organized.'
      />

      {/* photo and video editing format */}
      <PhotoAndVideoEditng />
    </div>
  )
}
