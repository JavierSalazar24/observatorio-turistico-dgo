import { CustomChartEntornoNacional } from '../components/CustomChartEntornoNacional'
import { FiltrosEntornoNacional } from '../components/FiltrosEntornoNacional'
import { GraficosSecundariosEntornoNacional } from '../components/GraficosSecundariosEntornoNacional'
import { HeroBanner } from '../components/HeroBanner'
import { MetricasPrincipalesEntornoNacional } from '../components/MetricasPrincipalesEntornoNacional'
import { useEntornoNacional } from '../hook/useEntornoNacional'

const EntornoNacionalPage = () => {
  const {
    stateColors,
    metricas,
    selectedPeriod,
    handlePeriodChange,
    estados,
    selectedStates,
    baseData,
    handleStateToggle,
    selectedIndicators,
    handleIndicatorToggle,
    chartData
  } = useEntornoNacional()

  const CustomChart = ({ data, title, dataKeys, height = 300 }) => (
    <CustomChartEntornoNacional
      data={data}
      title={title}
      dataKeys={dataKeys}
      height={height}
      stateColors={stateColors}
    />
  )

  return (
    <div className='min-h-screen flex flex-col'>
      {/* Hero Banner */}
      <HeroBanner
        img='https://www.mexicodesconocido.com.mx/sites/default/files/styles/adaptive/public/fichas-destino/durango_ciudad_catedral_wb.jpg'
        alt='Imagen de fondo del módulo de Entorno Nacional'
        text='ENTORNO NACIONAL'
      />

      <div className='sm:mx-16 mx-4'>
        <div className='bg-white py-8'>
          <p className='text-lg text-gray-700'>
            Presenta los principales indicadores de la actividad turística por
            entidad federativa, con base en la información publicada por la
            Secretaría de Turismo Federal en el Compendio Estadístico del
            Turismo en México.
          </p>
        </div>

        {/* Título Entorno Nacional con logo OTEG */}
        <div className='bg-orange-500 py-4 relative px-8'>
          <h2 className='sm:text-4xl text-2xl font-bold text-white'>
            Entorno Nacional
          </h2>
        </div>

        {/* Contenido Principal */}
        <div className='bg-white py-8'>
          <div className='flex gap-8 mb-8 flex-col sm:flex-row'>
            {/* Métricas principales */}
            <MetricasPrincipalesEntornoNacional metricas={metricas} />

            {/* Filtros */}
            <FiltrosEntornoNacional
              selectedPeriod={selectedPeriod}
              handlePeriodChange={handlePeriodChange}
              estados={estados}
              selectedStates={selectedStates}
              baseData={baseData}
              handleStateToggle={handleStateToggle}
              selectedIndicators={selectedIndicators}
              handleIndicatorToggle={handleIndicatorToggle}
            />
          </div>

          {/* Comportamiento de la actividad turística */}
          <h3 className='sm:text-xl font-bold mb-6 p-4 shadow-md'>
            Comportamiento de la actividad turística en hoteles.
          </h3>

          {/* Gráfico principal - Llegada de turistas */}
          {selectedIndicators.llegadaTuristas && (
            <CustomChart
              data={chartData.llegadaTuristas}
              title='Llegada de turistas'
              dataKeys={selectedStates}
              height={400}
            />
          )}

          {/* Gráficos secundarios*/}
          <GraficosSecundariosEntornoNacional
            selectedIndicators={selectedIndicators}
            CustomChart={CustomChart}
            chartData={chartData}
            selectedStates={selectedStates}
          />
        </div>
      </div>
    </div>
  )
}

export default EntornoNacionalPage
