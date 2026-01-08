'use client'

import { useState, useEffect } from 'react'
import ClickerButton from './components/ClickerButton'
import ShopButton from './components/ShopButton'
import Wallet from './components/Wallet'
import { useWallet } from './hooks/useWallet'
import Pokedex from './components/Pokedex'
import { PokedexIcon } from './components/svg/Pokedex'
import { Quest } from './components/svg/Quest'
import QuestList from './components/QuestList'

export default function Home() {
  const [userId, setUserId] = useState(null)
  const [showPokedex, setShowPokedex] = useState(false)
  const [showQuest, setShowQuest] = useState(false)

  // Solo para generar userId en cliente
  useEffect(() => {
    let id = localStorage.getItem('user_id')
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem('user_id', id)
    }
    // Usar setTimeout para evitar cascada de renders
    setTimeout(() => setUserId(id), 0)
  }, [])

  const { coins, addCoins } = useWallet(userId)

  // Renderizamos solo cuando userId ya existe
  if (!userId) return null

  return (
    <main className='relative min-h-screen overflow-hidden'>
      {/* Fondo */}
      <div className='absolute inset-0 -z-10 bg-diagonal' />

      {/* CONTENEDOR CENTRADO */}
      <div className='flex flex-col items-center justify-center min-h-screen'>
        <Wallet userId={userId} />
        <ClickerButton addCoins={addCoins} coinsPerClick={1} />

        <div className='fixed left-6 top-6'>
          <button
            className='bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg text-xl hover:scale-105 transition hover:cursor-pointer'
            onClick={() => setShowPokedex((prev) => !prev)}
          >
            <PokedexIcon />
          </button>
        </div>

        <div className='fixed right-6 bottom-6'>
          <button
            className='bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg text-xl hover:scale-105 transition hover:cursor-pointer'
            onClick={() => setShowQuest((prev) => !prev)}
          >
            <Quest />
          </button>
        </div>

        {showPokedex && <Pokedex onClose={() => setShowPokedex(false)} />}
        {showQuest && (
          <QuestList onClose={() => setShowQuest(false)} userId={userId} />
        )}

        <ShopButton />
      </div>
    </main>
  )
}
