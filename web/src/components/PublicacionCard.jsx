export const PublicacionCard = ({ pub }) => {
  return (
    <div className='carousel-item flex-shrink-0 w-full md:w-[calc(33.333%-16px)] scroll-snap-align-start'>
      <div className='bg-gray-50 rounded-lg overflow-hidden shadow-md h-full'>
        <img
          src={pub.imagen}
          alt={pub.titulo}
          className='w-full h-64 object-cover'
        />
        <div className='p-6'>
          <h4 className='text-2xl font-bold text-gray-800 mb-2'>
            {pub.titulo}
          </h4>
          <p className='text-gray-600 mb-4'>{pub.descripcion}</p>
          <a
            href={pub.url}
            className='text-orange-500 hover:text-orange-600 font-medium'
          >
            Seguir leyendo...
          </a>
        </div>
      </div>
    </div>
  )
}
