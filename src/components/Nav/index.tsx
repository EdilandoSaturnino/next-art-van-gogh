import React from 'react'
import { NavItem } from './components/NavItem'

const navItems = [
  { label: 'Loja', href: '#' },
  { label: 'História', href: '#' },
  { label: 'Artista', href: '#' },
  { label: 'Pinturas', href: '#' },
]

export function Nav() {
  return (
    <nav className='hidden xl:block'>
      <ul className='flex flex-row gap-14 text-xl'>
        {navItems.map((item, index) => (
          <NavItem key={index} label={item.label} href={item.href} />
        ))}
      </ul>
    </nav>
  )
}
