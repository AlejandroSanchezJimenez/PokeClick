'use client'

import Wallet from '@/app/components/Wallet'
import packs from '@/utils/packs.json'
import { useWallet } from '@/app/hooks/useWallet'
import { useState, useEffect } from 'react'
import PokeballModal from '@/app/components/Pokemon'
import { toast, ToastContainer } from 'react-toastify'

export default function Shop() {
  const [userId, setUserId] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [cartasPorSobre, setCartasPorSobre] = useState(1) // cantidad de cartas que abre el modal

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
      spendCoins(sobre.precio) // gastamos las monedas
      setCartasPorSobre(sobre.cantidad) // cantidad de cartas que dará el modal
      setModalOpen(true)
    } else {
      toast.error('No tienes suficientes monedas para comprar este sobre.')
    }
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center p-4'>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
        <ToastContainer theme='colored' />
      </div>
      <div
        className='relative w-full max-w-6xl bg-purple-300 rounded-2xl p-6 overflow-hidden'
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className='text-3xl font-bold mb-6 text-center text-black dark:text-white'>
          Tienda de Sobres
        </h2>

        <Wallet coins={coins} />

        <button
          className='fixed top-6 left-6 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg text-xl hover:cursor-pointer hover:bg-yellow-500 active:bg-yellow-600 transition-colors'
          onClick={() => (window.location.href = '/')}
        >
          ←
        </button>

        {/* Scroll horizontal para sobres */}
        <div className='flex gap-6 overflow-x-auto py-4 px-2 justify-center'>
          {packs.map((sobre) => (
            <button
              key={sobre.id}
              onClick={() => handleOpenPack(sobre)}
              className='flex-shrink-0 w-64 h-64 p-6 bg-yellow-400 dark:bg-yellow-600 rounded-3xl shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform hover:cursor-pointer'
            >
              <h3 className='font-bold text-xl text-black dark:text-white mb-2 text-center'>
                {sobre.nombre}
              </h3>
              <p className='text-lg text-black dark:text-white'>
                {sobre.precio} 💰
              </p>
              <p className='text-lg text-black dark:text-white'>
                {sobre.cantidad}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Modal global */}
      {modalOpen && (
        <PokeballModal
          cantidadPokemon={cartasPorSobre}
          closePack={handleCloseModal}
        />
      )}
    </div>
  )
}
