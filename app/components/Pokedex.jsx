'use client'

import { useState } from 'react'

const generations = {
  1: { name: 'Generación I', range: [1, 151] },
  2: { name: 'Generación II', range: [152, 251] },
  3: { name: 'Generación III', range: [252, 386] },
  4: { name: 'Generación IV', range: [387, 493] },
  5: { name: 'Generación V', range: [494, 649] },
  6: { name: 'Generación VI', range: [650, 721] },
  7: { name: 'Generación VII', range: [722, 809] },
  8: { name: 'Generación VIII', range: [810, 898] },
  9: { name: 'Generación IX', range: [899, 1008] },
}

export default function Pokedex({ onClose }) {
  const [pokedex] = useState(() =>
    JSON.parse(localStorage.getItem('pokedex') || '{}')
  )
  const [openGens, setOpenGens] = useState({})
  const [selectedPokemon, setSelectedPokemon] = useState(null)

  const toggleGen = (genName) =>
    setOpenGens((prev) => ({ ...prev, [genName]: !prev[genName] }))

  // Total global de Pokémon
  const totalPokemon = Object.values(generations).reduce(
    (sum, g) => sum + (g.range[1] - g.range[0] + 1),
    0
  )
  const ownedTotal = Object.values(pokedex).filter((p) => p.cantidad > 0).length
  const pokedexPercent = ((ownedTotal / totalPokemon) * 100).toFixed(1)

  return (
    <div className='fixed inset-0 z-50 bg-black/70 flex justify-center items-start overflow-auto pt-8'>
      <div className='bg-red-100 w-full max-w-6xl rounded-lg shadow-lg p-6 relative border-4 border-red-600'>
        {/* Botón de cerrar */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-2xl font-bold text-black hover:text-red-700 cursor-pointer'
        >
          ✕
        </button>

        <h2 className='text-3xl font-bold mb-4 text-center text-black'>
          Pokedex - {ownedTotal}/{totalPokemon} Capturados ({pokedexPercent}%)
        </h2>

        <div className='space-y-4'>
          {Object.values(generations).map((gen) => {
            const totalInGen = gen.range[1] - gen.range[0] + 1
            const ownedPokemons = Object.values(pokedex).filter(
              (p) =>
                p.id >= gen.range[0] && p.id <= gen.range[1] && p.cantidad > 0
            )
            const owned = ownedPokemons.length
            const shinyCount = ownedPokemons.filter((p) => p.shiny).length

            return (
              <div
                key={gen.name}
                className='border rounded-lg p-2 bg-red-50 border-red-400'
              >
                <button
                  onClick={() => toggleGen(gen.name)}
                  className='w-full text-left font-bold py-2 px-4 bg-red-300 text-black rounded hover:bg-red-400 transition cursor-pointer'
                >
                  {gen.name} - {owned}/{totalInGen} Capturados - {shinyCount}{' '}
                  Shiny
                </button>

                {openGens[gen.name] && (
                  <div className='grid grid-cols-6 gap-2 mt-2'>
                    {Array.from({ length: totalInGen }, (_, i) => {
                      const id = gen.range[0] + i
                      const p = Object.values(pokedex).find(
                        (pk) => pk.id === id
                      )

                      return (
                        <div
                          key={id}
                          onClick={() => p && setSelectedPokemon(p)}
                          className={`flex flex-col items-center justify-center border p-1 rounded hover:shadow cursor-pointer ${
                            p && p.cantidad > 0
                              ? 'bg-red-50 border-red-200'
                              : 'bg-red-200 border-red-400'
                          }`}
                        >
                          {p && p.cantidad > 0 ? (
                            <img
                              src={p.shiny ? p.shinyUrl || p.imagen : p.imagen}
                              alt={p.nombre}
                              className='w-16 h-16 object-contain'
                            />
                          ) : (
                            <span className='text-2xl font-bold text-gray-700'>
                              #{id}
                            </span>
                          )}
                          <span className='text-xs mt-1 text-black'>
                            {p ? p.nombre.toUpperCase() : ''}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal de Pokémon seleccionado */}
      {selectedPokemon && (
        <div className='fixed inset-0 z-60 bg-black/70 flex justify-center items-center p-4'>
          <div className='bg-red-50 rounded-lg p-6 w-full max-w-md relative border-4 border-red-600'>
            <button
              onClick={() => setSelectedPokemon(null)}
              className='absolute top-4 right-4 text-xl font-bold text-black hover:text-red-700 cursor-pointer'
            >
              ✕
            </button>
            <h3 className='text-2xl font-bold mb-2 text-center text-black'>
              {selectedPokemon.nombre.toUpperCase()}{' '}
              {selectedPokemon.shiny && '✨'}
            </h3>
            <img
              src={
                selectedPokemon.shiny
                  ? selectedPokemon.shinyUrl || selectedPokemon.imagen
                  : selectedPokemon.imagen
              }
              alt={selectedPokemon.nombre}
              className='w-32 h-32 mx-auto mb-4 object-contain'
            />
            <div className='text-black'>
              <p>
                <strong>ID:</strong> {selectedPokemon.id}
              </p>
              <p>
                <strong>Tipos:</strong> {selectedPokemon.tipos.join(', ')}
              </p>
              <p>
                <strong>Habilidad:</strong> {selectedPokemon.habilidad.nombre}{' '}
                {selectedPokemon.habilidad.hidden && '(Hidden)'}
              </p>
              <p>
                <strong>Legendario:</strong>{' '}
                {selectedPokemon.is_legendary ? 'Sí' : 'No'}
              </p>
              <p>
                <strong>Cantidad:</strong> {selectedPokemon.cantidad}
              </p>
              <p>
                <strong>IVs:</strong> {selectedPokemon.ivs.join(', ')} (
                {selectedPokemon.ivTotalPercent}%)
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
