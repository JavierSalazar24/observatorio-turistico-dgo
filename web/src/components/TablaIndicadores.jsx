export const TablaIndicadores = ({ tablero }) => {
  // Función para determinar el color del puntaje
  const getPuntajeColor = (puntaje, valorMaximo) => {
    if (puntaje === 0) return 'bg-red-500'
    if (puntaje < valorMaximo) return 'bg-yellow-500'
    return 'bg-green-500'
  }

  return (
    <div className='overflow-x-auto'>
      <table className='w-full text-sm'>
        <thead className='bg-gray-100'>
          <tr>
            <th className='py-2 px-3 text-left border-b'>Código</th>
            <th className='py-2 px-3 text-left border-b'>
              Nombre del Indicador
            </th>
            <th className='py-2 px-3 text-center border-b'>Valor máximo</th>
            <th className='py-2 px-3 text-center border-b'>
              Puntaje alcanzado
            </th>
          </tr>
        </thead>
        <tbody className='bg-blue-50'>
          {tablero.indicadores.map((indicador) => {
            // Determinar color del puntaje
            const bgColor = getPuntajeColor(
              indicador.puntajeAlcanzado,
              indicador.valorMaximo
            )

            return (
              <tr key={indicador.codigo}>
                <td className='py-2 px-3 border-b'>{indicador.codigo}</td>
                <td className='py-2 px-3 border-b'>{indicador.nombre}</td>
                <td className='py-2 px-3 text-center border-b'>
                  {indicador.valorMaximo}
                </td>
                <td className='py-2 px-3 text-center border-b'>
                  <div className='flex justify-center'>
                    <span
                      className={`w-8 h-8 rounded-md ${bgColor} text-white flex items-center justify-center`}
                    >
                      {indicador.puntajeAlcanzado}
                    </span>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
