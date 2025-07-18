export const GraficosSecundariosEntornoNacional = ({
  selectedIndicators,
  CustomChart,
  chartData,
  selectedStates
}) => {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
        {selectedIndicators.ocupacionHotelera && (
          <CustomChart
            data={chartData.ocupacionHotelera}
            title='Porcentaje de ocupación'
            dataKeys={selectedStates}
          />
        )}

        {selectedIndicators.estadiaPromedio && (
          <CustomChart
            data={chartData.estadiaPromedio}
            title='Estadía promedio'
            dataKeys={selectedStates}
          />
        )}

        {selectedIndicators.cuartosOcupados && (
          <CustomChart
            data={chartData.cuartosOcupados}
            title='Cuartos ocupados'
            dataKeys={selectedStates}
          />
        )}

        {selectedIndicators.cuartosDisponibles && (
          <CustomChart
            data={chartData.cuartosDisponibles}
            title='Cuartos disponibles'
            dataKeys={selectedStates}
          />
        )}
      </div>

      {(selectedIndicators.pasajerosNacionales ||
        selectedIndicators.pasajerosInternacionales) && (
        <>
          <h3 className='sm:text-xl font-bold mb-6 p-4 shadow-md'>
            Pasajeros de los aeropuertos
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
            {selectedIndicators.pasajerosNacionales && (
              <CustomChart
                data={chartData.pasajerosNacionales}
                title='Pasajeros nacionales'
                dataKeys={selectedStates}
              />
            )}

            {selectedIndicators.pasajerosInternacionales && (
              <CustomChart
                data={chartData.pasajerosInternacionales}
                title='Pasajeros internacionales'
                dataKeys={selectedStates}
              />
            )}
          </div>
        </>
      )}
    </>
  )
}
