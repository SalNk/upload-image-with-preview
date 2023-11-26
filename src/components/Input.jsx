import React from 'react'

export default function Input({ type, onChange, ref, name }) {
  return (
    <input ref={ref} name={name} type={type} onChange={onChange}></input>
  )
}
