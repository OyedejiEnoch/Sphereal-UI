'use client'
import robotImg from '@/assets/images/robot.jpg'
import underlineImage from '@/assets/images/underline.svg?url'
import Loader from "@/assets/images/loader-animated.svg"
import Button from '@/components/Button';
import Image from 'next/image';
import Orbit from '@/components/Orbit';
import Planet from '@/components/Planet';
import SectionBorder from '@/components/SectionBorder';
import SectionContent from '@/components/SectionContent';
import {motion, useMotionValue, useScroll, useSpring, useTransform} from 'framer-motion'
import { useEffect, useRef, useState } from 'react';


export const useMousePosition =()=>{
  const [innerWidth, setInnerWidth] =useState(1);
  const [innerHeight, setInnerHeight]=useState(1);

  const clientX =useMotionValue(0);
  const clientY =useMotionValue(0);

  // useMotionValueEvent(clientX, 'change', (latest)=>{
  //   console.log('client', latest)
  // })
  const xProgress =useTransform(clientX, [0, innerWidth], [0, 1]);
  const yProgress =useTransform(clientY, [0, innerHeight], [0, 1]);

  useEffect(()=>{
    setInnerWidth(window.innerWidth)
    setInnerHeight(window.innerHeight)

    // what if a user resizes the screen we are setting to the new innerWidth & height
    window.addEventListener('resize', ()=>{
      setInnerWidth(window.innerWidth)
      setInnerHeight(window.innerHeight)
    })
  },[])

  useEffect(()=>{
    window.addEventListener('mousemove', (e)=>{
      clientX.set(e.clientX)
      clientY.set(e.clientY)
    })
  },[clientX,clientY])

  return {xProgress, yProgress}
}

export const Hero = () => {

  const {xProgress, yProgress}=useMousePosition()
  
  const sectionRef =useRef(null)
  const {scrollYProgress}=useScroll({
    target:sectionRef,
    offset:['end start', 'start end']
  })

  const transformedY = useTransform(scrollYProgress, [0,1], [200,-200])

  const springX=useSpring(xProgress)
  const springY=useSpring(yProgress)

  const translateLargeX =useTransform(xProgress, [0, 1], ['-25%', '25%'])
  const translateLargeY =useTransform(yProgress, [0, 1], ['-25%', '25%'])
  const translateMediumX =useTransform(springX, [0, 1], ['-50%', '50%'])
  const translateMediumY =useTransform(springY, [0, 1], ['-50%', '50%'])
  const translateSmallX =useTransform(springX, [0, 1], ['-200%', '200%'])
  const translateSmallY =useTransform(springY, [0, 1], ['-200%', '200%'])



  return <section ref={sectionRef}>
    <div className="container">
      <SectionBorder>
        <SectionContent className='isolate overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]'>
          <div className='absolute -z-10 inset-0 bg-[radial-gradient(circle_farthest-corner,var(--color-fuchsia-900)_50%,var(--color-indigo-900)_70%,transparent)] 
          [mask-image:radial-gradient(circle_farthest-side,black,transparent)]' />
            
          <div className='absolute inset-0 -z-10 overflow-hidden'>
            <div className='absolute-center'>
            <Orbit className='size-[350px]' />
            </div>
            <div className='absolute-center'>
            <Orbit className='size-[600px]' />
            </div>
            <div className='absolute-center'>
            <Orbit className='size-[850px]' />
            </div>
            <div className='absolute-center'>
            <Orbit className='size-[1100px]' />
            </div>
            <div className='absolute-center'>
            <Orbit className='size-[1350px]' />
            </div>
          </div>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-100 text-center leading-tight'>Unlock the Future of AI Conversations with 
          <span className='relative'> 
              <span> Sphereal</span>
              <span className='absolute w-full left-0 top-full -translate-y-1/2 h-4 
              bg-[linear-gradient(to_right,var(--color-amber-300),var(--color-teal-300),var(--color-violet-400),var(--color-fuchsia-400))]'
              style={{maskImage:`url(${underlineImage.src})`,
              maskSize:'contain',
              maskPosition:'center',
                maskRepeat:'no-repeat'}}></span>
             </span>
          </h1>
          <p className='text-center text-lg md:text-xl mt-8'>Harness the power of AI with  
          Sphereal. Elevate your productivity and streamline your workflow with our cutting edge AI chat platform</p>
          
          <div className='flex justify-center mt-10'>
          <Button variant='secondary'>Start Chatting</Button>
          </div>

        <div className='relative isolate max-w-5xl mx-auto '>
          <div className='absolute left-1/2 top-0'>
            <motion.div style={{
              x:translateLargeX,
              y:translateLargeY
            }}>
              <Planet size='lg' color='violet' className='-translate-x-[315px] -translate-y-[76px] rotate-135' />
            </motion.div>

            <motion.div style={{
              x:translateLargeX,
              y:translateLargeY
            }}>  
              <Planet size='lg' color='violet' className='-translate-y-[188px] translate-x-[320px] rotate-135' />
            </motion.div>


            <motion.div style={{
              x:translateSmallX,
              y:translateSmallY
            }}>
              <Planet size='sm' color='fuchsia' className='-translate-y-[370px] -translate-x-[500px] rotate-135' />
            </motion.div>

              <motion.div style={{
                x:translateMediumX,
                y:translateMediumY
              }}>
              <Planet size='md' color='teal' className='-translate-y-[370px] translate-x-[490px] rotate-135' />
              </motion.div>
          </div>

          <div className='absolute top-[30%] -left-0 z-10 -translate-x-10 hidden lg:block'>
            <motion.div className='bg-gray-800/70 backdrop:blur-md border-gray-700 p-4 rounded-xl w-[320px] max-w-full'
            style={{y:transformedY}}>
              <div>Can you generate an incredible frontend dev video tutorial?</div>
              <div className='text-right text-sm text-gray-400 font-semibold'>1m ago</div>
            </motion.div>
          </div>

          <div className='absolute top-[50%] -right-0 z-10 sm:flex translate-x-10 hidden lg:block'>
            <motion.div className='bg-gray-800/70 backdrop:blur-md border-gray-700 p-4 rounded-xl w-[320px] max-w-full'
            style={{y:transformedY}}>
              <div><strong>Brainwave:</strong> I created one based on videos from Frontend Tribe</div>
              <div className='text-right text-sm text-gray-400 font-semibold'>Just now</div>
            </motion.div>
          </div>

          <div className='mt-20 rounded-2xl border-2 overflow-hidden border-gradient relative'>
         
            <Image src={robotImg} alt='robot image' />

            <div className='absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 w-full px-4 lg:bottom-10 max-w-xs '>
              <div className='bg-gray-950/80 flex items-center gap-4 px-4 py-2 rounded-2xl w-[320px] max-w-full'>
                <Loader clasName='text-violet-400' />
                <div className='font-semibold text-xl text-gray-100'>AI is generating <span className=' animate-cursor-blink'>|</span></div>
              </div>
            </div>

          </div>

        </div>

        </SectionContent>
      </SectionBorder>

    </div>
  </section>;
};

export default Hero;
