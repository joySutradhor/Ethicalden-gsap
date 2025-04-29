'use client'
import Image from 'next/image'
function ClientsLogo () {
  const items = [
    {
      id: 1,
      src: 'https://mater.agency/wp-content/uploads/2024/03/vogue.png',
      line: 'yes'
    },
    {
      id: 2,
      src: 'https://mater.agency/wp-content/uploads/2024/01/unitedgroup-142x142.png',
      line: 'yes'
    },
    {
      id: 3,
      src: 'https://mater.agency/wp-content/uploads/2024/01/erste-142x142.png',
      line: 'yes'
    },
    {
      id: 4,
      src: 'https://mater.agency/wp-content/uploads/2024/01/a1-142x142.png',
      line: 'yes'
    },
    {
      id: 5,
      src: 'https://mater.agency/wp-content/uploads/2024/01/asseco-142x142.png',
      line: 'yes'
    },
    {
      id: 6,
      src: 'https://mater.agency/wp-content/uploads/2024/01/loreal-142x142.png',
      line: 'no'
    },
    {
      id: 7,
      src: 'https://mater.agency/wp-content/uploads/2024/01/mtv-142x142.png',
      line: 'yes'
    },
    {
      id: 8,
      src: 'https://mater.agency/wp-content/uploads/2024/01/nordeus-142x142.png',
      line: 'yes'
    },
    {
      id: 9,
      src: 'https://mater.agency/wp-content/uploads/2024/01/nfinnova-142x142.png',
      line: 'yes'
    },
    {
      id: 10,
      src: 'https://mater.agency/wp-content/uploads/2024/01/rba-142x142.png',
      line: 'yes'
    },
    {
      id: 11,
      src: 'https://mater.agency/wp-content/uploads/2024/01/telemach-142x142.png',
      line: 'yes'
    },
    {
      id: 12,
      src: 'https://mater.agency/wp-content/uploads/2024/01/telenor-142x142.png',
      line: 'no'
    }
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
