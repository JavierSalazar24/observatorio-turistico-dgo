export const MetricasPrincipalesEntornoNacional = ({ metricas }) => {
  return (
    <div className='flex-1 border border-gray-300 p-6 h-52'>
      <h3 className='sm:text-xl font-bold mb-6'>
        Métricas para el periodo y entidades federativas seleccionadas
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='text-center'>
          <h4 className='sm:text-lg text-gray-600 mb-2'>Cuartos Ocupados</h4>
          <div className='sm:text-2xl font-bold text-gray-900'>
            {metricas.cuartosOcupados}
          </div>
        </div>
        <div className='text-center'>
          <h4 className='sm:text-lg text-gray-600 mb-2'>Llegada de Turistas</h4>
          <div className='sm:text-2xl font-bold text-gray-900'>
            {metricas.llegadaTuristas}
          </div>
        </div>
        <div className='text-center'>
          <h4 className='sm:text-lg text-gray-600 mb-2'>
            Porcentaje Ocupación
          </h4>
          <div className='sm:text-2xl font-bold text-gray-900'>
            {metricas.porcentajeOcupacion}
          </div>
        </div>
      </div>
    </div>
  )
}
