'use client'

import { useEffect, useState, useRef } from 'react'

const typeColors = {
  normal: 'bg-gray-400',
  fire: 'bg-orange-500',
  water: 'bg-blue-500',
  grass: 'bg-green-500',
  electric: 'bg-yellow-400',
  ice: 'bg-cyan-300',
  fighting: 'bg-red-700',
  poison: 'bg-purple-600',
  ground: 'bg-yellow-600',
  flying: 'bg-indigo-300',
  psychic: 'bg-pink-500',
  bug: 'bg-lime-500',
  rock: 'bg-orange-900',
  ghost: 'bg-indigo-700',
  dragon: 'bg-indigo-800',
  dark: 'bg-gray-700',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-300',
}

const STORAGE_KEY = 'pokedex'

export default function PokeballModal({ cantidadPokemon = 1, closePack }) {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)
  const hasRun = useRef(false)

  const generarIVs = (esLegendario) => {
    const stats = ['HP', 'ATK', 'SPA', 'DEF', 'SPD', 'SPE']
    let ivs = stats.map(() => Math.floor(Math.random() * 32))
    if (esLegendario) {
      const indices = [0, 1, 2, 3, 4, 5]
      for (let i = 0; i < 3; i++) {
        const randIdx = Math.floor(Math.random() * indices.length)
        ivs[indices[randIdx]] = 31
        indices.splice(randIdx, 1)
      }
    }
    const ivTotalPercent = Math.round(
      (ivs.reduce((a, b) => a + b, 0) / 186) * 100
    )
    return { ivs, ivTotalPercent }
  }

  const registrarPokemon = (pkm) => {
    const stored = localStorage.getItem(STORAGE_KEY)
    const pokedex = stored ? JSON.parse(stored) : {}

    const { nombre, ivs, ivTotalPercent } = pkm

    if (!pokedex[nombre]) {
      pokedex[nombre] = { ...pkm, cantidad: 1 }
    } else {
      pokedex[nombre].cantidad += 1
      if (ivTotalPercent > (pokedex[nombre].ivTotalPercent || 0)) {
        pokedex[nombre].ivs = ivs
        pokedex[nombre].ivTotalPercent = ivTotalPercent
      }
      if (pkm.shiny) pokedex[nombre].shiny = true
      if (pkm.habilidad.hidden) pokedex[nombre].ha = true
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(pokedex))
  }

  const obtenerPokemonAleatorio = async () => {
    try {
      const id = Math.floor(Math.random() * 1025) + 1
      const esShiny = Math.random() < 0.01

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        cache: 'no-store',
      })
      if (!res.ok) return null
      const data = await res.json()

      const speciesRes = await fetch(data.species.url, { cache: 'no-store' })
      const species = await speciesRes.json()

      const imagen = esShiny
        ? data.sprites.other['official-artwork'].front_shiny ||
          data.sprites.front_shiny
        : data.sprites.other['official-artwork'].front_default ||
          data.sprites.front_default

      const abilities = data.abilities
      const hidden = abilities.filter((a) => a.is_hidden)
      const normal = abilities.filter((a) => !a.is_hidden)
      const habilidadSeleccionada =
        hidden.length > 0 && Math.random() < 0.05
          ? hidden[Math.floor(Math.random() * hidden.length)]
          : normal[Math.floor(Math.random() * normal.length)]

      return {
        nombre: data.name,
        id: data.id,
        tipos: data.types.map((t) => t.type.name),
        imagen,
        shiny: esShiny,
        habilidad: {
          nombre: habilidadSeleccionada.ability.name,
          hidden: habilidadSeleccionada.is_hidden,
        },
        is_legendary: species.is_legendary,
      }
    } catch (err) {
      console.error('Error fetching Pokémon:', err)
      return null
    }
  }

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    const abrirSobre = async () => {
      setLoading(true)
      setPokemon([])

      const resultados = []
      const nombresUsados = new Set()

      let obtenidos = 0
      while (obtenidos < cantidadPokemon) {
        const pkm = await obtenerPokemonAleatorio()

        if (!pkm || nombresUsados.has(pkm.nombre)) {
          // Si falla o está duplicado, intenta otra vez (no cuenta como obtenido)
          continue
        }

        nombresUsados.add(pkm.nombre)

        const { ivs, ivTotalPercent } = generarIVs(pkm.is_legendary)
        const pkmCompleto = { ...pkm, ivs, ivTotalPercent }

        registrarPokemon(pkmCompleto)
        resultados.push(pkmCompleto)
        obtenidos++
      }

      // SIEMPRE actualizamos el estado, incluso si hubo fallos
      setPokemon(resultados)
      setLoading(false)
    }

    abrirSobre().catch(() => {
      // Por si hay un error no capturado, forzamos cierre del loading
      setPokemon([])
      setLoading(false)
    })
  }, [cantidadPokemon])

  return (
    <div className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4'>
      <button
        onClick={closePack}
        className='absolute top-6 right-6 text-white text-5xl font-light hover:text-red-400 transition hover:cursor-pointer'
      >
        ×
      </button>

      <div className='w-full max-w-7xl bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-10 shadow-2xl overflow-x-auto'>
        <div className='flex gap-10 justify-center min-w-max'>
          {loading ? (
            <div className='flex flex-col items-center py-32'>
              <div className='w-24 h-24 border-8 border-gray-300 border-t-red-600 rounded-full animate-spin mb-8'></div>
              <p className='text-3xl font-bold text-gray-800 dark:text-white'>
                Abriendo Sobre...
              </p>
            </div>
          ) : (
            pokemon.map((p, idx) => (
              <div
                key={`${p.id}-${idx}`}
                className='bg-white dark:bg-gray-800 rounded-3xl p-8 w-100vh flex flex-col items-center shadow-xl'
                style={{
                  animation: 'fadeInUp 0.8s ease-out',
                  animationDelay: `${idx * 0.3}s`,
                }}
              >
                <div className='relative w-48 h-48 mb-6'>
                  {p.shiny && (
                    <img
                      src='/images/stars.gif'
                      alt='Shiny'
                      className='absolute inset-0 w-full h-full object-cover pointer-events-none animate-pulse opacity-80'
                    />
                  )}
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    className='relative z-10 w-full h-full object-contain drop-shadow-2xl'
                  />
                </div>

                <h2 className='text-2xl font-bold capitalize text-gray-900 dark:text-white mb-2'>
                  {p.nombre} #{p.id}
                  {p.shiny && (
                    <span className='ml-3 text-yellow-400 text-xl'>
                      ✨ Shiny ✨
                    </span>
                  )}
                </h2>

                <div className='flex gap-3 mb-6'>
                  {p.tipos.map((tipo) => (
                    <span
                      key={tipo}
                      className={`px-5 py-2 rounded-full text-white font-semibold text-sm ${
                        typeColors[tipo] || 'bg-gray-400'
                      }`}
                    >
                      {tipo}
                    </span>
                  ))}
                </div>

                <div className='w-full max-w-xs'>
                  <div className='grid grid-cols-6 gap-3 text-xs font-bold text-gray-600 dark:text-gray-400 mb-3'>
                    {['HP', 'ATK', 'SPA', 'DEF', 'SPD', 'SPE'].map((s) => (
                      <span key={s} className='text-center'>
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className='grid grid-cols-6 gap-3 mb-5'>
                    {p.ivs.map((iv, i) => (
                      <span
                        key={i}
                        className={`text-center text-2xl font-bold ${
                          iv === 31
                            ? 'text-green-500'
                            : 'text-gray-800 dark:text-white'
                        }`}
                      >
                        {iv}
                      </span>
                    ))}
                  </div>
                  <p
                    className={`text-center text-2xl font-bold ${
                      p.ivTotalPercent === 100
                        ? 'text-yellow-500'
                        : p.ivTotalPercent > 90
                        ? 'text-purple-500'
                        : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    IV: {p.ivTotalPercent}%
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
