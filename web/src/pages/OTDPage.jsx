'use client'

import { HeroBanner } from '../components/HeroBanner'
import { ListaDesordenadaBoldOTD } from '../components/ListaDesordenadaBoldOTD'
import { ListaDesordenadaOTD } from '../components/ListaDesordenadaOTD'
import { MisionVision } from '../components/MisionVision'

const OTDPage = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
      {/* Hero Section con imagen de fondo */}
      <HeroBanner
        text='OTD'
        img='https://upload.wikimedia.org/wikipedia/commons/7/78/Panoramica_plaza_de_armas_Durango.jpg'
        alt='Imagen de fondo del módulo de OTD'
      />

      {/* Contenido Principal */}
      <div className='py-16 sm:mx-16'>
        <div className='container mx-auto sm:px-8 px-4'>
          {/* Título Principal */}
          <div className='mb-12'>
            <h2 className='sm:text-4xl text-xl font-bold text-gray-800 mb-6'>
              ¿ QUÉ ES EL OBSERVATORIO TURÍSTICO DE DURANGO ?
            </h2>
            <div className='w-full h-1 bg-orange-500 mb-8'></div>
            <p className='sm:text-lg text-base text-gray-700 leading-relaxed'>
              Es un espacio de análisis, técnico, intersectorial e
              interdisciplinario bajo el cual un grupo de personas y/o entidades
              se agrupan y organizan con el propósito de vigilar, medir y
              verificar la evolución del sector turista en el Estado de Durango.
            </p>
          </div>

          {/* Misión y Visión */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
            {/* Misión */}
            <MisionVision
              title='MISIÓN'
              desc='Ser un organismo multidisciplinario, enfocado a la
                identificación, análisis, interpretación y evaluación de los
                resultados de la actividad turística, a través de indicadores
                que permitan mejorar la competitividad del sector, con un
                enfoque de sostenibilidad e inclusión social que ayude a la toma
                de decisiones.'
            />

            {/* Visión */}
            <MisionVision
              title='VISIÓN'
              desc='Consolidarnos como el organismo de referencia nacional e
                internacional que sirve de guía a los actores del Sector
                Turístico, gestionando el conocimiento de esta actividad y que
                genera los indicadores claves que inciden en la recuperación,
                competitividad y desarrollo turístico sostenible del Estado de
                Durango.'
            />
          </div>

          {/* Objetivos y ¿En dónde incide? */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12'>
            {/* Objetivos */}
            <ListaDesordenadaOTD
              title='OBJETIVOS'
              list={[
                'Jerarquizar las demandas y necesidades de los ciudadanos.',
                'Orientar las actividades de los servidores públicos.',
                'Facilitar la toma de decisiones.',
                'Generar el diseño de la propia política de desarrollo del sector turismo.'
              ]}
            />

            {/* ¿En dónde incide? */}
            <ListaDesordenadaOTD
              title='¿EN DÓNDE INCIDE?'
              list={[
                'Políticas públicas.',
                'Metodologías y herramientas técnicas.',
                'Transparencia.',
                'Medición de resultados.'
              ]}
            />
          </div>

          {/* Funciones */}
          <div className='mb-12'>
            <ListaDesordenadaOTD
              title='FUNCIONES'
              list={[
                'Genera información adecuada y consensuada, que permita definir el actuar del sector.',
                'Pone al alcance de la sociedad la información relativa al fenómeno en estudio, atendiendo a criterios metodológicos, técnicos y de transparencia.',
                'Promueve mecanismos e instrumentos dirigidos a conocer las demandas de los ciudadanos.',
                'Construye sistemas de información técnica que permitan la generación, homologación y estandarización de indicadores en materia de turismo, además de facilitar su uso y consulta.',
                'Construye un tablero de control como mecanismo permanente de medición y monitoreo en aspectos prioritarios del tema.',
                'Genera conocimiento útil a través de estudios e investigaciones respecto al sector turístico.'
              ]}
            />
          </div>

          {/* Comisiones de Trabajo */}
          <ListaDesordenadaBoldOTD
            title='COMISIONES DE TRABAJO'
            list={[
              {
                title: 'Comisión de Publicaciones y Glosarios',
                desc: 'Vigila que la información que se publica sea seria, correcta, útil y permanente.'
              },
              {
                title:
                  'Comisión de Tablero de Control y Sistema de Indicadores',
                desc: 'Analiza los indicadores que miden la actividad turística del Estado de Durango.'
              },
              {
                title: 'Comisión de Portal de Internet',
                desc: 'Vigila el correcto funcionamiento del Portal de Internet del Observatorio.'
              },
              {
                title:
                  'Comisión de Actividades Públicas, Vinculación y Relaciones Institucionales',
                desc: 'Propone y gestiona sinergias con otros observatorios, y propone la participación del Observatorio en eventos del sector.'
              },
              {
                title: 'Red de Investigadores',
                desc: 'Coadyuva en la generación de indicadores que no estén disponibles o previstos por falta de información o investigación.'
              }
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default OTDPage
