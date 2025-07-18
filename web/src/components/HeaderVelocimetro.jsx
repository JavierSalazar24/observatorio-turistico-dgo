export const HeaderVelocimetro = ({ tablero, logo }) => {
  return (
    <div
      className='p-4 text-white text-2xl font-bold flex items-center'
      style={{ backgroundColor: tablero.color }}
    >
      <div className='w-12 h-12 mr-3'>
        <img
          src={logo}
          alt='Logo OTD'
          className='w-full h-full object-contain'
        />
      </div>
      <span>{tablero.titulo}</span>
    </div>
  )
}
