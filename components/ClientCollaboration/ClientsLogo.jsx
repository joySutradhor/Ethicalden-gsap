'use client'
import Image from 'next/image'
function ClientsLogo () {
  const items = [
    {
      id: 1,
      src: '/images/clients-logo/logo/agarwall.svg',
      line: 'yes'
    },
    {
      id: 2,
      src: '/images/clients-logo/logo/brand ghar logo.svg',
      line: 'yes'
    },
    {
      id: 3,
      src: '/images/clients-logo/logo/emopract final logo.svg',
      line: 'yes'
    },
    {
      id: 4,
      src: '/images/clients-logo/logo/griham.svg',
      line: 'yes'
    },
    {
      id: 5,
      src: '/images/clients-logo/logo/Hero_MotoCorp_Logo.svg',
      line: 'no'
    },
    {
      id: 6,
      src: '/images/clients-logo/logo/massart.png',
      line: 'yes'
    },
    {
      id: 7,
      src: '/images/clients-logo/logo/riddhi siddhi.svg',
      line: 'yes'
    },
    {
      id: 8,
      src: '/images/clients-logo/logo/Siliguri_Metropolitan_Police_Logo.png',
      line: 'yes'
    },
    {
      id: 9,
      src: '/images/clients-logo/logo/smit-logo-new.svg',
      line: 'yes'
    },
    {
      id: 10,
      src: '/images/clients-logo/logo/tala pottay.png',
      line: 'yes'
    },
    {
      id: 11,
      src: '/images/clients-logo/logo/UNESCO_logo.svg',
      line: 'yes'
    },

  ];
  

  return (
    <div className='px-5 xl:px-20 2xl:px-50'>
  <div className='grid grid-cols-3 lg:grid-cols-6 gap-4'>
    {items.map(item => (
      <div
        key={item.id}
        className='flex items-center justify-center rounded bg-white p-2 h-full'
      >
        <div className='relative w-full aspect-square flex items-center justify-center'> {/* Fixed aspect ratio container */}
          <Image
            src={item.src}
            alt={`Item ${item.id}`}
            width={100} // Set explicit width
            height={100} // Set explicit height
            unoptimized
            className='object-contain w-full h-full max-w-[80%] max-h-[80%]' // Constrained size
            style={{
              width: 'auto',
              height: 'auto'
            }}
          />
        </div>
        {item.line === 'yes' && (
          <div className='h-[70px] w-[1px] bg-black/20 rotate-12 ml-5'></div>
        )}
      </div>
    ))}
  </div>
</div>
  )
}

export default ClientsLogo
