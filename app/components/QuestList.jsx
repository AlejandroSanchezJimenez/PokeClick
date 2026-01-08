'use client'

import React, { useState, useEffect, useMemo } from 'react'
import { toast, ToastContainer } from 'react-toastify'

const typeLevels = [10, 50, 100]
const generalLevels = [10, 50, 100, 250, 750, 1000]

export default function QuestList({ onClose, userId }) {
  const [pokedex, setPokedex] = useState({})
  const [rewards, setRewards] = useState({})

  // Cargar pokedex y rewards de localStorage solo después del primer render
  useEffect(() => {
    queueMicrotask(() => {
      const storedPokedex = JSON.parse(localStorage.getItem('pokedex') || '{}')
      setPokedex(storedPokedex)

      const storedRewards = JSON.parse(
        localStorage.getItem('questRewards') || '{}'
      )
      setRewards(storedRewards)
    })
  }, [])

  const saveRewards = (newRewards) => {
    localStorage.setItem('questRewards', JSON.stringify(newRewards))
    setRewards(newRewards)
  }

  const quests = useMemo(() => {
    const typeCount = {}
    let total = 0

    Object.values(pokedex).forEach((p) => {
      total += p.cantidad
      p.tipos.forEach((t) => {
        typeCount[t] = (typeCount[t] || 0) + p.cantidad
      })
    })

    const result = []

    // Quests por tipo
    Object.keys(typeCount).forEach((type) => {
      const current = typeCount[type]

      typeLevels.forEach((lvl, index) => {
        const id = `${type}-${lvl}`
        const canjeado = rewards[id]?.canjeado || false
        const prevLevel = typeLevels[index - 1]
        const prevCanjeado =
          index === 0 ? true : rewards[`${type}-${prevLevel}`]?.canjeado

        const completada = current >= lvl
        const bloqueado = !completada || !prevCanjeado

        result.push({
          id,
          titulo: `${type.toUpperCase()} Quest`,
          descripcion: `Registra ${lvl} Pokémon de tipo ${type}`,
          premio: lvl * 10,
          progreso: `${Math.min(current, lvl)}/${lvl}`,
          canjeado,
          bloqueado,
        })
      })
    })

    // Quests generales
    generalLevels.forEach((lvl, index) => {
      const id = `general-${lvl}`
      const canjeado = rewards[id]?.canjeado || false
      const prevLevel = generalLevels[index - 1]
      const prevCanjeado =
        index === 0 ? true : rewards[`general-${prevLevel}`]?.canjeado

      const completada = total >= lvl
      const bloqueado = !completada || !prevCanjeado

      result.push({
        id,
        titulo: 'General Quest',
        descripcion: `Registra ${lvl} Pokémon en total`,
        premio: lvl * 5,
        progreso: `${Math.min(total, lvl)}/${lvl}`,
        canjeado,
        bloqueado,
      })
    })

    // Orden: primero quests no canjeadas y desbloqueadas
    result.sort((a, b) => {
      if (a.canjeado !== b.canjeado) return a.canjeado ? 1 : -1
      if (a.bloqueado !== b.bloqueado) return a.bloqueado ? 1 : -1
      return 0
    })

    return result
  }, [pokedex, rewards])

  const handleClaim = (quest) => {
    if (quest.canjeado || quest.bloqueado) return

    // Guardar como canjeado
    const newRewards = {
      ...rewards,
      [quest.id]: { canjeado: true },
    }
    saveRewards(newRewards)

    // Actualizar wallet en localStorage directamente
    if (userId) {
      const key = `wallet_${userId}`
      const storedCoins = parseInt(localStorage.getItem(key), 10) || 0
      const newTotal = storedCoins + quest.premio
      localStorage.setItem(key, newTotal)
      toast.success(
        `Recompensa de "${quest.titulo}" canjeada: ${quest.premio} 💰`
      )
    }
  }

  return (
    <div
      className='fixed inset-0 z-50 bg-black/70 flex justify-center items-center p-4'
      onClick={onClose}
    >
      <ToastContainer theme='colored' position='top-center' />
      <div
        className='relative w-full max-w-3xl bg-purple-200 rounded-2xl p-6 overflow-y-auto max-h-[80vh] shadow-xl'
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-3xl font-bold text-black hover:text-red-700 cursor-pointer'
        >
          ✕
        </button>

        <h2 className='text-3xl font-bold mb-6 text-center text-black'>
          Quests Disponibles
        </h2>

        <div className='flex flex-col gap-4'>
          {quests.map((quest) => (
            <button
              key={quest.id}
              onClick={() => handleClaim(quest)}
              className={`p-4 rounded-3xl shadow-xl flex justify-between items-center text-black transition-transform ${
                quest.canjeado
                  ? 'bg-gray-400 cursor-not-allowed line-through'
                  : 'bg-yellow-400 hover:scale-105'
              } ${
                quest.bloqueado && !quest.canjeado
                  ? 'opacity-50 cursor-not-allowed'
                  : ''
              }`}
            >
              <div>
                <h3 className='font-bold text-xl'>{quest.titulo}</h3>
                <p>{quest.descripcion}</p>
                <p className='font-medium mt-1'>Premio: {quest.premio} 💰</p>
              </div>
              <div className='ml-4 font-bold text-lg'>{quest.progreso}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
