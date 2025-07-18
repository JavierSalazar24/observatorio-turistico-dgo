import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'

export const GraficoDonaInventarioTuristico = ({ dataDona }) => {
  return (
    <div className='h-[500px]'>
      <div className='bg-orange-500 text-white py-2 px-4 rounded-t-lg'>
        <h3 className='text-base font-bold'>
          Inventario de Servicios Turísticos por Rubro
        </h3>
      </div>
      <div className='bg-white border border-gray-200 p-4 rounded-b-lg h-[460px] flex flex-col'>
        <div className='flex-1'>
          <ResponsiveContainer width='100%' height='100%'>
            <PieChart>
              <Pie
                data={dataDona}
                cx='50%'
                cy='50%'
                innerRadius={50}
                outerRadius={100}
                paddingAngle={2}
                dataKey='value'
                label={false}
              >
                {dataDona.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Leyenda personalizada */}
        <div className='mt-2 space-y-1 text-xs max-h-32 overflow-y-auto'>
          {dataDona.slice(0, 8).map((item, index) => (
            <div key={index} className='flex items-center'>
              <div
                className='w-3 h-3 rounded-full mr-2 flex-shrink-0'
                style={{ backgroundColor: item.color }}
              ></div>
              <span className='text-gray-700 text-xs truncate flex-1'>
                {item.name}
              </span>
              <span className='ml-2 font-semibold text-xs flex-shrink-0'>
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
