import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

export const CustomChartEntornoNacional = ({
  title,
  height,
  data,
  dataKeys,
  stateColors
}) => {
  return (
    <div className='mb-8'>
      <div className='bg-orange-500 text-white py-2 px-4 mb-4'>
        <h4 className='font-bold'>{title}</h4>
      </div>
      <div className='bg-white border border-gray-200 p-4'>
        <ResponsiveContainer width='100%' height={height}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis fontSize={12} dataKey='year' />
            <YAxis fontSize={12} />
            <Tooltip />
            <Legend />
            {dataKeys.map((key) => (
              <Line
                key={key}
                type='monotone'
                dataKey={key}
                stroke={stateColors[key] || '#8884d8'}
                strokeWidth={2}
                dot={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
