import { useMemo, useState } from 'react'

export const useInventarioTuristico = () => {
  const [selectedYear, setSelectedYear] = useState('2024')
  const [selectedDestination, setSelectedDestination] = useState('')
  const [selectedHistoricalDestination, setSelectedHistoricalDestination] =
    useState('')
  const [selectedHistoricalRubro, setSelectedHistoricalRubro] = useState('')

  // Datos base para las métricas por año y destino
  const datosBase = {
    2024: {
      '': {
        // Sin filtro de destino - datos totales
        agenciasViajes: 4496,
        alimentosBebidas: 15618,
        arrendadoras: 385,
        atractivos: 5009,
        auxilioTuristico: 966,
        camposGolf: 118,
        ensenanzaTuristica: 287,
        establecimientos: 5951,
        transportadoras: 1768,
        guias: 2197,
        parquesAcuaticos: 550,
        recintos: 2194,
        spas: 1111,
        habitaciones: 193083
      },
      Durango: {
        agenciasViajes: 450,
        alimentosBebidas: 1800,
        arrendadoras: 45,
        atractivos: 650,
        auxilioTuristico: 120,
        camposGolf: 15,
        ensenanzaTuristica: 35,
        establecimientos: 780,
        transportadoras: 220,
        guias: 280,
        parquesAcuaticos: 65,
        recintos: 180,
        spas: 95,
        habitaciones: 25000
      },
      Mapimí: {
        agenciasViajes: 120,
        alimentosBebidas: 450,
        arrendadoras: 12,
        atractivos: 180,
        auxilioTuristico: 35,
        camposGolf: 3,
        ensenanzaTuristica: 8,
        establecimientos: 220,
        transportadoras: 65,
        guias: 85,
        parquesAcuaticos: 18,
        recintos: 45,
        spas: 25,
        habitaciones: 8000
      },
      'Nombre de Dios': {
        agenciasViajes: 890,
        alimentosBebidas: 3200,
        arrendadoras: 85,
        atractivos: 1200,
        auxilioTuristico: 180,
        camposGolf: 25,
        ensenanzaTuristica: 55,
        establecimientos: 1200,
        transportadoras: 350,
        guias: 420,
        parquesAcuaticos: 95,
        recintos: 380,
        spas: 220,
        habitaciones: 35000
      },
      'Pueblo Nuevo': {
        agenciasViajes: 180,
        alimentosBebidas: 680,
        arrendadoras: 22,
        atractivos: 320,
        auxilioTuristico: 55,
        camposGolf: 8,
        ensenanzaTuristica: 15,
        establecimientos: 380,
        transportadoras: 95,
        guias: 125,
        parquesAcuaticos: 28,
        recintos: 75,
        spas: 42,
        habitaciones: 12500
      },
      'Peñón Blanco': {
        agenciasViajes: 95,
        alimentosBebidas: 320,
        arrendadoras: 8,
        atractivos: 150,
        auxilioTuristico: 25,
        camposGolf: 2,
        ensenanzaTuristica: 5,
        establecimientos: 180,
        transportadoras: 45,
        guias: 65,
        parquesAcuaticos: 12,
        recintos: 35,
        spas: 18,
        habitaciones: 6200
      },
      'Gómez Palacio': {
        agenciasViajes: 320,
        alimentosBebidas: 1400,
        arrendadoras: 35,
        atractivos: 480,
        auxilioTuristico: 95,
        camposGolf: 12,
        ensenanzaTuristica: 25,
        establecimientos: 650,
        transportadoras: 180,
        guias: 220,
        parquesAcuaticos: 45,
        recintos: 150,
        spas: 85,
        habitaciones: 18000
      },
      Cuencamé: {
        agenciasViajes: 85,
        alimentosBebidas: 280,
        arrendadoras: 6,
        atractivos: 125,
        auxilioTuristico: 20,
        camposGolf: 1,
        ensenanzaTuristica: 4,
        establecimientos: 150,
        transportadoras: 38,
        guias: 55,
        parquesAcuaticos: 10,
        recintos: 28,
        spas: 15,
        habitaciones: 5200
      },
      'Santiago Papasquiaro': {
        agenciasViajes: 150,
        alimentosBebidas: 520,
        arrendadoras: 18,
        atractivos: 240,
        auxilioTuristico: 42,
        camposGolf: 5,
        ensenanzaTuristica: 12,
        establecimientos: 280,
        transportadoras: 75,
        guias: 95,
        parquesAcuaticos: 22,
        recintos: 58,
        spas: 32,
        habitaciones: 9800
      },
      'San Dimas': {
        agenciasViajes: 65,
        alimentosBebidas: 220,
        arrendadoras: 5,
        atractivos: 95,
        auxilioTuristico: 15,
        camposGolf: 1,
        ensenanzaTuristica: 3,
        establecimientos: 120,
        transportadoras: 28,
        guias: 42,
        parquesAcuaticos: 8,
        recintos: 22,
        spas: 12,
        habitaciones: 4200
      },
      Tepehuanes: {
        agenciasViajes: 75,
        alimentosBebidas: 250,
        arrendadoras: 6,
        atractivos: 110,
        auxilioTuristico: 18,
        camposGolf: 2,
        ensenanzaTuristica: 4,
        establecimientos: 135,
        transportadoras: 32,
        guias: 48,
        parquesAcuaticos: 9,
        recintos: 25,
        spas: 14,
        habitaciones: 4800
      }
    },
    2023: {
      '': {
        agenciasViajes: 4200,
        alimentosBebidas: 14800,
        arrendadoras: 360,
        atractivos: 4750,
        auxilioTuristico: 920,
        camposGolf: 110,
        ensenanzaTuristica: 270,
        establecimientos: 5650,
        transportadoras: 1680,
        guias: 2080,
        parquesAcuaticos: 520,
        recintos: 2080,
        spas: 1050,
        habitaciones: 185000
      },
      Durango: {
        agenciasViajes: 420,
        alimentosBebidas: 1700,
        arrendadoras: 42,
        atractivos: 620,
        auxilioTuristico: 115,
        camposGolf: 14,
        ensenanzaTuristica: 32,
        establecimientos: 740,
        transportadoras: 210,
        guias: 265,
        parquesAcuaticos: 62,
        recintos: 170,
        spas: 90,
        habitaciones: 23500
      },
      Mapimí: {
        agenciasViajes: 115,
        alimentosBebidas: 420,
        arrendadoras: 11,
        atractivos: 170,
        auxilioTuristico: 32,
        camposGolf: 3,
        ensenanzaTuristica: 7,
        establecimientos: 200,
        transportadoras: 60,
        guias: 80,
        parquesAcuaticos: 16,
        recintos: 42,
        spas: 22,
        habitaciones: 7500
      },
      'Nombre de Dios': {
        agenciasViajes: 850,
        alimentosBebidas: 3000,
        arrendadoras: 80,
        atractivos: 1150,
        auxilioTuristico: 170,
        camposGolf: 23,
        ensenanzaTuristica: 52,
        establecimientos: 1150,
        transportadoras: 330,
        guias: 400,
        parquesAcuaticos: 90,
        recintos: 360,
        spas: 210,
        habitaciones: 33000
      },
      'Pueblo Nuevo': {
        agenciasViajes: 170,
        alimentosBebidas: 650,
        arrendadoras: 20,
        atractivos: 300,
        auxilioTuristico: 52,
        camposGolf: 7,
        ensenanzaTuristica: 14,
        establecimientos: 360,
        transportadoras: 90,
        guias: 120,
        parquesAcuaticos: 26,
        recintos: 70,
        spas: 40,
        habitaciones: 12000
      },
      'Peñón Blanco': {
        agenciasViajes: 90,
        alimentosBebidas: 300,
        arrendadoras: 7,
        atractivos: 140,
        auxilioTuristico: 22,
        camposGolf: 2,
        ensenanzaTuristica: 4,
        establecimientos: 170,
        transportadoras: 42,
        guias: 60,
        parquesAcuaticos: 11,
        recintos: 32,
        spas: 16,
        habitaciones: 5800
      },
      'Gómez Palacio': {
        agenciasViajes: 300,
        alimentosBebidas: 1320,
        arrendadoras: 32,
        atractivos: 450,
        auxilioTuristico: 90,
        camposGolf: 11,
        ensenanzaTuristica: 23,
        establecimientos: 620,
        transportadoras: 170,
        guias: 210,
        parquesAcuaticos: 42,
        recintos: 140,
        spas: 80,
        habitaciones: 17000
      },
      Cuencamé: {
        agenciasViajes: 80,
        alimentosBebidas: 260,
        arrendadoras: 5,
        atractivos: 115,
        auxilioTuristico: 18,
        camposGolf: 1,
        ensenanzaTuristica: 3,
        establecimientos: 140,
        transportadoras: 35,
        guias: 50,
        parquesAcuaticos: 9,
        recintos: 25,
        spas: 13,
        habitaciones: 4900
      },
      'Santiago Papasquiaro': {
        agenciasViajes: 140,
        alimentosBebidas: 490,
        arrendadoras: 16,
        atractivos: 220,
        auxilioTuristico: 38,
        camposGolf: 4,
        ensenanzaTuristica: 11,
        establecimientos: 260,
        transportadoras: 70,
        guias: 90,
        parquesAcuaticos: 20,
        recintos: 55,
        spas: 30,
        habitaciones: 9200
      },
      'San Dimas': {
        agenciasViajes: 60,
        alimentosBebidas: 200,
        arrendadoras: 4,
        atractivos: 85,
        auxilioTuristico: 13,
        camposGolf: 1,
        ensenanzaTuristica: 2,
        establecimientos: 110,
        transportadoras: 25,
        guias: 38,
        parquesAcuaticos: 7,
        recintos: 20,
        spas: 10,
        habitaciones: 3900
      },
      Tepehuanes: {
        agenciasViajes: 70,
        alimentosBebidas: 230,
        arrendadoras: 5,
        atractivos: 100,
        auxilioTuristico: 16,
        camposGolf: 2,
        ensenanzaTuristica: 3,
        establecimientos: 125,
        transportadoras: 30,
        guias: 45,
        parquesAcuaticos: 8,
        recintos: 23,
        spas: 12,
        habitaciones: 4500
      }
    },
    2022: {
      '': {
        agenciasViajes: 3950,
        alimentosBebidas: 14200,
        arrendadoras: 340,
        atractivos: 4500,
        auxilioTuristico: 880,
        camposGolf: 105,
        ensenanzaTuristica: 250,
        establecimientos: 5400,
        transportadoras: 1600,
        guias: 1980,
        parquesAcuaticos: 490,
        recintos: 1980,
        spas: 1000,
        habitaciones: 175000
      },
      Durango: {
        agenciasViajes: 400,
        alimentosBebidas: 1620,
        arrendadoras: 40,
        atractivos: 590,
        auxilioTuristico: 110,
        camposGolf: 13,
        ensenanzaTuristica: 30,
        establecimientos: 700,
        transportadoras: 200,
        guias: 250,
        parquesAcuaticos: 58,
        recintos: 160,
        spas: 85,
        habitaciones: 22000
      }
      // Agregar datos similares para todos los otros destinos...
    },
    2021: {
      '': {
        agenciasViajes: 3700,
        alimentosBebidas: 13500,
        arrendadoras: 320,
        atractivos: 4200,
        auxilioTuristico: 840,
        camposGolf: 100,
        ensenanzaTuristica: 230,
        establecimientos: 5100,
        transportadoras: 1520,
        guias: 1880,
        parquesAcuaticos: 460,
        recintos: 1880,
        spas: 950,
        habitaciones: 165000
      },
      Durango: {
        agenciasViajes: 380,
        alimentosBebidas: 1540,
        arrendadoras: 38,
        atractivos: 560,
        auxilioTuristico: 105,
        camposGolf: 12,
        ensenanzaTuristica: 28,
        establecimientos: 660,
        transportadoras: 190,
        guias: 240,
        parquesAcuaticos: 55,
        recintos: 150,
        spas: 80,
        habitaciones: 20500
      }
      // Agregar datos similares para todos los otros destinos...
    }
  }

  // Calcular métricas filtradas
  const metricasFiltradas = useMemo(() => {
    const datos =
      datosBase[selectedYear]?.[selectedDestination] ||
      datosBase[selectedYear]?.[''] ||
      datosBase['2024']['']

    return [
      {
        titulo: 'Agencias de Viajes',
        valor: datos.agenciasViajes.toLocaleString(),
        color: 'bg-orange-500'
      },
      {
        titulo: 'Alimentos y Bebidas',
        valor: datos.alimentosBebidas.toLocaleString(),
        color: 'bg-orange-500'
      },
      {
        titulo: 'Arrendadoras',
        valor: datos.arrendadoras.toLocaleString(),
        color: 'bg-orange-500'
      },
      {
        titulo: 'Atractivos Recreación y Deporte',
        valor: datos.atractivos.toLocaleString(),
        color: 'bg-orange-500'
      },
      {
        titulo: 'Auxilio Turístico',
        valor: datos.auxilioTuristico.toLocaleString(),
        color: 'bg-orange-500'
      },
      {
        titulo: 'Campos de Golf',
        valor: datos.camposGolf.toLocaleString(),
        color: 'bg-orange-500'
      },
      {
        titulo: 'Enseñanza Turística',
        valor: datos.ensenanzaTuristica.toLocaleString(),
        color: 'bg-orange-500'
      },
      {
        titulo: 'Establecimientos Hospedaje',
        valor: datos.establecimientos.toLocaleString(),
        color: 'bg-orange-500'
      },
      {
        titulo: 'Transportadoras Turísticas',
        valor: datos.transportadoras.toLocaleString(),
        color: 'bg-orange-500'
      },
      {
        titulo: 'Guías de turistas',
        valor: datos.guias.toLocaleString(),
        color: 'bg-orange-500'
      },
      {
        titulo: 'Parques Acuáticos/ Balnearios',
        valor: datos.parquesAcuaticos.toLocaleString(),
        color: 'bg-orange-500'
      },
      {
        titulo: 'Recintos, Auditorios y Salones',
        valor: datos.recintos.toLocaleString(),
        color: 'bg-orange-500'
      },
      {
        titulo: 'Spas',
        valor: datos.spas.toLocaleString(),
        color: 'bg-orange-500'
      },
      {
        titulo: 'Habitaciones',
        valor: datos.habitaciones.toLocaleString(),
        color: 'bg-red-500'
      }
    ]
  }, [selectedYear, selectedDestination])

  // Datos para el gráfico de dona (se actualizan con filtros)
  const dataDona = useMemo(() => {
    const datos =
      datosBase[selectedYear]?.[selectedDestination] ||
      datosBase[selectedYear]?.[''] ||
      datosBase['2024']['']
    const total =
      datos.agenciasViajes +
      datos.alimentosBebidas +
      datos.atractivos +
      datos.establecimientos +
      datos.guias +
      datos.recintos +
      datos.transportadoras +
      datos.spas +
      datos.auxilioTuristico +
      datos.parquesAcuaticos +
      datos.arrendadoras +
      datos.ensenanzaTuristica +
      datos.camposGolf

    return [
      {
        name: 'ALIMENTOS Y BEBIDAS',
        value: Number(((datos.alimentosBebidas / total) * 100).toFixed(1)),
        color: '#00BCD4'
      },
      {
        name: 'ESTABLECIMIENTOS DE HOSPEDAJE',
        value: Number(((datos.establecimientos / total) * 100).toFixed(1)),
        color: '#FF9800'
      },
      {
        name: 'ATRACTIVOS, RECREACION Y DEPORTE',
        value: Number(((datos.atractivos / total) * 100).toFixed(1)),
        color: '#E91E63'
      },
      {
        name: 'AGENCIAS DE VIAJES',
        value: Number(((datos.agenciasViajes / total) * 100).toFixed(1)),
        color: '#FFC107'
      },
      {
        name: 'GUIAS DE TURISTAS',
        value: Number(((datos.guias / total) * 100).toFixed(1)),
        color: '#4CAF50'
      },
      {
        name: 'RECINTOS AUDITORIOS Y SALONES',
        value: Number(((datos.recintos / total) * 100).toFixed(1)),
        color: '#9C27B0'
      },
      {
        name: 'TRANSPORTADORAS TURÍSTICAS',
        value: Number(((datos.transportadoras / total) * 100).toFixed(1)),
        color: '#673AB7'
      },
      {
        name: 'SPAS',
        value: Number(((datos.spas / total) * 100).toFixed(1)),
        color: '#FF5722'
      },
      {
        name: 'AUXILIO TURÍSTICO',
        value: Number(((datos.auxilioTuristico / total) * 100).toFixed(1)),
        color: '#795548'
      },
      {
        name: 'PARQUES ACUÁTICOS Y BALNEARIOS',
        value: Number(((datos.parquesAcuaticos / total) * 100).toFixed(1)),
        color: '#607D8B'
      },
      {
        name: 'ARRENDADORAS',
        value: Number(((datos.arrendadoras / total) * 100).toFixed(1)),
        color: '#9E9E9E'
      },
      {
        name: 'CENTROS DE ENSEÑANZA TURÍSTICA',
        value: Number(((datos.ensenanzaTuristica / total) * 100).toFixed(1)),
        color: '#CDDC39'
      },
      {
        name: 'CAMPO DE GOLF',
        value: Number(((datos.camposGolf / total) * 100).toFixed(1)),
        color: '#3F51B5'
      }
    ]
  }, [selectedYear, selectedDestination])

  // Datos para el gráfico de barras de habitaciones por destino (filtrado por año)
  const dataHabitaciones = useMemo(() => {
    const baseData = [
      {
        destino: 'Durango',
        habitaciones2024: 25000,
        habitaciones2023: 23500,
        habitaciones2022: 22000,
        habitaciones2021: 20500
      },
      {
        destino: 'Mapimí',
        habitaciones2024: 8000,
        habitaciones2023: 7500,
        habitaciones2022: 7000,
        habitaciones2021: 6500
      },
      {
        destino: 'Nombre de Dios',
        habitaciones2024: 35000,
        habitaciones2023: 33000,
        habitaciones2022: 31000,
        habitaciones2021: 29000
      },
      {
        destino: 'Pueblo Nuevo',
        habitaciones2024: 12500,
        habitaciones2023: 12000,
        habitaciones2022: 11500,
        habitaciones2021: 11000
      },
      {
        destino: 'Peñón Blanco',
        habitaciones2024: 6200,
        habitaciones2023: 5800,
        habitaciones2022: 5400,
        habitaciones2021: 5000
      },
      {
        destino: 'Gómez Palacio',
        habitaciones2024: 18000,
        habitaciones2023: 17000,
        habitaciones2022: 16000,
        habitaciones2021: 15000
      },
      {
        destino: 'Cuencamé',
        habitaciones2024: 5200,
        habitaciones2023: 4900,
        habitaciones2022: 4600,
        habitaciones2021: 4300
      },
      {
        destino: 'Santiago Papasquiaro',
        habitaciones2024: 9800,
        habitaciones2023: 9200,
        habitaciones2022: 8600,
        habitaciones2021: 8000
      },
      {
        destino: 'San Dimas',
        habitaciones2024: 4200,
        habitaciones2023: 3900,
        habitaciones2022: 3600,
        habitaciones2021: 3300
      },
      {
        destino: 'Tepehuanes',
        habitaciones2024: 4800,
        habitaciones2023: 4500,
        habitaciones2022: 4200,
        habitaciones2021: 3900
      }
    ]

    return baseData
      .map((item) => ({
        destino: item.destino,
        habitaciones:
          item[`habitaciones${selectedYear}`] || item.habitaciones2024
      }))
      .filter(
        (item) => !selectedDestination || item.destino === selectedDestination
      )
  }, [selectedYear, selectedDestination])

  // Datos para el gráfico histórico (filtrado)
  const dataHistorico = useMemo(() => {
    const baseHistorico = [
      {
        year: '2015',
        'ALIMENTOS Y BEBIDAS': 1300,
        'ESTABLECIMIENTOS DE HOSPEDAJE': 650,
        ATRACTIVOS: 800,
        AGENCIAS: 750,
        GUIAS: 400,
        OTROS: 300
      },
      {
        year: '2016',
        'ALIMENTOS Y BEBIDAS': 1800,
        'ESTABLECIMIENTOS DE HOSPEDAJE': 700,
        ATRACTIVOS: 850,
        AGENCIAS: 800,
        GUIAS: 420,
        OTROS: 320
      },
      {
        year: '2017',
        'ALIMENTOS Y BEBIDAS': 2200,
        'ESTABLECIMIENTOS DE HOSPEDAJE': 750,
        ATRACTIVOS: 900,
        AGENCIAS: 850,
        GUIAS: 450,
        OTROS: 340
      },
      {
        year: '2018',
        'ALIMENTOS Y BEBIDAS': 2300,
        'ESTABLECIMIENTOS DE HOSPEDAJE': 800,
        ATRACTIVOS: 950,
        AGENCIAS: 900,
        GUIAS: 480,
        OTROS: 360
      },
      {
        year: '2019',
        'ALIMENTOS Y BEBIDAS': 2350,
        'ESTABLECIMIENTOS DE HOSPEDAJE': 850,
        ATRACTIVOS: 1000,
        AGENCIAS: 950,
        GUIAS: 500,
        OTROS: 380
      },
      {
        year: '2020',
        'ALIMENTOS Y BEBIDAS': 2400,
        'ESTABLECIMIENTOS DE HOSPEDAJE': 900,
        ATRACTIVOS: 1200,
        AGENCIAS: 1000,
        GUIAS: 520,
        OTROS: 400
      },
      {
        year: '2021',
        'ALIMENTOS Y BEBIDAS': 2800,
        'ESTABLECIMIENTOS DE HOSPEDAJE': 950,
        ATRACTIVOS: 1400,
        AGENCIAS: 1050,
        GUIAS: 540,
        OTROS: 420
      },
      {
        year: '2022',
        'ALIMENTOS Y BEBIDAS': 3100,
        'ESTABLECIMIENTOS DE HOSPEDAJE': 1000,
        ATRACTIVOS: 1500,
        AGENCIAS: 1100,
        GUIAS: 560,
        OTROS: 440
      },
      {
        year: '2023',
        'ALIMENTOS Y BEBIDAS': 3300,
        'ESTABLECIMIENTOS DE HOSPEDAJE': 1050,
        ATRACTIVOS: 1450,
        AGENCIAS: 1150,
        GUIAS: 580,
        OTROS: 460
      },
      {
        year: '2024',
        'ALIMENTOS Y BEBIDAS': 3400,
        'ESTABLECIMIENTOS DE HOSPEDAJE': 1100,
        ATRACTIVOS: 1400,
        AGENCIAS: 1200,
        GUIAS: 600,
        OTROS: 480
      }
    ]

    // Filtrar por rubro si está seleccionado
    if (selectedHistoricalRubro) {
      return baseHistorico.map((item) => ({
        year: item.year,
        [selectedHistoricalRubro]: item[selectedHistoricalRubro]
      }))
    }

    return baseHistorico
  }, [selectedHistoricalRubro])

  const coloresLineas = {
    'ALIMENTOS Y BEBIDAS': '#00BCD4',
    'ESTABLECIMIENTOS DE HOSPEDAJE': '#FF9800',
    ATRACTIVOS: '#E91E63',
    AGENCIAS: '#FFC107',
    GUIAS: '#4CAF50',
    OTROS: '#9C27B0'
  }

  const destinos = [
    'Durango',
    'Mapimí',
    'Nombre de Dios',
    'Pueblo Nuevo',
    'Peñón Blanco',
    'Gómez Palacio',
    'Cuencamé',
    'Santiago Papasquiaro',
    'San Dimas',
    'Tepehuanes'
  ]

  const rubros = [
    'ALIMENTOS Y BEBIDAS',
    'ESTABLECIMIENTOS DE HOSPEDAJE',
    'ATRACTIVOS',
    'AGENCIAS',
    'GUIAS',
    'OTROS'
  ]

  return {
    selectedYear,
    setSelectedYear,
    selectedDestination,
    setSelectedDestination,
    selectedHistoricalDestination,
    setSelectedHistoricalDestination,
    selectedHistoricalRubro,
    setSelectedHistoricalRubro,
    metricasFiltradas,
    dataDona,
    dataHabitaciones,
    dataHistorico,
    coloresLineas,
    destinos,
    rubros
  }
}
