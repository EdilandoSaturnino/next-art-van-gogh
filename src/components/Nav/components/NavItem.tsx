import React from 'react'

interface NavItemProps {
  label: string
  href: string
}
export function NavItem({ label, href }: NavItemProps) {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  )
}
