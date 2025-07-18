import { useState } from 'react'
import { X } from 'lucide-react'
import axios from 'axios'

export const FormularioContacto = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    nombre: '',
    mensaje: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(
    'Ah ocurrido un error, lo solucionaremos lo antes posible. Puedes intentalo más tarde o comunicarte con soporte.'
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    // Limpiar error cuando el usuario comienza a escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    // Validar email
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El correo electrónico no es válido'
    }

    // Validar nombre
    if (!formData.nombre) {
      newErrors.nombre = 'El nombre completo es obligatorio'
    }

    // Validar mensaje
    if (!formData.mensaje) {
      newErrors.mensaje = 'El requerimiento es obligatorio'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      try {
        // envío de formulario
        await axios.post(
          'https://clustur.unes.edu.mx/api/enviar-solicitud',
          formData
        )

        // Éxito
        setSubmitError(false)
        setSubmitSuccess(true)
        setFormData({
          email: '',
          nombre: '',
          mensaje: ''
        })

        setTimeout(() => {
          setSubmitSuccess(false)
        }, 7000)
      } catch (error) {
        setSubmitError(true)
        if (error.status === 422) {
          setErrorMessage(error.response.data.message)
        } else {
          setErrorMessage(
            'Ah ocurrido un error, lo solucionaremos lo antes posible. Puedes intentalo más tarde o comunicarte con soporte.'
          )
        }
        console.error(
          'Error al enviar el formulario:',
          error.response.data.message
        )
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className='fixed inset-0 bg-black/50 z-50 flex items-center justify-center py-10 px-1 sm:px-0'>
      <div className='bg-white rounded-lg w-full max-w-lg mx-auto relative overflow-auto h-[90vh]'>
        <div className='h-full overflow-auto'>
          {/* Botón de cerrar */}
          <button
            onClick={onClose}
            className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer'
            aria-label='Cerrar'
          >
            <X size={24} />
          </button>

          {/* Contenido del formulario */}
          <div className='p-8'>
            <h2 className='text-2xl font-bold text-center mb-2'>
              ¡Contáctanos!
            </h2>
            <p className='text-center text-gray-600 mb-6'>
              Si requieres información detallada de algún tema en específico.
            </p>

            {submitSuccess && (
              <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4'>
                ¡Gracias por contactarnos! Tu mensaje ha sido enviado
                correctamente. <i>Ya puedes cerrar esta ventana</i>
              </div>
            )}
            {submitError && (
              <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
                {errorMessage}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className='mb-6'>
                <label
                  htmlFor='nombre'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Nombre completo<span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='nombre'
                  name='nombre'
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder='Agrega tu nombre'
                  className={`w-full px-3 py-2 border ${
                    errors.nombre ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500`}
                />
                {errors.nombre && (
                  <p className='mt-1 text-sm text-red-500'>{errors.nombre}</p>
                )}
              </div>

              <div className='mb-6'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Correo electrónico<span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Ingresa un correo'
                  className={`w-full px-3 py-2 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500`}
                />
                {errors.email && (
                  <p className='mt-1 text-sm text-red-500'>{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor='mensaje'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Requerimiento y objetivo de la solicitud
                  <span className='text-red-500'>*</span>
                </label>
                <textarea
                  id='mensaje'
                  name='mensaje'
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder='Agrega el mensaje'
                  rows={6}
                  className={`w-full px-3 py-2 border ${
                    errors.mensaje ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none`}
                />
                {errors.mensaje && (
                  <p className='mt-1 text-sm text-red-500'>{errors.mensaje}</p>
                )}
              </div>

              <p className='text-xs text-gray-500 mb-6'>
                * Campos obligatorios
              </p>

              <div className='flex justify-center'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`px-8 py-2 rounded-md border border-orange-500 cursor-pointer ${
                    isSubmitting
                      ? 'bg-gray-300 text-gray-500'
                      : 'bg-white text-orange-500 hover:bg-orange-500 hover:text-white'
                  } transition-colors duration-300 font-medium`}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
