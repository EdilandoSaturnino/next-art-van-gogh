import { Inter } from 'next/font/google'
import { EventTimeline } from './EventTimeline'

const inter = Inter({ subsets: ['latin'] })

export function VanGoghSection() {
  return (
    <section className='w-full'>
      <div className='flex flex-col'>
        <div className='w-[432px] flex gap-6 flex-col'>
          <h2 className='text-8xl'>Pinturas Van Gogh</h2>
          <p className={`text-2xl ${inter.className}`}>Van Gogh é tido como o maior expoente do pós-impressionismo. Alguns apontam em suas obras os primeiros sinais do expressionismo</p>
        </div>
        <a href='#' className='text-[#FFB904] text-2xl py-4'>
          Explore mais
        </a>
      </div>
      <div className='w-full flex justify-between items-start xl:items-center flex-col xl:flex-row'>
        <EventTimeline
          events={[
            { name: 'Van Gogh', period: '1853–1890', active: true },
            { name: 'Michelangelo', period: '1475–1570', active: false },
            { name: 'Leonardo Da Vinci', period: '1452–1519', active: false },
          ]}
        />
        <div className='w-[384px] flex gap-6 flex-col py-4'>
          <h3 className='text-[32px]'>By Van Gogh</h3>
          <p className={`text-xl ${inter.className}`}>Van Gogh foi um pintor holandês do final do século XIX. Seus trabalhos foram valorizados depois de sua morte e tiveram grande influência na arte do século seguinte.</p>
        </div>
      </div>
    </section>
  )
}
