import { Inter, Space_Grotesk } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export default function Home() {
  const events = [
    { name: 'Van Gogh', period: '1853–1890', active: true },
    { name: 'Michelangelo', period: '1475–1570', active: false },
    { name: 'Leonardo Da Vinci', period: '1452–1519', active: false },
  ]

  return (
    <div className='bg-hero h-screen bg-no-repeat bg-cover w-full p-6 bg-top'>
      <header className='max-w-7xl text-white flex flex-row justify-between m-auto py-4'>
        <h1 className='text-2xl'>Art</h1>
        <nav className='hidden xl:block'>
          <ul className='flex flex-row gap-14 text-xl'>
            <li>
              <a href='#'>Loja</a>
            </li>
            <li>
              <a href='#'>História</a>
            </li>
            <li>
              <a href='#'>Artista</a>
            </li>
            <li>
              <a href='#'>Pinturas</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='max-w-7xl flex-col text-white flex items-start justify-center m-auto h-[90vh] py-4'>
        <section className='w-full'>
          <div className='flex flex-col '>
            <div className='w-[432px] flex gap-6 flex-col'>
              <h2 className='text-8xl'>Pinturas Van Gogh</h2>
              <p className={`text-2xl ${inter.className}`}>Van Gogh é tido como o maior expoente do pós-impressionismo. Alguns apontam em suas obras os primeiros sinais do expressionismo</p>
            </div>
            <a href='#' className='text-[#FFB904] text-2xl py-4'>
              Explore mais
            </a>
          </div>
          <div className='w-full flex justify-between items-tart xl:items-center flex-col xl:flex-row'>
            <div className='flex flex-col relative'>
              {events.map((event, index) => (
                <div key={index} className='flex items-end relative justify-start'>
                  <div className='flex flex-col items-center'>
                    <div
                      className={`${event.active ? 'h-full border-l-2 border-yellow-500' : 'h-12 border-l-2 border-white'}`}
                      style={{
                        backgroundColor: event.active ? 'transparent' : '#FFFFFF',
                        borderColor: event.active ? '#FFB904' : '#FFFFFF',
                        borderStyle: event.active ? 'solid' : 'dashed',
                      }}
                    ></div>
                    <div
                      className={`w-4 h-4 rounded-full ${event.active ? 'bg-yellow-500' : 'bg-white border-2 border-white'}`}
                      style={{
                        marginTop: '-8px',
                      }}
                    ></div>
                  </div>

                  <div className='ml-2 flex gap-[10px]'>
                    <h3 className={`text-xl font-semibold ${event.active ? 'text-white' : 'text-gray-200'}`}>{event.name}</h3>
                    <span className={`text-base ${spaceGrotesk.className}`}>({event.period})</span>
                  </div>
                </div>
              ))}
            </div>

            <div className='w-[384px] flex gap-6 flex-col py-4'>
              <h3 className='text-[32px]'>By Van Gogh</h3>
              <p className={`text-xl ${inter.className}`}>Van Gogh foi um pintor holandês do final do século XIX. Seus trabalhos foram valorizados depois de sua morte e tiveram grande influência na arte do século seguinte.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
