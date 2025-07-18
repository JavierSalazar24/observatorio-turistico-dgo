export const ListaDesordenadaOTD = ({ title, list }) => {
  return (
    <div className='bg-gray-200 sm:p-8 p-5 rounded-lg'>
      <h3 className='text-2xl font-bold text-gray-800 mb-4'>{title}</h3>
      <div className='w-16 h-1 bg-orange-500 mb-6'></div>
      <ul className='text-gray-700 sm:space-y-3 space-y-2'>
        {list.map((item, index) => (
          <li key={index} className='flex items-start'>
            <span className='text-orange-500 mr-2'>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
