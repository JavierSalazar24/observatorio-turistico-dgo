import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend
} from 'recharts'

export const GraficoHistoricoInventarioTuristico = ({
  selectedHistoricalDestination,
  setSelectedHistoricalDestination,
  selectedHistoricalRubro,
  setSelectedHistoricalRubro,
  rubros,
  dataHistorico,
  destinos,
  coloresLineas
}) => {
  return (
    <div className='bg-white rounded-b-lg border border-gray-200 p-6'>
      <div className='bg-orange-500 text-white py-2 px-4 rounded-t-lg flex items-center gap-4 flex-col sm:flex-row'>
        <h3 className='text-base font-bold flex-1'>
          Inventario histórico por Rubro
        </h3>

        <div className='flex gap-4 flex-col md:flex-row items-center justify-center'>
          <select
            value={selectedHistoricalDestination}
            onChange={(e) => setSelectedHistoricalDestination(e.target.value)}
            className='px-3 py-1 rounded text-gray-800 bg-yellow-200 text-xs'
          >
            <option value=''>Destino</option>
            {destinos.map((destino) => (
              <option key={destino} value={destino}>
                {destino}
              </option>
            ))}
          </select>

          <select
            value={selectedHistoricalRubro}
            onChange={(e) => setSelectedHistoricalRubro(e.target.value)}
            className='px-3 py-1 rounded text-gray-800 bg-yellow-200 text-xs'
          >
            <option value=''>Todos los rubros</option>
            {rubros.map((rubro) => (
              <option key={rubro} value={rubro}>
                {rubro}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='bg-white border border-gray-200 p-4 rounded-b-lg'>
        <ResponsiveContainer width='100%' height={400}>
          <LineChart data={dataHistorico}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='year' fontSize={12} />
            <YAxis fontSize={12} />
            <Tooltip />
            <Legend />
            {Object.keys(
              selectedHistoricalRubro
                ? {
                    [selectedHistoricalRubro]:
                      coloresLineas[selectedHistoricalRubro] || '#00BCD4'
                  }
                : coloresLineas
            ).map((key) => (
              <Line
                key={key}
                type='monotone'
                dataKey={key}
                stroke={coloresLineas[key] || '#00BCD4'}
                strokeWidth={3}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
