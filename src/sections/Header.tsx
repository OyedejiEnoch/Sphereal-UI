"use client"

import LogoImage from '@/assets/images/sphereal-logo.svg?url'
import Button from '@/components/Button';
import Orbit from '@/components/Orbit';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

export const navItems = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Testimonials",
    href: "#testimonials",
  },
];

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "#",
  },
  {
    buttonVariant: "primary",
    name: "Sign Up",
    href: "#",
  },
];

export const Header = () => {

  const [isMobileNavOpen, setIsMobileNavOpen]=useState(false)


  return (
  <>
  <header className="border-b border-gray-200/20 relative z-40 ">
    <div className="container">
      <div className="w-full flex items-center justify-between h-18 lg:h-20">
        {/* left */}
        <div className="flex items-center gap-4">
          <div className="size-10 bg-gray-200 bg-[conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))] "
          style={{maskImage:`url(${LogoImage.src})`,
          maskSize:`contain`}}></div>
          <span className="font-extrabold text-2xl">Sphereal.ai</span>
        </div>


        <div className='h-full hidden lg:block'>
            <nav className='h-full'>
              {navItems.map(({name, href})=>(
                <a key={href} href={href} 
                onClick={(e)=>{
                  e.preventDefault()
                  const element =document.querySelector(href)
                  if(element){
                    element.scrollIntoView({behavior:'smooth'})
                  }
                }}
                className="h-full px-10 relative font-bold text-xs tracking-widest text-gray-400 uppercase 
                inline-flex items-center before:content-[''] before:absolute before:bottom-0 before:h-2 before:w-px before:bg-gray-200/20 before:left-0
                last:after:content-[''] last:after:absolute last:after:bottom-0 last:after:h-2 last:after:w-px last:after:bg-gray-200/20 last:after:right-0 last:after:block ">{name}</a>
              ))}
            </nav>
        </div>


        <div className='hidden lg:flex gap-4'>
          {loginItems.map((item)=>(
            <a key={item.name} href={item.href}>
            <Button variant={(item.buttonVariant as 'primary' | 'secondary' | 'tertiary')}>{item.name}</Button>
            </a>
          ))}
        </div>



        <div className='flex lg:hidden items-center'>
          <button onClick={()=>setIsMobileNavOpen((curr)=> !curr)} className='size-10 border-2 rounded-lg relative border-transparent
          [background:linear-gradient(var(--color-gray-950),var(--color-gray-950))_content-box,conic-gradient(from_45deg,var(--color-violet-400),var(--color-fuchsia-400),var(--color-amber-300),var(--color-teal-300),var(--color-violet-400))_border-box]'>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div className={twMerge('w-4 h-0.5 bg-gray-100 -translate-y-1 transition duration-300', isMobileNavOpen && 'translate-y-0 rotate-45')}></div>
            </div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div className={twMerge('w-4 h-0.5 bg-gray-200 translate-y-1 transition duration-300', isMobileNavOpen && 'translate-y-0 -rotate-45')}></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  </header>

  {isMobileNavOpen && (
    <div className='fixed top-0 left-0 bottom-0 right-0 bg-gray-950 z-30  overflow-hidden'>
      {/* orbits */}
      <div className='absolute-center isolate -z-10 '>
        <Orbit />
      </div>
      <div className='absolute-center isolate -z-10 '>
        <Orbit className='size-[350px]' />
      </div>
      <div className='absolute-center isolate -z-10 '>
        <Orbit className='size-[500px]' />
      </div>
      <div className='absolute-center isolate -z-10 '>
        <Orbit className='size-[650px]' />
      </div>
      <div className='absolute-center hidden sm:flex isolate -z-10 '>
        <Orbit className='size-[800px]' />
      </div>



      <div className='container h-full'>
        <nav className='flex flex-col gap-4 items-center py-8 h-full justify-center'>
              {navItems.map(({name, href})=>(
                <a key={href} href={href}
                onClick={(e)=>{
                  e.preventDefault()
                  const element =document.querySelector(href)
                  if(element){
                    setIsMobileNavOpen(false)
                    element.scrollIntoView({behavior:'smooth'})
                  }
                }}
                className="text-gray-400 uppercase tracking-widest font-bold text-xs h-10">{name}</a>
              ))}

          {loginItems.map((item)=>(
            <a key={item.name} href={item.href}
            
            className=' max-w-xs'>
            <Button variant={(item.buttonVariant as 'primary' | 'secondary' | 'tertiary')}>{item.name}</Button>
            </a>
          ))}
        </nav>
      </div>
    </div>
  )}
  </>
  )
};

export default Header;
