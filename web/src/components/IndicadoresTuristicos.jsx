import { TarjetaIndicador } from './TarjetaIndicador'

export const IndicadoresTuristicos = () => {
  return (
    <div className='container mx-auto px-4 py-16'>
      <h2 className='text-3xl font-bold text-center text-gray-800 mb-12'>
        PRINCIPALES INDICADORES TURÍSTICOS
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:mx-10'>
        {/* Indicator Card 1 */}
        <TarjetaIndicador
          title='3.4 millones'
          desc='Visitantes'
          subdesc='Acumulado'
          text='Enero-Febrero'
          subtext='2025'
          svg='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
        />

        {/* Indicator Card 2 */}
        <TarjetaIndicador
          title='$8 mil 380 millones'
          desc='Derrama Económica'
          subdesc='Acumulado'
          text='Enero-Febrero'
          subtext='2025'
          svg='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />

        {/* Indicator Card 3 */}
        <TarjetaIndicador
          title='201 mil 680'
          desc='Personas Ocupadas'
          subdesc='4to Trimestre 2024'
          svg='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
        />

        {/* Indicator Card 4 */}
        <TarjetaIndicador
          title='1 mil 071'
          desc='Participantes en sensibilización turística'
          subdesc='Anual 2024'
          svg='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
        />

        {/* Indicator Card 5 */}
        <TarjetaIndicador
          title='278 mil 400'
          desc='Pasajeros al aeropuerto de Durango'
          subdesc='Acumulado'
          text='Enero - Abril'
          subtext='2025'
          svg='M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </div>
    </div>
  )
}
