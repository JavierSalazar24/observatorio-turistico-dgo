export const useIndicadores = () => {
  // Datos para los tableros
  const tableros = [
    {
      id: 1,
      titulo: 'Demanda Turística',
      color: '#f26522',
      indicadores: [
        {
          codigo: 'OTD-DT01',
          nombre: 'Número de visitantes (nacionales e internacionales)',
          valorMaximo: 10,
          puntajeAlcanzado: 0
        },
        {
          codigo: 'OTD-DT02',
          nombre: 'Pernoctaciones promedio por visitante',
          valorMaximo: 15,
          puntajeAlcanzado: 0
        },
        {
          codigo: 'OTD-DT03',
          nombre: 'Gasto promedio por turista',
          valorMaximo: 15,
          puntajeAlcanzado: 0
        },
        {
          codigo: 'OTD-DT04',
          nombre: 'Origen geográfico de los visitantes',
          valorMaximo: 15,
          puntajeAlcanzado: 15
        },
        {
          codigo: 'OTD-DT05',
          nombre:
            'Motivo del viaje (negocios, placer, naturaleza, cultura, etc.)',
          valorMaximo: 10,
          puntajeAlcanzado: 0
        },
        {
          codigo: 'OTD-DT06',
          nombre: 'Medio de transporte utilizado',
          valorMaximo: 15,
          puntajeAlcanzado: 0
        },
        {
          codigo: 'OTD-DT07',
          nombre: 'Nivel de satisfacción del turista',
          valorMaximo: 10,
          puntajeAlcanzado: 0
        },
        {
          codigo: 'OTD-DT08',
          nombre: 'Repetición de la visita (turismo recurrente)',
          valorMaximo: 10,
          puntajeAlcanzado: 10
        }
      ]
    },
    {
      id: 2,
      titulo: 'Oferta Turística',
      color: '#f26522',
      indicadores: [
        {
          codigo: 'OTD-OT01',
          nombre:
            'Número de establecimientos de hospedaje (hoteles, hostales, cabañas, etc.)',
          valorMaximo: 5,
          puntajeAlcanzado: 0
        },
        {
          codigo: 'OTD-OT02',
          nombre: 'Número de habitaciones y camas disponibles',
          valorMaximo: 10,
          puntajeAlcanzado: 0
        },
        {
          codigo: 'OTD-OT03',
          nombre: 'Tasa de ocupación hotelera',
          valorMaximo: 10,
          puntajeAlcanzado: 5
        },
        {
          codigo: 'OTD-OT04',
          nombre: 'Número de agencias de viajes, guías y turoperadores',
          valorMaximo: 15,
          puntajeAlcanzado: 7.5
        },
        {
          codigo: 'OTD-OT05',
          nombre:
            'Inventario de atractivos turísticos (naturales, culturales, gastronómicos)',
          valorMaximo: 15,
          puntajeAlcanzado: 15
        },
        {
          codigo: 'OTD-OT06',
          nombre:
            'Servicios turísticos disponibles (restaurantes, transporte local, etc.)',
          valorMaximo: 15,
          puntajeAlcanzado: 15
        },
        {
          codigo: 'OTD-OT07',
          nombre:
            'Certificaciones de calidad (Distintivo H, Punto Limpio, etc.)',
          valorMaximo: 10,
          puntajeAlcanzado: 10
        }
      ]
    },
    {
      id: 3,
      titulo: 'Economía',
      color: '#f26522',
      indicadores: [
        {
          codigo: 'OTD-EC01',
          nombre: 'Contibución del turismo al PIB estatal',
          valorMaximo: 15,
          puntajeAlcanzado: 10
        },
        {
          codigo: 'OTD-EC02',
          nombre: 'Ingresos generados por turismo',
          valorMaximo: 20,
          puntajeAlcanzado: 15
        },
        {
          codigo: 'OTD-EC03',
          nombre: 'Empleo directo e indirecto generado por el sector turístico',
          valorMaximo: 10,
          puntajeAlcanzado: 5
        },
        {
          codigo: 'OTD-EC04',
          nombre: 'Inversión pública y privada en infraestructura turística',
          valorMaximo: 15,
          puntajeAlcanzado: 10
        }
      ]
    },
    {
      id: 4,
      titulo: 'Sociocultural',
      color: '#f26522',
      indicadores: [
        {
          codigo: 'OTD-SC01',
          nombre:
            'Nivel de participación de comunidades locales en actividad turísticas',
          valorMaximo: 15,
          puntajeAlcanzado: 5
        },
        {
          codigo: 'OTD-SC02',
          nombre: 'Percepción del turismo por parte de los residentes',
          valorMaximo: 15,
          puntajeAlcanzado: 10
        },
        {
          codigo: 'OTD-SC03',
          nombre: 'Impacto del turismo en las costumbres y tradiciones locales',
          valorMaximo: 15,
          puntajeAlcanzado: 5
        },
        {
          codigo: 'OTD-SC04',
          nombre: 'Actividades de fortalecimiento del patrimonio cultural',
          valorMaximo: 10,
          puntajeAlcanzado: 10
        }
      ]
    },
    {
      id: 4,
      titulo: 'Ambiental',
      color: '#f26522',
      indicadores: [
        {
          codigo: 'OTD-AM01',
          nombre: 'Capacidad de carga de los destinos naturales',
          valorMaximo: 15,
          puntajeAlcanzado: 5
        },
        {
          codigo: 'OTD-AM02',
          nombre: 'Gestión de residuos sólidos en zonas turísticas',
          valorMaximo: 15,
          puntajeAlcanzado: 10
        },
        {
          codigo: 'OTD-AM03',
          nombre:
            'Consumo de agua y energía en zonas de alta afluencia turística',
          valorMaximo: 15,
          puntajeAlcanzado: 5
        },
        {
          codigo: 'OTD-AM04',
          nombre: 'Áreas naturales protegidas con uso turístico regulado',
          valorMaximo: 10,
          puntajeAlcanzado: 10
        },
        {
          codigo: 'OTD-AM05',
          nombre: 'Programas de turismo sustentable o ecoturismo',
          valorMaximo: 15,
          puntajeAlcanzado: 5
        }
      ]
    },
    {
      id: 4,
      titulo: 'Gobernanza y Gestión',
      color: '#f26522',
      indicadores: [
        {
          codigo: 'OTD-GG01',
          nombre: 'Existencia de planes de desarollo turístico vigentes',
          valorMaximo: 15,
          puntajeAlcanzado: 8
        },
        {
          codigo: 'OTD-GG02',
          nombre:
            'Participación de los sectores público y privado en la planeación',
          valorMaximo: 15,
          puntajeAlcanzado: 11
        },
        {
          codigo: 'OTD-GG03',
          nombre: 'Alianzas estratégicas (interinstitucionales o con academia)',
          valorMaximo: 15,
          puntajeAlcanzado: 7
        },
        {
          codigo: 'OTD-GG04',
          nombre: 'Nivel de cumplimiento de normas turísticas',
          valorMaximo: 10,
          puntajeAlcanzado: 10
        },
        {
          codigo: 'OTD-GG05',
          nombre:
            'Número de eventos, ferias o campañas de promoción realizadas',
          valorMaximo: 15,
          puntajeAlcanzado: 9
        }
      ]
    }
  ]

  // Función para calcular el puntaje total de un tablero
  const calcularPuntajeTotal = (indicadores) => {
    return indicadores.reduce(
      (total, indicador) => total + indicador.puntajeAlcanzado,
      0
    )
  }

  return { tableros, calcularPuntajeTotal }
}
