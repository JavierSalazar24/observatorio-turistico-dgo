import { HeroBanner } from '../components/HeroBanner'
import { useInventarioTuristico } from '../hook/useInventarioTuristico'
import { FiltrosInventarioTuristico } from '../components/FiltrosInventarioTuristico'
import { MetricasInventarioTuristico } from '../components/MetricasInventarioTuristico'
import { GraficoDonaInventarioTuristico } from '../components/GraficoDonaInventarioTuristico'
import { GraficoBarrasInventarioTuristico } from '../components/GraficoBarrasInventarioTuristico'
import { GraficoHistoricoInventarioTuristico } from '../components/GraficoHistoricoInventarioTuristico'

const InventarioTuristicoPage = () => {
  const {
    selectedYear,
    setSelectedYear,
    selectedDestination,
    setSelectedDestination,
    destinos,
    metricasFiltradas,
    dataDona,
    dataHabitaciones,
    selectedHistoricalDestination,
    setSelectedHistoricalDestination,
    selectedHistoricalRubro,
    setSelectedHistoricalRubro,
    rubros,
    dataHistorico,
    coloresLineas
  } = useInventarioTuristico()

  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Hero Section */}
      <HeroBanner
        text='INVENTARIO TURÍSTICO'
        img='https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2024/02/visitar-durango-en-vacaciones6.jpg?resize=600%2C398&ssl=1'
        alt='Imagen de fondo del módulo de Inventario Turístico'
      />

      <div className='sm:mx-10'>
        {/* Descripción */}
        <div className='bg-gray-100 py-8'>
          <div className='container mx-auto sm:px-8 px-3'>
            <p className='text-base sm:text-lg text-gray-700 text-center max-w-4xl mx-auto'>
              Presenta información de la oferta histórica de servicios
              turísticos por rubro y municipio. La actualización de los datos se
              realiza de manera anual con el apoyo de los municipios y
              prestadores de servicios turísticos.
            </p>
          </div>
        </div>

        {/* Dashboard Principal */}
        <div className='container mx-auto px-3 sm:px-8 py-8'>
          {/* Header del Inventario */}
          <div className='bg-orange-500 text-white p-6 rounded-t-lg'>
            <h2 className='text-3xl font-bold'>Inventario Turístico</h2>
          </div>

          {/* Panel de Filtros - */}
          <div className='bg-white border-l border-r border-gray-200 p-6'>
            <div className='bg-yellow-200 text-yellow-800 p-3 rounded-lg mb-6 text-sm text-center'>
              Antes de la selección de filtros las métricas mostrarán un
              acumulado histórico.
            </div>

            {/* Filtros en línea */}
            <FiltrosInventarioTuristico
              selectedYear={selectedYear}
              setSelectedYear={setSelectedYear}
              selectedDestination={selectedDestination}
              setSelectedDestination={setSelectedDestination}
              destinos={destinos}
            />
          </div>

          {/* Grid de Métricas */}
          <div className='bg-white border-l border-r border-gray-200 p-6'>
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8'>
              {metricasFiltradas.map((metrica, index) => (
                <MetricasInventarioTuristico key={index} metrica={metrica} />
              ))}
            </div>
          </div>

          {/* Gráficos */}
          <div className='bg-white border-l border-r border-gray-200 p-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
              {/* Gráfico de Dona - Servicios por Rubro */}
              <GraficoDonaInventarioTuristico dataDona={dataDona} />

              {/* Gráfico de Barras - Habitaciones por Destino */}
              <GraficoBarrasInventarioTuristico
                dataHabitaciones={dataHabitaciones}
              />
            </div>
          </div>

          {/* Gráfico Histórico */}
          <GraficoHistoricoInventarioTuristico
            selectedHistoricalDestination={selectedHistoricalDestination}
            setSelectedHistoricalDestination={setSelectedHistoricalDestination}
            selectedHistoricalRubro={selectedHistoricalRubro}
            setSelectedHistoricalRubro={setSelectedHistoricalRubro}
            rubros={rubros}
            dataHistorico={dataHistorico}
            destinos={destinos}
            coloresLineas={coloresLineas}
          />
        </div>
      </div>
    </div>
  )
}

export default InventarioTuristicoPage
