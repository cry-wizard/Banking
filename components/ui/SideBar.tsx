import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SideBar = ({user}:SiderbarProps) => {
  return (
    <section className='sidebar'>
    <nav className='flex flex-col gap-4'>
        <Link href='/' className='mb-12 cursor-pointer items-center gap-2'>
        <Image 
        src="/icons/logo.svg"
        alt='logo Image'
        width={34}
        height={34}
        className='size-[24px] max-xl:size-14'
        />
        <h1 className='siderbar-logo'>Horizon</h1>
        </Link>
        {sidebarLinks.map((item)=>{
            return(
                <Link href={item.route} key={item.label} className={cn(sidebarLinks)}>{item.label}</Link>
            )
        })}
    </nav>    
    r</section>
  )
}

export default SideBar