import React, { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'


const SectionContent = (props:HTMLAttributes<HTMLDivElement>) => {
    const {className, ...otherProps}=props
  return (
    <div className={twMerge('container md:py-30 py-24 lg:py-48 overflow-hidden', className )} {...otherProps}/>
    
  )
}

export default SectionContent
