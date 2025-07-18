import { TablaIndicadores } from '../components/TablaIndicadores'
import { Velocimetro } from '../components/Velocimetro'
import logo from '../assets/imgs/logo_fondo.jpg'
import { HeroBanner } from '../components/HeroBanner'
import { HeaderVelocimetro } from '../components/HeaderVelocimetro'
import { useIndicadores } from '../hook/useIndicadores'

const IndicadoresPage = () => {
  const { tableros, calcularPuntajeTotal } = useIndicadores()

  return (
    <>
      {/* Hero Banner */}
      <HeroBanner
        img='https://noro.mx/wp-content/uploads/2024/11/Las-ciudades-mas-importantes-del-estado-de-Durango.jpg'
        alt='Imagen de fondo del módulo de Indicadores'
        text='INDICADORES'
      />

      <div className='bg-white py-10'>
        <div className='container mx-auto px-4'>
          <p className='text-lg text-gray-700 max-w-5xl mx-auto'>
            Herramienta del OTD que comunica mediante semáforos, el
            comportamiento de los indicadores turísticos monitoreados con
            enfoque sostenible. Los resultados de cada indicador aportan un
            puntaje ponderado a cada dimensión sobre una base de 100 puntos. Se
            dividen en las siguientes <strong>dimensiones:</strong>
          </p>
        </div>
      </div>

      <div className='bg-gray-100 py-12 sm:px-10'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {tableros.map((tablero) => {
              // Calcular el puntaje total del tablero
              const puntajeTotal = calcularPuntajeTotal(tablero.indicadores)

              return (
                <div
                  key={tablero.id}
                  className='bg-blue-50 rounded-lg shadow-md overflow-hidden'
                >
                  <HeaderVelocimetro tablero={tablero} logo={logo} />

                  <Velocimetro puntajeTotal={puntajeTotal} />

                  <TablaIndicadores tablero={tablero} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default IndicadoresPage
