'use client'

import { useState, useEffect } from 'react'

export function useWallet(userId) {
  const [coins, setCoins] = useState(0)
  const storageKey = userId ? `wallet_${userId}` : null

  useEffect(() => {
    if (!userId) return

    const stored = localStorage.getItem(storageKey)
    if (stored) {
      // Esto pospone el setState hasta después del render
      queueMicrotask(() => setCoins(parseInt(stored, 10)))
    }

    const handleStorage = (event) => {
      if (event.key === storageKey) {
        setCoins(parseInt(event.newValue, 10) || 0)
      }
    }

    window.addEventListener('storage', handleStorage)
    return () => window.removeEventListener('storage', handleStorage)
  }, [userId, storageKey])

  const addCoins = (amount) => {
    if (!userId) return
    const stored = parseInt(localStorage.getItem(storageKey), 10) || 0
    const newTotal = stored + amount
    localStorage.setItem(storageKey, newTotal)
    setCoins(newTotal)

    // Notificar a otros hooks en la misma pestaña
    window.dispatchEvent(
      new StorageEvent('storage', {
        key: storageKey,
        newValue: String(newTotal),
      })
    )
  }

  const spendCoins = (amount) => {
    if (!userId) return
    const stored = parseInt(localStorage.getItem(storageKey), 10) || 0
    const newTotal = Math.max(stored - amount, 0)
    localStorage.setItem(storageKey, newTotal)
    setCoins(newTotal)

    window.dispatchEvent(
      new StorageEvent('storage', {
        key: storageKey,
        newValue: String(newTotal),
      })
    )
  }

  return { coins, addCoins, spendCoins }
}
