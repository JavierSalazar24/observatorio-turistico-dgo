import ReactSpeedometer from 'react-d3-speedometer'

export const Velocimetro = ({ puntajeTotal }) => {
  return (
    <div className='p-8 flex justify-center bg-white'>
      <div className='w-64 h-48'>
        <ReactSpeedometer
          maxValue={100}
          value={puntajeTotal}
          needleColor='#333333'
          startColor='#FF5F6D'
          endColor='#8BC34A'
          segments={3}
          segmentColors={['#FF5F6D', '#FFC107', '#8BC34A']}
          currentValueText={`${puntajeTotal}`}
          textColor='#333333'
          valueTextFontSize='32px'
          needleTransitionDuration={4000}
          needleTransition='easeElastic'
          width={250}
          height={150}
        />
      </div>
    </div>
  )
}
