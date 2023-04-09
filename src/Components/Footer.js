import { ReactComponent as IconFB } from '../assets/redes/fb.svg';
import { ReactComponent as IconWP } from '../assets/redes/wp.svg';
import { ReactComponent as IconEmail } from '../assets/redes/email.svg';
import { ReactComponent as IconIG } from '../assets/redes/ig.svg';
import { ReactComponent as IconYT } from '../assets/redes/yt.svg';
import { IconPhone } from './Icons';

const Footer = () => {
  return (
    <footer className=' font-poppins bg-blue_cero border-t border-blue_light py-10 px-10 '>
      <div className='max-w-7xl px-10 mx-auto grid grid-cols-1 footer '>
        <div className='w-full px-5  '>
          <div className='px-5 pb-5 mx-auto w-48  '>
            <span className='text-purple_normal font-medium '>SOBRE IDEXAPERU</span>
            <p className='text-blue_primary  w-52 pt-3'>
              Somos una empresa totalmente digital, nos dedicamos a dar solución a tus problemas informáticos
            </p>
          </div>
        </div>
        <div className='w-full px-5 '>
          <div className='px-5 pb-5 mx-auto w-48  '>
            <span className='text-purple_normal font-medium'>REDES SOCIALES</span>
            <ul className='flex flex-col gap-3 pt-4'>
              <li className='flex items-center gap-2 text-blue_primary'>
                <span ><IconFB /></span>
                <a href='https://www.facebook.com/idexa.peru'>facebook</a>
              </li>
              <li className='flex items-center gap-2 text-blue_primary'>
                <span ><IconIG /></span>
                <a >instagram</a>
              </li>
              <li className='flex items-center gap-2 text-blue_primary'>
                <span ><IconYT /></span>
                <a >youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='w-full px-5 ' >
          <div className='px-5 pb-5 mx-auto w-48  '>
            <span className='text-purple_normal font-medium'>CONTÁCTENOS</span>
            <ul className='flex flex-col gap-3 pt-4'>
              <li className='flex items-center gap-2 text-blue_primary'>
                <span ><IconEmail /></span>
                <a >idexaperu@gmail.com</a>
              </li>
              <li className='flex items-center gap-2 text-blue_primary -ml-1'>
                <span ><IconPhone /></span>
                <a >993 113 084</a>
              </li>
              <li className='flex items-center gap-2 text-blue_primary'>
                <span ><IconWP /></span>
                <a >993 113 084</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </footer >
  );
}

export default Footer;