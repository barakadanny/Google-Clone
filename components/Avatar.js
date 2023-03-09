import React from 'react'

function Avatar({url, className}) {
  return (
    <img
        loading='lazy'
        className={`rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
        src={url}
        alt='avatar'
    />
  )
}

export default Avatar
