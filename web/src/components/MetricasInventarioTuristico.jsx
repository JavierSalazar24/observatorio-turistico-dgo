export const MetricasInventarioTuristico = ({ metrica }) => {
  return (
    <div className='text-center'>
      <div
        className={`${metrica.color} text-white py-2 px-2 rounded-t-lg h-12 flex justify-center items-center`}
      >
        <h3 className='text-xs font-semibold leading-tight'>
          {metrica.titulo}
        </h3>
      </div>
      <div className='bg-gray-100 border border-gray-300 py-4 px-2 rounded-b-lg'>
        <div className='text-lg font-bold text-gray-900'>{metrica.valor}</div>
      </div>
    </div>
  )
}
