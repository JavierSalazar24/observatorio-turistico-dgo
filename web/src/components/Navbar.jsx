import { Link, useLocation } from 'react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/imgs/logo_fondo.jpg'
import logo_unes from '../assets/imgs/logo_unes_sin.png'

export const Navbar = ({ onOpen }) => {
  const { pathname } = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className='bg-black py-4 relative z-50'>
        <div className='container mx-auto px-4'>
          <div className='flex justify-between items-center'>
            {/* Logos */}
            <Link to='/' className='flex items-center'>
              <img
                src={logo || '/placeholder.svg'}
                alt='Logo OTD'
                className='h-12 md:h-16 lg:h-20'
              />
              <img
                src={logo_unes || '/placeholder.svg'}
                alt='Logo UNES'
                className='h-12 md:h-16 lg:h-20 ml-2 md:ml-4'
              />
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center space-x-6'>
              <Link
                to='/otd'
                className={`hover:text-primary text-sm ${
                  pathname === '/otd' ? 'text-primary' : 'text-white'
                }`}
              >
                OTD
              </Link>
              <a
                href='https://guanajuato.mx/'
                target='_blank'
                className='text-white hover:text-primary text-sm'
              >
                INFORMACIÓN TURÍSTICA
              </a>
              <Link
                to='/entorno-nacional'
                className={`hover:text-primary text-sm ${
                  pathname === '/entorno-nacional'
                    ? 'text-primary'
                    : 'text-white'
                }`}
              >
                ENTORNO NACIONAL
              </Link>
              <button
                type='button'
                onClick={onOpen}
                className='text-white hover:text-primary text-sm cursor-pointer'
              >
                SOLICITUDES
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className='md:hidden text-white hover:text-primary p-2 relative z-50'
              aria-label='Toggle mobile menu'
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? 'max-h-77 opacity-100 mt-4 pb-4'
                : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            <div className='border-t border-gray-700 pt-6'>
              <div className='flex flex-col space-y-3'>
                <Link
                  to='/'
                  className={`hover:text-primary text-sm transition-colors ${
                    pathname === '/' ? 'text-primary' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  INICIO
                </Link>
                <Link
                  to='/indicadores'
                  className={`hover:text-primary text-sm transition-colors ${
                    pathname === '/indicadores' ? 'text-primary' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  INDICADORES
                </Link>
                <Link
                  to='/publicaciones'
                  className={`hover:text-primary text-sm transition-colors ${
                    pathname === '/publicaciones'
                      ? 'text-primary'
                      : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  PUBLICACIONES
                </Link>
                <Link
                  to='/inventario-turistico'
                  className={`hover:text-primary text-sm transition-colors ${
                    pathname === '/inventario-turistico'
                      ? 'text-primary'
                      : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  INVENTARIO TURÍSTICO
                </Link>
                <Link
                  to='/otd'
                  className={`hover:text-primary text-sm transition-colors ${
                    pathname === '/otd' ? 'text-primary' : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  OTD
                </Link>
                <a
                  href='https://guanajuato.mx/'
                  target='_blank'
                  className='text-white hover:text-primary text-sm transition-colors'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  INFORMACIÓN TURÍSTICA
                </a>
                <Link
                  to='/entorno-nacional'
                  className={`hover:text-primary text-sm transition-colors ${
                    pathname === '/entorno-nacional'
                      ? 'text-primary'
                      : 'text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ENTORNO NACIONAL
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    onOpen()
                    setIsMobileMenuOpen(false)
                  }}
                  className='text-white hover:text-primary text-sm cursor-pointer text-left transition-colors'
                >
                  SOLICITUDES
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className='bg-gray-100 py-2 md:block hidden'>
        <div className='container mx-auto px-4'>
          <ul className='flex space-x-3 md:space-x-6 overflow-x-auto justify-center scrollbar-hide'>
            <li className='flex-shrink-0'>
              <Link
                to='/'
                className={`text-xs md:text-sm font-medium whitespace-nowrap ${
                  pathname === '/' ? 'text-primary' : 'text-gray-700'
                }`}
              >
                INICIO
              </Link>
            </li>
            <li className='flex-shrink-0'>
              <Link
                to='/indicadores'
                className={`text-xs md:text-sm font-medium whitespace-nowrap ${
                  pathname === '/indicadores' ? 'text-primary' : 'text-gray-700'
                }`}
              >
                INDICADORES
              </Link>
            </li>
            <li className='flex-shrink-0'>
              <Link
                to='/publicaciones'
                className={`text-xs md:text-sm font-medium whitespace-nowrap ${
                  pathname === '/publicaciones'
                    ? 'text-primary'
                    : 'text-gray-700'
                }`}
              >
                PUBLICACIONES
              </Link>
            </li>
            <li className='flex-shrink-0'>
              <Link
                to='/inventario-turistico'
                className={`text-xs md:text-sm font-medium whitespace-nowrap ${
                  pathname === '/inventario-turistico'
                    ? 'text-primary'
                    : 'text-gray-700'
                }`}
              >
                INVENTARIO TURÍSTICO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
