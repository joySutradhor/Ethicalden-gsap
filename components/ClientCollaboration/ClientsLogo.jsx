'use client'
import Image from 'next/image'
function ClientsLogo() {
  const items = [
    {
      id: 1,
      src: 'https://ik.imagekit.io/ethicalden/logo/agarwal.webp?updatedAt=1747073875209',
      line: 'yes'
    },
    {
      id: 2,
      src: 'https://ik.imagekit.io/ethicalden/logo/brandghar.webp?updatedAt=1747073875151',
      line: 'yes'
    },
    {
      id: 3,
      src: 'https://ik.imagekit.io/ethicalden/logo/emopract.webp?updatedAt=1747073870701',
      line: 'yes'
    },
    {
      id: 4,
      src: 'https://ik.imagekit.io/ethicalden/logo/griham.webp?updatedAt=1747073870640',
      line: 'yes'
    },
    {
      id: 5,
      src: 'https://ik.imagekit.io/ethicalden/logo/hero.webp?updatedAt=1747073870371',
      line: 'no'
    },
    {
      id: 6,
      src: 'https://ik.imagekit.io/ethicalden/logo/massart.png?updatedAt=1747073870731',
      line: 'yes'
    },
    {
      id: 7,
      src: 'https://ik.imagekit.io/ethicalden/logo/ridhisidhi.webp?updatedAt=1747073870637',
      line: 'yes'
    },
    {
      id: 8,
      src: 'https://ik.imagekit.io/ethicalden/logo/Siliguri_Metropolitan_Police_Logo.png?updatedAt=1747073870735',
      line: 'yes'
    },
    {
      id: 9,
      src: 'https://ik.imagekit.io/ethicalden/logo/smit.webp?updatedAt=1747073870739',
      line: 'yes'
    },
    {
      id: 10,
      src: 'https://ik.imagekit.io/ethicalden/logo/tala%20pottay.webp?updatedAt=1747073874032',
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
            <div className='relative w-full aspect-square flex items-center justify-center'>
              <Image
                src={item.src}
                alt={`Item ${item.id}`}
                width={100}
                height={100}
                unoptimized
                className='object-contain w-full h-full '
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
