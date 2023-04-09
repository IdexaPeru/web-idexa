import { BsWhatsapp } from 'react-icons/bs'
import { MENSAJE_WHATSAPP, NUMERO_MOVIL } from '../../Variables/globales';
const BtnWhatsapp = () => {
  return (
    <a
      target="_blank"
      href={`https://wa.me/${NUMERO_MOVIL}?text=${MENSAJE_WHATSAPP}`}
      rel='noopener noreferrer'
      className='fixed right-16 bottom-20 text-6xl cursor-pointer bg-green-500 rounded-full shadow-2xl '>
      <BsWhatsapp className='text-white p-4' />
    </a>
  );
}

export default BtnWhatsapp;