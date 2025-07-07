"use client"
import './dashboard.css'
import useAuthRedirect from './dashboardComponent/hooks/useAuthRedirect'
import SidebarMain from './dashboardComponent/Sidebar/SidebarMain'



export default function DashboardLayout ({ children }) {
  useAuthRedirect()
  return (
    <html lang='en' data-arp=''>
      <body cz-shortcut-listen='true' className='bg-[#131313]'>
        <div className='lg:grid lg:grid-cols-[20%_80%] 2xl:grid-cols-[15%_85%] justify-between  overflow-hidden'>
          <SidebarMain />
          <main >{children}</main>
        </div>
      </body>
    </html>
  )
}
