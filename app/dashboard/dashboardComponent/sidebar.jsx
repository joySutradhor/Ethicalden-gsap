'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
// import { Menu, X, Home, FileText, CheckCircle , Plus  } from 'lucide-react'
import { GrMenu } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineRemoveDone } from "react-icons/md";
import { MdDoneAll } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";





import { useState } from 'react'
import Image from 'next/image'
import logo from '../assets/ethicalden.png'
const navLinks = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: <IoHomeOutline size={18} />
  },
  {
    name: 'Manage Requests',
    href: '/dashboard/manage-requests',
    icon: <MdNotificationsActive size={18} />
  },
  {
    name: 'Pending Request',
    href: '/dashboard/pending',
    icon: <MdOutlineRemoveDone size={18} />
  },
  {
    name: 'Accepted Request',
    href: '/dashboard/accepted',
    icon: <MdDoneAll size={18} />
  },
  
]

export default function Sidebar () {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = path => pathname === path

  return (
    <>
      {/* Mobile toggle */}
      <div className='md:hidden p-4 bg-red-500 shadow flex justify-between items-center'>
        <h2 className='text-lg font-semibold'>Dashboard</h2>
        <button onClick={() => setOpen(!open)}>
          {open ? <RxCross1 size={22} /> : <GrMenu size={22} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`${
          open ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:static z-40 top-0 left-0 min-h-screen  bg-[#2222]  shadow-md p-5 transition-transform duration-300 ease-in-out`}j
      > 
        <div className='flex  items-center mb-5 gap-x-2.5 border-b border-white/10 pb-5'> 
          <Image
            src={logo}
            height={500}
            width={500}
            alt='barcelona market card'
            className='size-10'
          ></Image>
          <h3 className='text-xl font-semibold text-white'>Ethical Den</h3>
        </div>

        <nav className='space-y-4'>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? ' text-black font-semibold bg-white'
                  : 'text-white/80 hover:bg-black/80 '
              }`}
              onClick={() => setOpen(false)}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  )
}
