export const MisionVision = ({ title, desc }) => {
  return (
    <div className='bg-gray-200 sm:p-8 p-5 rounded-lg'>
      <h3 className='text-2xl font-bold text-gray-800 mb-4'>{title}</h3>
      <div className='w-16 h-1 bg-orange-500 mb-6'></div>
      <p className='text-gray-700 leading-relaxed md:text-justify'>{desc}</p>
    </div>
  )
}
