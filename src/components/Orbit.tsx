import React, { HTMLAttributes } from 'react'
import {twMerge} from "tailwind-merge"

const Orbit = (props:HTMLAttributes<HTMLElement>) => {
  return (
  
    <div className={twMerge('size-[200px] border border-gray-200/30 rounded-full', props.className)}></div>
  )
}

export default Orbit
