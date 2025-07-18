import { HeroSlider } from '../components/HeroSlider'
import { OcupacionHotelera } from '../components/OcupacionHotelera'
import { PublicacionesRecientes } from '../components/PublicacionesRecientes'
import { IndicadoresTuristicos } from '../components/IndicadoresTuristicos'

function InicioPage() {
  return (
    <>
      <HeroSlider />

      <IndicadoresTuristicos />

      <OcupacionHotelera />

      <PublicacionesRecientes />
    </>
  )
}

export default InicioPage
