'use client'

import { useState, useEffect } from 'react'

export default function Wallet({ userId }) {
  const storageKey = userId ? `wallet_${userId}` : null
  const [coins, setCoins] = useState(() => {
    if (!storageKey) return 0
    const stored = localStorage.getItem(storageKey)
    return stored ? parseInt(stored, 10) : 0
  })

  useEffect(() => {
    if (!storageKey) return

    const handleStorage = (event) => {
      if (event.key === storageKey) {
        setCoins(parseInt(event.newValue, 10) || 0)
      }
    }

    // Escucha cambios en otras pestañas
    window.addEventListener('storage', handleStorage)

    // Intervalo para actualizar si alguien más cambia localStorage en la misma pestaña
    const interval = setInterval(() => {
      const stored = localStorage.getItem(storageKey)
      const value = stored ? parseInt(stored, 10) : 0
      setCoins((prev) => (prev !== value ? value : prev))
    }, 500) // cada 500ms

    return () => {
      window.removeEventListener('storage', handleStorage)
      clearInterval(interval)
    }
  }, [storageKey])

  return (
    <div className='fixed top-6 right-6 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg text-xl hover:scale-105'>
      💰 {coins} Coins
    </div>
  )
}
