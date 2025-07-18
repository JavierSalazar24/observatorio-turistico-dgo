import { useMemo, useState } from 'react'

export const useEntornoNacional = () => {
  const [selectedPeriod, setSelectedPeriod] = useState([2010, 2025])
  const [selectedStates, setSelectedStates] = useState([
    'JALISCO',
    'DURANGO',
    'MICHOACAN',
    'QUERÉTARO'
  ])
  const [selectedIndicators, setSelectedIndicators] = useState({
    llegadaTuristas: true,
    ocupacionHotelera: true,
    estadiaPromedio: true,
    cuartosOcupados: true,
    cuartosDisponibles: true,
    pasajerosNacionales: true,
    pasajerosInternacionales: true
  })

  // Estados mexicanos
  const estados = [
    'AGUASCALIENTES',
    'BAJA CALIFORNIA',
    'BAJA CALIFORNIA SUR',
    'CAMPECHE',
    'CHIAPAS',
    'CHIHUAHUA',
    'CIUDAD DE MÉXICO',
    'COAHUILA',
    'COLIMA',
    'DURANGO',
    'ESTADO DE MÉXICO',
    'GUANAJUATO',
    'GUERRERO',
    'HIDALGO',
    'JALISCO',
    'MICHOACAN',
    'MORELOS',
    'NAYARIT',
    'NUEVO LEÓN',
    'OAXACA',
    'PUEBLA',
    'QUERÉTARO',
    'QUINTANA ROO',
    'SAN LUIS POTOSÍ',
    'SINALOA',
    'SONORA',
    'TABASCO',
    'TAMAULIPAS',
    'TLAXCALA',
    'VERACRUZ',
    'YUCATÁN',
    'ZACATECAS'
  ]

  // Colores para cada estado
  const stateColors = {
    JALISCO: '#4A90E2',
    GUANAJUATO: '#50E3C2',
    MICHOACAN: '#E94B8C',
    QUERÉTARO: '#F5A623',
    'SAN LUIS POTOSÍ': '#F8E71C',
    ZACATECAS: '#7ED321',
    DURANGO: '#50C8E8',
    AGUASCALIENTES: '#BD10E0',
    'BAJA CALIFORNIA': '#B8E986',
    'BAJA CALIFORNIA SUR': '#FF6900',
    CAMPECHE: '#FCB900',
    CHIAPAS: '#7BDCB5',
    CHIHUAHUA: '#00D084',
    'CIUDAD DE MÉXICO': '#8ED1FC',
    COAHUILA: '#0693E3',
    COLIMA: '#ABB8C3',
    'ESTADO DE MÉXICO': '#EB144C',
    GUERRERO: '#F78DA7',
    HIDALGO: '#9900EF'
  }

  // Función para generar datos de ejemplo
  const generateData = (baseValues, variance, startYear, endYear) => {
    const data = []
    const years = endYear - startYear + 1

    for (let i = 0; i < years; i++) {
      const year = startYear + i
      const dataPoint = { year: year.toString() }

      selectedStates.forEach((state) => {
        if (baseValues[state]) {
          const baseValue = baseValues[state]
          const randomVariation = (Math.random() - 0.5) * variance
          dataPoint[state] = Math.max(
            0,
            baseValue + randomVariation + i * baseValue * 0.02
          ) // Crecimiento del 2% anual
        }
      })

      data.push(dataPoint)
    }

    return data
  }

  // Datos base para cada indicador
  const baseData = {
    llegadaTuristas: {
      JALISCO: 800000,
      GUANAJUATO: 400000,
      MICHOACAN: 250000,
      QUERÉTARO: 200000,
      'SAN LUIS POTOSÍ': 180000,
      ZACATECAS: 150000,
      DURANGO: 120000,
      CHIHUAHUA: 100000,
      VERACRUZ: 300000,
      'NUEVO LEÓN': 180000,
      PUEBLA: 220000,
      OAXACA: 120000,
      SINALOA: 150000,
      'CIUDAD DE MÉXICO': 150000,
      SONORA: 130000,
      TABASCO: 90000,
      TAMAULIPAS: 110000,
      TLAXCALA: 80000,
      YUCATÁN: 180000,
      AGUASCALIENTES: 70000,
      'BAJA CALIFORNIA': 170000,
      'BAJA CALIFORNIA SUR': 120000,
      CAMPECHE: 60000,
      COLIMA: 50000,
      CHIAPAS: 80000,
      COAHUILA: 100000,
      'ESTADO DE MÉXICO': 250000,
      HIDALGO: 100000,
      GUERRERO: 150000,
      MORELOS: 70000,
      NAYARIT: 60000,
      'QUINTANA ROO': 300000
    },
    ocupacionHotelera: {
      JALISCO: 55,
      GUANAJUATO: 38,
      MICHOACAN: 40,
      QUERÉTARO: 48,
      'SAN LUIS POTOSÍ': 50,
      ZACATECAS: 42,
      DURANGO: 45,
      CHIHUAHUA: 30,
      VERACRUZ: 35,
      'NUEVO LEÓN': 42,
      PUEBLA: 40,
      OAXACA: 38,
      SINALOA: 36,
      'CIUDAD DE MÉXICO': 42,
      SONORA: 32,
      TABASCO: 34,
      TAMAULIPAS: 33,
      TLAXCALA: 28,
      YUCATÁN: 41,
      AGUASCALIENTES: 27,
      'BAJA CALIFORNIA': 43,
      'BAJA CALIFORNIA SUR': 48,
      CAMPECHE: 26,
      COLIMA: 25,
      CHIAPAS: 30,
      COAHUILA: 32,
      'ESTADO DE MÉXICO': 36,
      HIDALGO: 34,
      GUERRERO: 39,
      MORELOS: 31,
      NAYARIT: 29,
      'QUINTANA ROO': 50
    },
    estadiaPromedio: {
      JALISCO: 2.2,
      GUANAJUATO: 1.5,
      MICHOACAN: 1.7,
      QUERÉTARO: 2.0,
      'SAN LUIS POTOSÍ': 1.9,
      ZACATECAS: 1.8,
      DURANGO: 1.6,
      CHIHUAHUA: 2.1,
      VERACRUZ: 1.8,
      'NUEVO LEÓN': 2.2,
      PUEBLA: 1.9,
      OAXACA: 2.0,
      SINALOA: 2.3,
      'CIUDAD DE MÉXICO': 2.1,
      SONORA: 2.0,
      TABASCO: 1.7,
      TAMAULIPAS: 2.1,
      TLAXCALA: 1.5,
      YUCATÁN: 2.2,
      AGUASCALIENTES: 1.6,
      'BAJA CALIFORNIA': 2.3,
      'BAJA CALIFORNIA SUR': 1.9,
      CAMPECHE: 2.0,
      COLIMA: 1.8,
      CHIAPAS: 2.1,
      COAHUILA: 2.2,
      'ESTADO DE MÉXICO': 1.7,
      HIDALGO: 2.0,
      GUERRERO: 1.8,
      MORELOS: 1.9,
      NAYARIT: 2.1,
      'QUINTANA ROO': 1.9
    },
    cuartosOcupados: {
      JALISCO: 900000,
      GUANAJUATO: 350000,
      MICHOACAN: 200000,
      QUERÉTARO: 180000,
      'SAN LUIS POTOSÍ': 150000,
      ZACATECAS: 100000,
      DURANGO: 80000,
      CHIHUAHUA: 120000,
      VERACRUZ: 180000,
      'NUEVO LEÓN': 160000,
      PUEBLA: 140000,
      OAXACA: 100000,
      SINALOA: 130000,
      'CIUDAD DE MÉXICO': 120000,
      SONORA: 110000,
      TABASCO: 90000,
      TAMAULIPAS: 100000,
      TLAXCALA: 80000,
      YUCATÁN: 160000,
      AGUASCALIENTES: 60000,
      'BAJA CALIFORNIA': 150000,
      'BAJA CALIFORNIA SUR': 100000,
      CAMPECHE: 50000,
      COLIMA: 40000,
      CHIAPAS: 70000,
      COAHUILA: 90000,
      'ESTADO DE MÉXICO': 200000,
      HIDALGO: 80000,
      GUERRERO: 120000,
      MORELOS: 50000,
      NAYARIT: 40000,
      'QUINTANA ROO': 200000
    },
    cuartosDisponibles: {
      JALISCO: 1800000,
      GUANAJUATO: 700000,
      MICHOACAN: 500000,
      QUERÉTARO: 400000,
      'SAN LUIS POTOSÍ': 350000,
      ZACATECAS: 250000,
      DURANGO: 200000,
      CHIHUAHUA: 300000,
      VERACRUZ: 400000,
      'NUEVO LEÓN': 350000,
      PUEBLA: 300000,
      OAXACA: 250000,
      SINALOA: 280000,
      'CIUDAD DE MÉXICO': 300000,
      SONORA: 260000,
      TABASCO: 200000,
      TAMAULIPAS: 220000,
      TLAXCALA: 180000,
      YUCATÁN: 350000,
      AGUASCALIENTES: 150000,
      'BAJA CALIFORNIA': 320000,
      'BAJA CALIFORNIA SUR': 250000,
      CAMPECHE: 120000,
      COLIMA: 100000,
      CHIAPAS: 180000,
      COAHUILA: 220000,
      'ESTADO DE MÉXICO': 400000,
      HIDALGO: 200000,
      GUERRERO: 280000,
      MORELOS: 120000,
      NAYARIT: 100000,
      'QUINTANA ROO': 350000
    },
    pasajerosNacionales: {
      JALISCO: 5000000,
      GUANAJUATO: 800000,
      MICHOACAN: 200000,
      QUERÉTARO: 150000,
      'SAN LUIS POTOSÍ': 100000,
      ZACATECAS: 50000,
      DURANGO: 80000,
      CHIHUAHUA: 100000,
      VERACRUZ: 1200000,
      'NUEVO LEÓN': 700000,
      PUEBLA: 800000,
      OAXACA: 500000,
      SINALOA: 300000,
      'CIUDAD DE MÉXICO': 300000,
      SONORA: 200000,
      TABASCO: 150000,
      TAMAULIPAS: 300000,
      TLAXCALA: 100000,
      YUCATÁN: 500000,
      AGUASCALIENTES: 120000,
      'BAJA CALIFORNIA': 400000,
      'BAJA CALIFORNIA SUR': 250000,
      CAMPECHE: 80000,
      COLIMA: 70000,
      CHIAPAS: 120000,
      COAHUILA: 150000,
      'ESTADO DE MÉXICO': 600000,
      HIDALGO: 200000,
      GUERRERO: 250000,
      MORELOS: 150000,
      NAYARIT: 100000,
      'QUINTANA ROO': 500000
    },
    pasajerosInternacionales: {
      JALISCO: 3000000,
      GUANAJUATO: 400000,
      MICHOACAN: 100000,
      QUERÉTARO: 80000,
      'SAN LUIS POTOSÍ': 50000,
      ZACATECAS: 30000,
      DURANGO: 20000,
      CHIHUAHUA: 50000,
      VERACRUZ: 300000,
      'NUEVO LEÓN': 200000,
      PUEBLA: 100000,
      OAXACA: 70000,
      SINALOA: 60000,
      'CIUDAD DE MÉXICO': 60000,
      SONORA: 50000,
      TABASCO: 50000,
      TAMAULIPAS: 60000,
      TLAXCALA: 30000,
      YUCATÁN: 200000,
      AGUASCALIENTES: 30000,
      'BAJA CALIFORNIA': 150000,
      'BAJA CALIFORNIA SUR': 100000,
      CAMPECHE: 20000,
      COLIMA: 10000,
      CHIAPAS: 20000,
      COAHUILA: 50000,
      'ESTADO DE MÉXICO': 150000,
      HIDALGO: 40000,
      GUERRERO: 50000,
      MORELOS: 30000,
      NAYARIT: 20000,
      'QUINTANA ROO': 100000
    }
  }

  // Generar datos filtrados
  const chartData = useMemo(() => {
    return {
      llegadaTuristas: generateData(
        baseData.llegadaTuristas,
        50000,
        selectedPeriod[0],
        selectedPeriod[1]
      ),
      ocupacionHotelera: generateData(
        baseData.ocupacionHotelera,
        5,
        selectedPeriod[0],
        selectedPeriod[1]
      ),
      estadiaPromedio: generateData(
        baseData.estadiaPromedio,
        0.2,
        selectedPeriod[0],
        selectedPeriod[1]
      ),
      cuartosOcupados: generateData(
        baseData.cuartosOcupados,
        30000,
        selectedPeriod[0],
        selectedPeriod[1]
      ),
      cuartosDisponibles: generateData(
        baseData.cuartosDisponibles,
        20000,
        selectedPeriod[0],
        selectedPeriod[1]
      ),
      pasajerosNacionales: generateData(
        baseData.pasajerosNacionales,
        100000,
        selectedPeriod[0],
        selectedPeriod[1]
      ),
      pasajerosInternacionales: generateData(
        baseData.pasajerosInternacionales,
        50000,
        selectedPeriod[0],
        selectedPeriod[1]
      )
    }
  }, [selectedStates, selectedPeriod])

  // Calcular métricas totales
  const metricas = useMemo(() => {
    const latestData =
      chartData.llegadaTuristas[chartData.llegadaTuristas.length - 1] || {}
    const cuartosData =
      chartData.cuartosOcupados[chartData.cuartosOcupados.length - 1] || {}
    const ocupacionData =
      chartData.ocupacionHotelera[chartData.ocupacionHotelera.length - 1] || {}

    const totalTuristas = selectedStates.reduce(
      (sum, state) => sum + (latestData[state] || 0),
      0
    )
    const totalCuartos = selectedStates.reduce(
      (sum, state) => sum + (cuartosData[state] || 0),
      0
    )
    const avgOcupacion =
      selectedStates.reduce(
        (sum, state) => sum + (ocupacionData[state] || 0),
        0
      ) / selectedStates.length

    return {
      cuartosOcupados: totalCuartos.toLocaleString(),
      llegadaTuristas: totalTuristas.toLocaleString(),
      porcentajeOcupacion: `${avgOcupacion.toFixed(2)}%`
    }
  }, [chartData, selectedStates])

  const handleStateToggle = (state) => {
    setSelectedStates((prev) =>
      prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]
    )
  }

  const handleIndicatorToggle = (indicator) => {
    setSelectedIndicators((prev) => ({
      ...prev,
      [indicator]: !prev[indicator]
    }))
  }

  const handlePeriodChange = (e) => {
    const value = Number.parseInt(e.target.value)
    const range = 2025 - 2010
    const startYear = 2010 + Math.floor((value / 100) * range)
    const endYear = Math.min(startYear + 5, 2025) // Mínimo 5 años de rango
    setSelectedPeriod([startYear, endYear])
  }

  return {
    stateColors,
    metricas,
    selectedPeriod,
    handlePeriodChange,
    estados,
    selectedStates,
    baseData,
    handleStateToggle,
    selectedIndicators,
    handleIndicatorToggle,
    chartData
  }
}
