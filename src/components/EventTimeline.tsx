interface Event {
  name: string
  period: string
  active: boolean
}

interface EventTimelineProps {
  events: Event[]
}

export function EventTimeline({ events }: EventTimelineProps) {
  return (
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
            <div className={`w-4 h-4 rounded-full ${event.active ? 'bg-yellow-500' : 'bg-white border-2 border-white'}`} style={{ marginTop: '-8px' }}></div>
          </div>
          <div className='ml-2 flex gap-[10px]'>
            <h3 className={`text-xl font-semibold ${event.active ? 'text-white' : 'text-gray-200'}`}>{event.name}</h3>
            <span className='text-base'>({event.period})</span>
          </div>
        </div>
      ))}
    </div>
  )
}
