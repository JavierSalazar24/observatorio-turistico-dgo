export const TarjetaIndicador = ({
  title,
  desc,
  subdesc,
  text,
  subtext,
  svg
}) => {
  return (
    <div className='bg-gray-100 p-6 rounded-lg text-center'>
      <div className='bg-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-8 w-8 text-white'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d={svg}
          />
        </svg>
      </div>
      <h3 className='text-xl font-bold'>{title}</h3>
      <h4 className='text-gray-800 font-semibold'>{desc}</h4>
      <div className='border-t border-gray-300 mt-4 pt-2'>
        {subdesc && <p className='font-semibold text-gray-600'>{subdesc}</p>}
        {text && <p className='font-semibold text-gray-600'>{text}</p>}
        {subtext && <p className='font-semibold text-gray-600'>{subtext}</p>}
      </div>
    </div>
  )
}
