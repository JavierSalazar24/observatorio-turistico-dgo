import { useState } from 'react'
import { InformacionOcupacion } from './InformacionOcupacion'

// Datos de las regiones
const regiones = [
  {
    id: 1,
    nombre: 'Victoria de Durango',
    datos: [
      { mes: 'Febrero 2025', porcentaje: '25.00%' },
      { mes: 'Enero 2025', porcentaje: '23.00%' },
      { mes: 'Diciembre 2024', porcentaje: '28.00%' },
      { mes: 'Noviembre 2024', porcentaje: '29.00%' },
      { mes: 'Octubre 2024', porcentaje: '29.00%' },
      { mes: 'Septiembre 2024', porcentaje: '37.00%' }
    ],
    color: '#333333'
  },
  {
    id: 2,
    nombre: 'Gómez Palacio',
    datos: [
      { mes: 'Febrero 2025', porcentaje: '42.00%' },
      { mes: 'Enero 2025', porcentaje: '38.00%' },
      { mes: 'Diciembre 2024', porcentaje: '45.00%' },
      { mes: 'Noviembre 2024', porcentaje: '40.00%' },
      { mes: 'Octubre 2024', porcentaje: '39.00%' },
      { mes: 'Septiembre 2024', porcentaje: '41.00%' }
    ],
    color: '#f26522' // Color naranja
  },
  {
    id: 3,
    nombre: 'Guadalupe Victoria',
    datos: [
      { mes: 'Febrero 2025', porcentaje: '65.00%' },
      { mes: 'Enero 2025', porcentaje: '60.00%' },
      { mes: 'Diciembre 2024', porcentaje: '70.00%' },
      { mes: 'Noviembre 2024', porcentaje: '62.00%' },
      { mes: 'Octubre 2024', porcentaje: '64.00%' },
      { mes: 'Septiembre 2024', porcentaje: '68.00%' }
    ],
    color: '#f26522' // Color naranja
  },
  {
    id: 4,
    nombre: 'Vicente Guerrero',
    datos: [
      { mes: 'Febrero 2025', porcentaje: '58.00%' },
      { mes: 'Enero 2025', porcentaje: '55.00%' },
      { mes: 'Diciembre 2024', porcentaje: '62.00%' },
      { mes: 'Noviembre 2024', porcentaje: '59.00%' },
      { mes: 'Octubre 2024', porcentaje: '57.00%' },
      { mes: 'Septiembre 2024', porcentaje: '60.00%' }
    ],
    color: '#f26522' // Color naranja
  },
  {
    id: 5,
    nombre: 'Santiago Papasquaro',
    datos: [
      { mes: 'Febrero 2025', porcentaje: '35.00%' },
      { mes: 'Enero 2025', porcentaje: '32.00%' },
      { mes: 'Diciembre 2024', porcentaje: '38.00%' },
      { mes: 'Noviembre 2024', porcentaje: '34.00%' },
      { mes: 'Octubre 2024', porcentaje: '33.00%' },
      { mes: 'Septiembre 2024', porcentaje: '36.00%' }
    ],
    color: '#f26522' // Color naranja
  },
  {
    id: 6,
    nombre: 'Lerdo',
    datos: [
      { mes: 'Febrero 2025', porcentaje: '30.00%' },
      { mes: 'Enero 2025', porcentaje: '28.00%' },
      { mes: 'Diciembre 2024', porcentaje: '33.00%' },
      { mes: 'Noviembre 2024', porcentaje: '31.00%' },
      { mes: 'Octubre 2024', porcentaje: '29.00%' },
      { mes: 'Septiembre 2024', porcentaje: '32.00%' }
    ],
    color: '#f26522' // Color naranja
  },
  {
    id: 7,
    nombre: 'Canatlán',
    datos: [
      { mes: 'Febrero 2025', porcentaje: '27.00%' },
      { mes: 'Enero 2025', porcentaje: '25.00%' },
      { mes: 'Diciembre 2024', porcentaje: '30.00%' },
      { mes: 'Noviembre 2024', porcentaje: '28.00%' },
      { mes: 'Octubre 2024', porcentaje: '26.00%' },
      { mes: 'Septiembre 2024', porcentaje: '29.00%' }
    ],
    color: '#f26522' // Color naranja
  },
  {
    id: 8,
    nombre: 'Guanaceví',
    datos: [
      { mes: 'Febrero 2025', porcentaje: '32.00%' },
      { mes: 'Enero 2025', porcentaje: '30.00%' },
      { mes: 'Diciembre 2024', porcentaje: '35.00%' },
      { mes: 'Noviembre 2024', porcentaje: '33.00%' },
      { mes: 'Octubre 2024', porcentaje: '31.00%' },
      { mes: 'Septiembre 2024', porcentaje: '34.00%' }
    ],
    color: '#f26522' // Color naranja
  }
]

// Datos por default del Estado completo
const datosEstado = {
  nombre: 'Estado de Durango',
  datos: [
    { mes: 'Febrero 2025', porcentaje: '45.50%' },
    { mes: 'Enero 2025', porcentaje: '42.30%' },
    { mes: 'Diciembre 2024', porcentaje: '48.70%' },
    { mes: 'Noviembre 2024', porcentaje: '44.20%' },
    { mes: 'Octubre 2024', porcentaje: '43.80%' },
    { mes: 'Septiembre 2024', porcentaje: '46.90%' }
  ]
}

export const OcupacionHotelera = () => {
  const [hoveredRegion, setHoveredRegion] = useState(null)

  return (
    <div className='bg-gray-100 py-16 sm:px-10'>
      <div className='container mx-auto px-4'>
        <h2 className='sm:text-4xl font-bold text-center text-gray-800 mb-4 text-2xl'>
          CONSULTA EL % DE OCUPACIÓN HOTELERA
        </h2>
        <h3 className='sm:text-3xl font-bold text-center text-gray-700 mb-8 text-xl'>
          8 PRINCIPALES DESTINOS
        </h3>
        <p className='text-center text-gray-600 mb-12 text-sm sm:text-base'>
          Para consultar la información de los destinos resaltados posiciona tu
          cursor sobre ellos.
        </p>

        <div className='flex flex-col md:flex-row items-start justify-center gap-8'>
          {/* Cuadrícula de ciudades mejorada */}
          <div className='w-full md:w-1/2'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {regiones.map((region) => (
                <div
                  key={region.id}
                  className={`aspect-square flex items-center justify-center p-2 rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg relative overflow-hidden ${
                    hoveredRegion?.id === region.id
                      ? 'ring-4 ring-orange-300'
                      : ''
                  }`}
                  style={{ backgroundColor: region.color }}
                  onMouseEnter={() => setHoveredRegion(region)}
                  onMouseLeave={() => setHoveredRegion(null)}
                >
                  {/* Efecto de brillo en hover */}
                  <div
                    className={`absolute inset-0 bg-white opacity-0 transition-opacity duration-300 ${
                      hoveredRegion?.id === region.id ? 'opacity-10' : ''
                    }`}
                  ></div>

                  {/* Contenido del cuadro */}
                  <div className='text-center z-10'>
                    <h4 className='text-white text-[17px] font-bold mb-2'>
                      {region.nombre}
                    </h4>
                    <div className='text-white text-[14px] font-bold'>
                      {region.datos[0].porcentaje}
                    </div>
                    <div className='text-white text-xs mt-1 opacity-80'>
                      {region.datos[0].mes}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Información de ocupación */}
          <div className='w-full md:w-1/2 md:sticky md:top-4'>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              {hoveredRegion ? (
                <InformacionOcupacion data={hoveredRegion} />
              ) : (
                <InformacionOcupacion data={datosEstado} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
