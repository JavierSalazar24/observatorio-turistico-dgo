import { useEffect, useState } from 'react'

const images = [
  {
    id: 1,
    img: 'https://blog.vivaaerobus.com/wp-content/uploads/2020/09/que-hacer-en-durango.jpg',
    title: '¡Consúltalo Aquí!',
    url: '#'
  },
  {
    id: 2,
    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/28/e1/df/salto-del-agua-llovida.jpg?w=1200&h=700&s=1',
    title: 'Descubre Durango',
    url: '#'
  },
  {
    id: 3,
    img: 'https://escapadas.mexicodesconocido.com.mx/wp-content/uploads/2023/01/viejooeste.jpeg',
    title: 'Turismo sostenible',
    url: '#'
  }
]

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Función para ir a la siguiente diapositiva
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
  }

  // Cambio automático de diapositivas
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className='relative h-[500px] overflow-hidden'>
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index
                ? 'opacity-100 z-10'
                : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={image.img}
              alt={`Slide ${image.id}`}
              className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 bg-black/40 flex flex-col justify-center items-start px-8 md:px-16'>
              <div className='max-w-2xl'>
                <h1 className='text-white text-3xl md:text-4xl font-bold mb-4 text-sombreado'>
                  {image.title}
                </h1>
                <a
                  href={image.url}
                  className='text-sombreado-sm border-2 rounded-sm font-semibold border-white text-white px-6 py-2 hover:bg-white hover:text-black transition duration-300'
                >
                  CONOCER MÁS
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <div className='absolute bottom-5 left-2/3 transform -translate-x-1/2 flex space-x-2 z-20 hidden lg:block'>
          {[0, 1, 2].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 cursor-pointer rounded-full transition-colors ${
                currentSlide === index ? 'bg-primary' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className='container mx-auto px-4 -mt-20 relative z-10'>
        <div className='bg-white rounded-lg shadow-lg p-8 max-w-xl md:ml-12'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>
            ¿Qué es el Observatorio Turístico de Durango?
          </h2>
          <p className='text-gray-700'>
            Es un espacio de análisis, técnico, intersectorial e
            interdisciplinario bajo el cual un grupo de personas y/o entidades
            se agrupan y organizan con el propósito de vigilar, medir y
            verificar la evolución del sector turismo en el Estado de Durango.
          </p>
        </div>
      </div>
    </>
  )
}
