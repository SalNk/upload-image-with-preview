import React from 'react'

export default function Buttton({ className, onClick }) {
  return (
    <button onClick={onClick} type="button" className={className}>Supprimer</button>
  )
}
