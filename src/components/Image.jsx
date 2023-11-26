import React from 'react'

export default function Image({src, className, value}) {
  return (
    <img value={value} src={src} className={className}/>
  )
}
