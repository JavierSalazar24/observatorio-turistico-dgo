import { useRef } from 'react'

export const usePublicaciones = () => {
  const carouselRef = useRef(null)

  // Función para ir a la siguiente diapositiva
  const nextSlide = () => {
    if (carouselRef.current) {
      const itemWidth =
        carouselRef.current.querySelector('.carousel-item').offsetWidth + 16 // width + gap
      carouselRef.current.scrollBy({ left: itemWidth * 1, behavior: 'smooth' })
    }
  }

  // Función para ir a la diapositiva anterior
  const prevSlide = () => {
    if (carouselRef.current) {
      const itemWidth =
        carouselRef.current.querySelector('.carousel-item').offsetWidth + 16 // width + gap
      carouselRef.current.scrollBy({ left: -itemWidth * 1, behavior: 'smooth' })
    }
  }

  return {
    carouselRef,
    nextSlide,
    prevSlide
  }
}
