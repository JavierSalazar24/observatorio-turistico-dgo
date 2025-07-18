import { ChevronLeft, ChevronRight } from 'lucide-react'
import { HeroBanner } from '../components/HeroBanner'
import { PublicacionCard } from '../components/PublicacionCard'
import { DescripcionPages } from '../components/DescripcionPages'
import { usePublicaciones } from '../hook/usePublicaciones'

// Datos para el carrusel de publicaciones
const publicaciones = [
  {
    id: 1,
    titulo: 'Boletines Mensuales',
    imagen: 'https://placehold.co/600x400',
    descripcion:
      'Información mensual sobre indicadores turísticos del estado de Durango.',
    url: '#'
  },
  {
    id: 2,
    titulo: 'Perfil del Visitante Destino',
    imagen: 'https://placehold.co/600x400',
    descripcion:
      'Análisis detallado del perfil socioeconómico de los visitantes por destino.',
    url: '#'
  },
  {
    id: 3,
    titulo: 'Perfil del Visitante Evento',
    imagen: 'https://placehold.co/600x400',
    descripcion:
      'Características y comportamiento de los visitantes durante eventos especiales.',
    url: '#'
  },
  {
    id: 4,
    titulo: 'Medición de Turismo',
    imagen: 'https://placehold.co/600x400',
    descripcion:
      'Metodologías y resultados de la medición de la actividad turística en el estado.',
    url: '#'
  },
  {
    id: 5,
    titulo: 'Estudios Especiales',
    imagen: 'https://placehold.co/600x400',
    descripcion:
      'Investigaciones específicas sobre temas relevantes para el sector turístico.',
    url: '#'
  },
  {
    id: 6,
    titulo: 'Informes Anuales',
    imagen: 'https://placehold.co/600x400',
    descripcion:
      'Resumen anual de la actividad turística en el estado de Durango.',
    url: '#'
  }
]

const PublicacionesPage = () => {
  const { carouselRef, nextSlide, prevSlide } = usePublicaciones()

  return (
    <div className='min-h-screen flex flex-col'>
      <HeroBanner
        img='https://noro.mx/wp-content/uploads/2024/11/durango.travel_1721146029_3413542760174466280_5564348943.jpg'
        alt='Imagen de fondo del módulo de Publicaciones'
        text='PUBLICACIONES'
      />

      {/* Centro Documental Section */}
      <div className='bg-white py-12 sm:mx-16'>
        <div className='container mx-auto px-4'>
          <h2 className='sm:text-4xl text-2xl font-bold text-gray-800 mb-6'>
            CENTRO DOCUMENTAL
          </h2>
          <DescripcionPages
            text='Este es un espacio colaborativo en permanente construcción y
            enriquecimiento en el que cualquier persona que así lo desee, puede
            ingresar sus investigaciones, estudios, ensayos y publicaciones que
            quiera compartir con los usuarios del portal del observatorio.'
          />

          <h3 className='sm:text-3xl text-2xl font-bold text-gray-800 mb-8'>
            Secciones Centro Documental
          </h3>

          {/* Carrusel de Publicaciones */}
          <div className='relative'>
            {/* Botón Anterior */}
            <button
              onClick={prevSlide}
              className='cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 bg-orange-500 hover:bg-orange-600 text-white rounded-full sm:w-16 sm:h-16 w-10 h-10 flex items-center justify-center shadow-lg'
              aria-label='Anterior'
            >
              <ChevronLeft size={30} />
            </button>

            {/* Carrusel */}
            <div
              ref={carouselRef}
              className='flex overflow-x-hidden gap-4 pb-8 sm:px-4'
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {publicaciones.map((pub) => (
                <PublicacionCard pub={pub} key={pub.id} />
              ))}
            </div>

            {/* Botón Siguiente */}
            <button
              onClick={nextSlide}
              className='cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 bg-orange-500 hover:bg-orange-600 text-white rounded-full sm:w-16 sm:h-16 w-10 h-10 flex items-center justify-center shadow-lg'
              aria-label='Siguiente'
            >
              <ChevronRight size={30} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublicacionesPage
