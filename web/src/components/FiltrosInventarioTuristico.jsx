export const FiltrosInventarioTuristico = ({
  selectedYear,
  setSelectedYear,
  selectedDestination,
  setSelectedDestination,
  destinos
}) => {
  return (
    <div className='bg-orange-500 text-white p-4 rounded-lg'>
      <h3 className='text-base font-bold mb-4 text-center'>
        Filtros de selección para muestra de información.
      </h3>

      <div className='flex justify-center gap-8 flex-col sm:flex-row'>
        <div className='flex items-center gap-4'>
          <label className='text-white font-medium text-sm'>Año:</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className='px-4 py-2 rounded text-gray-800 min-w-[120px] sm:text-sm text-xs bg-white'
          >
            <option value='2024'>2024</option>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
          </select>
        </div>

        <div className='flex items-center gap-4'>
          <label className='text-white font-medium text-sm'>Destino:</label>
          <select
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
            className='sm:px-4 text-xs py-2 rounded text-gray-800 w-fit sm:min-w-[200px] sm:text-sm bg-white'
          >
            <option value=''>Todos los destinos</option>
            {destinos?.map((destino) => (
              <option key={destino} value={destino}>
                {destino}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
