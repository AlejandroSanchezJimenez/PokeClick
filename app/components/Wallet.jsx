'use client'

export default function Wallet({ coins }) {
  return (
    <div className='fixed top-6 right-6 bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg text-xl hover:scale-105'>
      💰 {coins} Coins
    </div>
  )
}
