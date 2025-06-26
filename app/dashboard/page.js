import Topbar from './dashboardComponent/topbar'

export default function DashboardHome () {
  return (
    <div className='section_space'>
      <div className=''>
        {/* Header Section */}
        <Topbar
          title='Dashboard Overview'
          des='Easily create, edit, and manage your market card offers in real-time.'
        />

        {/* check market card */}
        <div className='py-10'></div>
      </div>
    </div>
  )
}
