'use client'

import { useState } from 'react'
import PokeballModal from './Pokemon' // tu modal existente

export default function ShopButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => (window.location.href = '/Shop')}
        className='fixed bottom-0 right-0 m-10 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg text-xl hover:scale-105 hover:cursor-pointer'
      >
        Abrir Tienda
      </button>

      {/* Renderizamos el modal solo si open === true */}
      {open && <PokeballModal onClose={() => setOpen(false)} />}
    </>
  )
}
