import { lazy, Suspense, useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router'

import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { RedesSociales } from './components/RedesSociales'
import { FormularioContacto } from './components/FormularioContacto'
import Loading from './components/Loading'

const InicioPage = lazy(() => import('./pages/InicioPage'))
const IndicadoresPage = lazy(() => import('./pages/IndicadoresPage'))
const PublicacionesPage = lazy(() => import('./pages/PublicacionesPage'))
const InventarioTuristicoPage = lazy(() =>
  import('./pages/InventarioTuristicoPage')
)
const OTDPage = lazy(() => import('./pages/OTDPage'))
const EntornoNacionalPage = lazy(() => import('./pages/EntornoNacionalPage'))

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  const openModal = () => setIsContactModalOpen(true)
  const closeModal = () => setIsContactModalOpen(false)

  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <div className='min-h-screen flex flex-col'>
          <Navbar onOpen={openModal} />
          <Routes>
            <Route index path='/' element={<InicioPage />} />

            <Route path='/indicadores' element={<IndicadoresPage />} />
            <Route path='/publicaciones' element={<PublicacionesPage />} />
            <Route
              path='/inventario-turistico'
              element={<InventarioTuristicoPage />}
            />
            <Route path='/otd' element={<OTDPage />} />
            <Route path='/entorno-nacional' element={<EntornoNacionalPage />} />
          </Routes>

          <Footer onOpen={openModal} />
          <RedesSociales />
          <FormularioContacto
            isOpen={isContactModalOpen}
            onClose={closeModal}
          />
        </div>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
