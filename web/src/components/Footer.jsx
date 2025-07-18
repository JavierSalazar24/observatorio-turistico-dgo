import { Link } from 'react-router'
import { MdLocationOn } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'
import logo from '../assets/imgs/logotipo_fondo.jpg'
import logo_unes from '../assets/imgs/logotipo_unes_sin.png'

export const Footer = ({ onOpen }) => {
  return (
    <footer className='bg-black text-white'>
      <div className='container mx-auto px-4 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='md:col-span-1 text-center'>
            <Link
              to='/'
              className='flex items-center mb-4 flex-row md:flex-col gap-3 lg:flex-row'
            >
              <img src={logo} alt='Logo OTD' className='h-28 mx-auto' />
              <img src={logo_unes} alt='Logo UNES' className='h-28 mx-auto' />
            </Link>
            <p className='text-gray-400 text-sm mt-4'>
              Observatorio Turístico de Durango, espacio de análisis del sector
              turismo.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className='text-lg font-bold mb-4 text-primary'>
              Enlaces Rápidos
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='text-gray-400 hover:text-white text-sm'>
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to='/indicadores'
                  className='text-gray-400 hover:text-white text-sm'
                >
                  Indicadores
                </Link>
              </li>
              <li>
                <Link
                  to='/publicaciones'
                  className='text-gray-400 hover:text-white text-sm'
                >
                  Publicaciones
                </Link>
              </li>
              <li>
                <Link
                  to='/inventario-turistico'
                  className='text-gray-400 hover:text-white text-sm'
                >
                  Inventario Turístico
                </Link>
              </li>
              <li>
                <button
                  type='button'
                  onClick={onOpen}
                  className='text-gray-400 hover:text-white text-sm cursor-pointer'
                >
                  Solicitudes
                </button>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className='text-lg font-bold mb-4 text-primary'>Contacto</h3>
            <ul className='space-y-2'>
              <li className='flex items-start'>
                <MdLocationOn className='text-primary mr-2 mt-0.5 h-5 w-14' />
                <span className='text-gray-400 text-sm'>
                  <a
                    href='https://maps.app.goo.gl/UHpxZbt88QyAfgpf6'
                    target='_blank'
                    className='hover:underline'
                  >
                    Av. 20 de noviembre y #1212 ote. Local 59, Colonia Nueva
                    Vizcaya, C.P. 34080, Durango, Durango, México.
                  </a>
                </span>
              </li>

              <li className='flex items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-primary mr-2 mt-0.5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                <span className='text-gray-400 text-sm'>
                  <a
                    href='mailto:clusturdgo2410@gmail.com'
                    className='hover:underline'
                  >
                    clusturdgo2410@gmail.com
                  </a>
                </span>
              </li>
              <li className='flex items-start'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-primary mr-2 mt-0.5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                  />
                </svg>
                <span className='text-gray-400 text-sm'>
                  <a href='tel:5535550996' className='hover:underline'>
                    553-555-0996
                  </a>
                </span>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className='text-lg font-bold mb-4 text-primary'>Síguenos</h3>
            <div className='flex space-x-4'>
              <a
                href='https://www.facebook.com/ClusturDurango'
                target='_blank'
                className='bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-white'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
                </svg>
              </a>
              <a
                href='https://www.instagram.com/clusturdgo'
                target='_blank'
                className='bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-white'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
              </a>
              <a
                href='mailto:clusturdgo2410@gmail.com'
                className='bg-gray-800 hover:bg-primary w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300'
              >
                <AiOutlineMail className='h-5 w-5 text-white' />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='border-t border-gray-800'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-500 text-sm'>
              © {new Date().getFullYear()} Observatorio Turístico del Estado de
              Durango. Todos los derechos reservados.
            </p>
            <div className='flex space-x-6 mt-4 md:mt-0'>
              <a href='#' className='text-gray-500 hover:text-white text-sm'>
                Términos y Condiciones
              </a>
              <a href='#' className='text-gray-500 hover:text-white text-sm'>
                Política de Privacidad
              </a>
              <a href='#' className='text-gray-500 hover:text-white text-sm'>
                Aviso Legal
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
