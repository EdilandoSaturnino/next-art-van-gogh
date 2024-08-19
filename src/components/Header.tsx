import { Inter } from 'next/font/google'
import { Nav } from './Nav'

const inter = Inter({ subsets: ['latin'] })

export function Header() {
  return (
    <header className='max-w-7xl text-white flex flex-row justify-between m-auto py-4'>
      <h1 className={`text-2xl ${inter.className}`}>Art</h1>
      <Nav />
    </header>
  )
}
