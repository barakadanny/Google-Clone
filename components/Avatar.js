import Image from 'next/image'
import React from 'react'

function Avatar({url, className}) {
  return (
    <Image
        loading='lazy'
        className={`rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
        width={40}
        height={10}
        src={url}
        alt='avatar'
    />
  )
}

export default Avatar
