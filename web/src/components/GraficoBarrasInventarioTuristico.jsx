import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

export const GraficoBarrasInventarioTuristico = ({ dataHabitaciones }) => {
  return (
    <div className='h-[500px]'>
      <div className='bg-orange-500 text-white py-2 px-4 rounded-t-lg'>
        <h3 className='text-base font-bold'>
          Inventario de habitaciones por destino
        </h3>
      </div>
      <div className='bg-white border border-gray-200 p-4 rounded-b-lg h-[460px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            data={dataHabitaciones}
            margin={{ top: 20, right: 10, left: 10, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis
              dataKey='destino'
              angle={-45}
              textAnchor='end'
              height={80}
              fontSize={10}
              interval={0}
            />
            <YAxis fontSize={10} />
            <Tooltip
              formatter={(value) => [value.toLocaleString(), 'Habitaciones']}
            />
            <Bar dataKey='habitaciones' fill='#FF9800' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
