import { Header } from '@/components/Header'
import { VanGoghSection } from '@/components/VanGoghSection'

export default function Home() {
  return (
    <div className='bg-hero h-screen bg-no-repeat bg-cover w-full p-6 bg-top'>
      <Header />
      <main className='max-w-7xl flex-col text-white flex items-start justify-center m-auto h-[90vh] py-4'>
        <VanGoghSection />
      </main>
    </div>
  )
}
