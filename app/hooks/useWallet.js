'use client'

import { useState, useEffect } from 'react'

export function useWallet(userId) {
  const [coins, setCoins] = useState(0)

  useEffect(() => {
    if (!userId) return
    const storageKey = `wallet_${userId}`

    // Cargar monedas desde localStorage de manera asíncrona
    const loadCoins = () => {
      const stored = localStorage.getItem(storageKey)
      if (stored) {
        queueMicrotask(() => setCoins(parseInt(stored, 10)))
      }
    }

    loadCoins()
  }, [userId])

  const addCoins = (amount) => {
    if (!userId) return
    const storageKey = `wallet_${userId}`
    setCoins((prev) => {
      const newTotal = prev + amount
      localStorage.setItem(storageKey, newTotal)
      return newTotal
    })
  }

  const spendCoins = (amount) => {
    if (!userId) return
    const storageKey = `wallet_${userId}`
    setCoins((prev) => {
      const newTotal = Math.max(prev - amount, 0)
      localStorage.setItem(storageKey, newTotal)
      return newTotal
    })
  }

  return { coins, addCoins, spendCoins }
}
