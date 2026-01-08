'use client'

import React from 'react'

export function PokedexIcon() {
  return (
    <svg
      width='30px'
      height='30px'
      viewBox='0 0 200 250'
      xmlns='http://www.w3.org/2000/svg'
    >
      {/* Cuerpo de la Pokédex */}
      <rect
        x='10'
        y='10'
        width='180'
        height='230'
        rx='20'
        ry='20'
        fill='#000000'
      />

      {/* Pantalla */}
      <rect
        x='30'
        y='30'
        width='140'
        height='100'
        rx='10'
        ry='10'
        fill='#facc15'
      />

      {/* Botón principal */}
      <circle
        cx='100'
        cy='180'
        r='20'
        fill='#facc15'
        stroke='#000'
        strokeWidth='3'
      />

      {/* Botón secundario */}
      <circle
        cx='70'
        cy='180'
        r='10'
        fill='#facc15'
        stroke='#000'
        strokeWidth='2'
      />
      <circle
        cx='130'
        cy='180'
        r='10'
        fill='#facc15'
        stroke='#000'
        strokeWidth='2'
      />

      {/* Detalles de borde */}
      <line x1='10' y1='10' x2='190' y2='10' stroke='#000' strokeWidth='3' />
      <line x1='10' y1='240' x2='190' y2='240' stroke='#000' strokeWidth='3' />
    </svg>
  )
}
