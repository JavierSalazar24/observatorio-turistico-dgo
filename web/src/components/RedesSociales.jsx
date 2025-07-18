import { FaFacebookF } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

export const RedesSociales = () => {
  return (
    <div className='hidden sm:block fixed right-0 top-1/2 transform -translate-y-1/2 z-40'>
      <div className='flex flex-col bg-gradient-to-b from-orange-400 to-orange-600 rounded-l-xl'>
        <a
          target='_blank'
          href='https://www.facebook.com/ClusturDurango'
          className='text-white flex justify-center align-items px-3 py-4 hover:opacity-80 transition-all'
        >
          <FaFacebookF size={20} />
        </a>
        <a
          target='_blank'
          href='https://www.instagram.com/clusturdgo'
          className='text-white flex justify-center align-items px-3 py-4 hover:opacity-80 transition-all'
        >
          <FaInstagram size={20} />
        </a>
        <a
          href='mailto:clusturdgo2410@gmail.com'
          className='text-white flex justify-center align-items px-3 py-4 hover:opacity-80 transition-all'
        >
          <MdEmail size={20} />
        </a>
      </div>
    </div>
  )
}
