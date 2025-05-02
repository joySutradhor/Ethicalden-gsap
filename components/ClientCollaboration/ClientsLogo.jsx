'use client'
import Image from 'next/image'
function ClientsLogo () {
  const items = [
    {
      id: 1,
      src: '/images/clients-logo/1.png',
      line: 'yes'
    },
    {
      id: 2,
      src: '/images/clients-logo/2.png',
      line: 'yes'
    },
    {
      id: 3,
      src: '/images/clients-logo/3.png',
      line: 'yes'
    },
    {
      id: 4,
      src: '/images/clients-logo/4.png',
      line: 'yes'
    },
    {
      id: 5,
      src: '/images/clients-logo/5.png',
      line: 'no'
    },
    {
      id: 6,
      src: '/images/clients-logo/6.png',
      line: 'yes'
    },
    {
      id: 7,
      src: '/images/clients-logo/7.png',
      line: 'yes'
    },
    {
      id: 8,
      src: '/images/clients-logo/8.png',
      line: 'yes'
    },
    {
      id: 9,
      src: '/images/clients-logo/9.png',
      line: 'yes'
    },
    {
      id: 10,
      src: '/images/clients-logo/test.png',
      line: 'yes'
    },

  ];
  

  return (
    <div className='px-5 xl:px-20 2xl:px-50'>
      <div className='grid grid-cols-3 lg:grid-cols-6  gap-4'>
        {items.map(item => (
          <div
            key={item.id}
            className=' flex items-center rounded bg-white text-center'
          >
            <Image
              width={500}
              height={500}
              src={item.src}
              alt={`Item ${item.id}`}
              unoptimized
              className='w-[80%] h-auto mb-2 '
            />
            {item.line === 'yes' && (
              <div className='h-[70px] w-[1px] bg-black/20 text-green-400 rotate-12 ml-5'></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientsLogo
