export const HeroBanner = ({ img, alt, text }) => {
  return (
    <div className='relative h-[400px] overflow-hidden'>
      <img src={img} alt={alt} className='w-full h-full object-cover' />
      <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
        <h1 className='text-white text-4xl sm:text-7xl font-bold text-center mx-2 sm:mx-0'>
          {text}
        </h1>
      </div>
    </div>
  )
}
