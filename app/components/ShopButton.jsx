'use client'

import { useState } from 'react'
import Shop from './Shop' // tu componente Shop completo como modal
import { ShopIcon } from './svg/Shop'

export default function ShopButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Botón flotante para abrir la tienda */}
      <button
        onClick={() => setOpen(true)}
        className='fixed bottom-6 left-6 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg text-xl hover:scale-105 hover:cursor-pointer transition-transform'
      >
        <ShopIcon />
      </button>

      {/* Modal de la tienda */}
      {open && <Shop onClose={() => setOpen(false)} />}
    </>
  )
}
