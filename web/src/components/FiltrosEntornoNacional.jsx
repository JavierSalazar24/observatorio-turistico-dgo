export const FiltrosEntornoNacional = ({
  selectedPeriod,
  handlePeriodChange,
  estados,
  selectedStates,
  baseData,
  handleStateToggle,
  selectedIndicators,
  handleIndicatorToggle
}) => {
  return (
    <div className='w-full lg:w-96 border-gray-300 min-h-52 lg:h-52 overflow-auto'>
      <div className='bg-orange-500 text-white py-3 px-4'>
        <h4 className='font-bold'>
          Seleccione el periodo y destino que quiera visualizar
        </h4>
      </div>
      <div className='py-3 px-1 md:p-4 h-full flex flex-col'>
        {/* Selector de periodo */}
        <div className='mb-4'>
          <div className='flex justify-between items-center mb-2 text-xs md:text-sm text-gray-600'>
            <span>1 ene {selectedPeriod[0]}</span>
            <span>1 dic {selectedPeriod[1]}</span>
          </div>
          <input
            type='range'
            className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider'
            min='0'
            max='100'
            defaultValue='50'
            onChange={handlePeriodChange}
          />
        </div>

        {/* Tabla de entidades */}
        <div className='flex-1 flex flex-col pb-4'>
          <div className='bg-orange-500 text-white py-2 px-2 md:px-3 mb-2 grid grid-cols-2 gap-2 md:gap-4 text-xs md:text-sm font-medium'>
            <span>Entidad</span>
            <span className='hidden sm:block'>Llega de turistas</span>
            <span className='sm:hidden'>Turistas</span>
          </div>

          {/* Lista de estados con scroll */}
          <div className='flex-1 border border-gray-300 rounded overflow-hidden'>
            <div className='max-h-48 overflow-y-auto'>
              {estados.map((estado) => {
                const isSelected = selectedStates.includes(estado)
                const turistasValue = baseData.llegadaTuristas[estado]
                  ? `${(baseData.llegadaTuristas[estado] / 1000000).toFixed(
                      1
                    )}M`
                  : '-'

                return (
                  <div
                    key={estado}
                    className={`grid grid-cols-2 gap-2 md:gap-4 p-1.5 md:p-2 cursor-pointer hover:bg-gray-50 border-b border-gray-100 text-xs md:text-sm ${
                      isSelected ? 'bg-orange-50 text-orange-700' : ''
                    }`}
                    onClick={() => handleStateToggle(estado)}
                  >
                    <div className='flex items-center min-w-0'>
                      <input
                        id='estado-checkbox'
                        type='checkbox'
                        checked={isSelected}
                        onChange={() => handleStateToggle(estado)}
                        className='mr-1 md:mr-2 h-3 w-3 text-orange-500 focus:ring-orange-500 border-gray-300 rounded flex-shrink-0'
                      />
                      <label
                        className='truncate text-xs md:text-sm'
                        id='estado-checkbox'
                      >
                        {estado}
                      </label>
                    </div>
                    <span className='text-gray-600 text-xs md:text-sm text-right md:text-left'>
                      {turistasValue}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Indicadores en formato compacto */}
          <div className='mt-3 md:mt-4'>
            <h5 className='text-xs md:text-sm font-medium text-gray-700 mb-2'>
              Indicadores
            </h5>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-1 text-xs'>
              {Object.entries({
                llegadaTuristas: 'Llegada turistas',
                ocupacionHotelera: 'Ocupación hotel',
                estadiaPromedio: 'Estadía prom.',
                cuartosOcupados: 'Cuartos ocup.',
                cuartosDisponibles: 'Cuartos disp.',
                pasajerosNacionales: 'Pasaj. nac.',
                pasajerosInternacionales: 'Pasaj. int.'
              }).map(([key, label]) => (
                <div key={key} className='flex items-center py-0.5 md:py-1'>
                  <input
                    type='checkbox'
                    id={key}
                    checked={selectedIndicators[key]}
                    onChange={() => handleIndicatorToggle(key)}
                    className='h-3 w-3 text-orange-500 focus:ring-orange-500 border-gray-300 rounded mr-1 flex-shrink-0'
                  />
                  <label
                    htmlFor={key}
                    className='text-gray-700 truncate text-xs'
                  >
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
