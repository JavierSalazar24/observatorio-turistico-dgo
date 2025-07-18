import { Link } from 'react-router'

const publicaciones = [
  {
    id: 1,
    titulo: 'Perfil del Visitante Durango 2025',
    descripcion:
      'Análisis detallado del perfil socioeconómico, hábitos de viaje y preferencias de los turistas que visitan el estado.',
    fecha: 'Marzo 2025',
    imagen: 'https://placehold.co/600x400',
    categoria: 'Estudio',
    url: '#'
  },
  {
    id: 2,
    titulo: 'Barómetro Turístico: Primer Trimestre 2025',
    descripcion:
      'Resultados del monitoreo de la actividad turística durante el primer trimestre del año en curso.',
    fecha: 'Abril 2025',
    imagen: 'https://placehold.co/600x400',
    categoria: 'Informe',
    url: '#'
  },
  {
    id: 3,
    titulo: 'Impacto Económico del Turismo en Durango',
    descripcion:
      'Estudio sobre la contribución del sector turístico a la economía del estado y sus municipios.',
    fecha: 'Febrero 2025',
    imagen: 'https://placehold.co/600x400',
    categoria: 'Investigación',
    url: '#'
  },
  {
    id: 4,
    titulo: 'Tendencias del Turismo Sostenible',
    descripcion:
      'Análisis de las tendencias actuales en turismo sostenible y su aplicación en el contexto de Guanajuato.',
    fecha: 'Enero 2025',
    imagen: 'https://placehold.co/600x400',
    categoria: 'Tendencias',
    url: '#'
  }
]

export const PublicacionesRecientes = () => {
  return (
    <section className='py-16 bg-white sm:mx-10'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-20'>
          PUBLICACIONES TURÍSTICAS RECIENTES
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {publicaciones.map((pub) => (
            <div
              key={pub.id}
              className='bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow'
            >
              <div className='relative'>
                <img
                  src={pub.imagen}
                  alt={pub.titulo}
                  className='w-full h-48 object-cover'
                />
                <div className='absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 m-2 rounded'>
                  {pub.categoria}
                </div>
              </div>
              <div className='p-5'>
                <p className='text-gray-500 text-sm mb-2'>{pub.fecha}</p>
                <h3 className='text-xl font-bold mb-2 text-gray-800 line-clamp-2'>
                  {pub.titulo}
                </h3>
                <p className='text-gray-600 mb-4 line-clamp-3'>
                  {pub.descripcion}
                </p>
                <a
                  href={pub.url}
                  className='inline-block text-orange-500 hover:text-orange-600 font-medium transition-colors'
                >
                  Leer más
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-16 text-center'>
          <Link
            className='px-5 py-2 bg-primary hover:bg-primary-hover text-xl text-white rounded-sm'
            to='/publicaciones'
          >
            Ver todas las publicaciones
          </Link>
        </div>
      </div>
    </section>
  )
}
