'use client'

import Wallet from '@/app/components/Wallet'
import packs from '@/utils/packs.json'
import { useWallet } from '@/app/hooks/useWallet'
import { useState, useEffect } from 'react'
import PokeballModal from '@/app/components/Pokemon'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Shop({ onClose }) {
  // <--- desestructurado correctamente
  const [userId, setUserId] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [cartasPorSobre, setCartasPorSobre] = useState(1) // cantidad de cartas que abre el modal

  // Solo para generar userId en cliente
  useEffect(() => {
    let id = localStorage.getItem('user_id')
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem('user_id', id)
    }
    setTimeout(() => setUserId(id), 0)
  }, [])

  const { coins, addCoins, spendCoins } = useWallet(userId)

  // Función que abre el sobre si hay monedas suficientes
  const handleOpenPack = (sobre) => {
    if (coins >= sobre.precio) {
      spendCoins(sobre.precio)
      setCartasPorSobre(sobre.cantidad)
      setModalOpen(true)
    } else {
      toast.error('No tienes suficientes monedas para comprar este sobre.')
    }
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  if (!userId) return null

  return (
    <>
      {/* Toast */}
      <ToastContainer theme='colored' position='top-center' />

      {/* Modal de la Shop */}
      <div
        className='fixed inset-0 z-50 bg-black/70 flex justify-center items-center p-4'
        onClick={onClose} // Clic fuera del contenido cierra el modal
      >
        <div
          className='relative w-full max-w-6xl bg-purple-300 rounded-2xl p-6 overflow-hidden shadow-xl'
          onClick={(e) => e.stopPropagation()} // evita cierre al clicar dentro
        >
          {/* Botón de cerrar modal */}
          <button
            onClick={onClose} // <-- ahora sí funciona
            className='absolute top-4 right-4 text-3xl font-bold text-black hover:text-red-700 cursor-pointer'
          >
            ✕
          </button>

          <h2 className='text-3xl font-bold mb-6 text-center text-black'>
            Tienda de Sobres
          </h2>

          <Wallet coins={coins} />

          {/* Scroll horizontal para sobres */}
          <div className='flex gap-6 overflow-x-auto py-4 px-2 justify-center'>
            {packs.map((sobre) => (
              <button
                key={sobre.id}
                onClick={() => handleOpenPack(sobre)}
                className='flex-shrink-0 w-64 h-64 p-6 bg-yellow-400 rounded-3xl shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform hover:cursor-pointer'
              >
                <h3 className='font-bold text-xl text-black mb-2 text-center'>
                  {sobre.nombre}
                </h3>
                <p className='text-lg text-black'>{sobre.precio} 💰</p>
                <p className='text-lg text-black'>{sobre.cantidad}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de cartas abiertas */}
      {modalOpen && (
        <PokeballModal
          cantidadPokemon={cartasPorSobre}
          closePack={handleCloseModal}
        />
      )}
    </>
  )
}
