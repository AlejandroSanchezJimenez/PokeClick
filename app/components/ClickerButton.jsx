'use client'

import { useState, useEffect } from 'react'

export default function ClickerButton({ addCoins, coinsPerClick = 1 }) {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount((prev) => prev + 1)
    if (addCoins) addCoins(coinsPerClick)
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <button
        onClick={handleClick}
        className='
    w-64 h-64
    rounded-full
    bg-red-500
    text-white
    text-4xl font-bold
    shadow-lg
    transition-transform
    active:scale-95
    hover:scale-95
    hover:cursor-pointer
  '
      >
        CLICK ME
      </button>
    </div>
  )
}
