export const InformacionOcupacion = ({ data }) => {
  return (
    <>
      <h4 className='text-xl font-bold mb-4 border-b border-primary pb-2 flex justify-between'>
        <span>{data.nombre}</span>
        <span className='text-primary'>{data.datos[0].porcentaje}</span>
      </h4>
      <ul className='space-y-3'>
        {data.datos.slice(1).map((dato, index) => (
          <li key={index} className='flex justify-between items-center'>
            <span className='text-gray-700'>{dato.mes}</span>
            <span className='font-semibold'>{dato.porcentaje}</span>
          </li>
        ))}
      </ul>
    </>
  )
}
