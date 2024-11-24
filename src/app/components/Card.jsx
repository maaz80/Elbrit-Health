import Image from 'next/image'

function Card({title,desc,CardImage}) {
  return (
    <div className='w-[100%] md:w-80 h-56  rounded-xl p-2 relative'>
      <div>
        <div style={{ color: ' #17414F' }} className='text-xl font-semibold absolute top-8 left-5'>{title}</div>
        <div className='text-gray-400 absolute top-16 left-5'>{desc}</div>
      </div>
      <Image src={CardImage} alt="CardImage" className='  w-full h-full' />
      <div style={{ color: ' #17414F' }}  className='underline absolute bottom-8 left-5'>See More</div>
    </div>
  )
}

export default Card
