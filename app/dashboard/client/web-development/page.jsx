import WebsiteDevelopmentCmp from '../../dashboardComponent/clientCmp/websiteDevelopmentCmp/WebsiteDevelopmentCmp'
import Topbar from '../../dashboardComponent/topbar'

export default function page () {
  return (
    <div className='section_space'>
      <Topbar
        title='Website Development'
        des='Manage website development projects from planning to launch. Track progress, address client feedback, and ensure timely delivery of responsive, high-quality websites.'
      />

      <WebsiteDevelopmentCmp />
    </div>
  )
}
