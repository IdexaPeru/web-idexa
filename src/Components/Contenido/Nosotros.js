import { LG_CASACHEF, LG_COOKING, LG_FOOTLOOSE, LG_JR, LG_SANPEDRO } from '../../Variables/imagenes';
import { LINK_CASACHEF, LINK_FOOTLOOSE, LINK_COOKING, LINK_SANPEDRO } from '../../Variables/linkempresas';

const Nosotros = () => {
  return (
    <section id="section-03" className='ancla my-10 px-5 w-full '>
      <div className='max-w-7xl mx-auto'>
        <h2 className='font-bold  text-center text-xl pb-4'><span className=''>NUESTRAS</span> COLABORACIONES</h2>
        <div className='max-w-sm mx-auto'>
          <p className='text-center text-blue_primary '>Empresas que han confiado en nuestras habilidades para llevar a cabo sus objetivos.</p>
        </div>
        <div className='pt-10 grid grid-cols-1 nosotros gap-10'>
          <div className=' w-full flex justify-center  itemnosotros   '>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={LINK_COOKING}
            >
              <img src={LG_COOKING} className='imgnosotros   object-scale-down' alt='cooking gourmet' />
            </a>
          </div>

          <div className=' w-full flex justify-center itemnosotros'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={LINK_FOOTLOOSE}
            >
              <img src={LG_FOOTLOOSE} alt='footloose' className='imgnosotros  object-scale-down' />
            </a>
          </div>

          <div className=' w-full flex justify-center itemnosotros'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={LINK_SANPEDRO}
            >
              <img src={LG_SANPEDRO} alt='instituto san pedro' className='imgnosotros  object-scale-down' />
            </a>
          </div>
          <div className=' w-full flex justify-center itemnosotros'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={LINK_CASACHEF}
            >
              <img src={LG_CASACHEF} className='imgnosotros  h-28  object-scale-down' alt='la casa del chef' />
            </a>
          </div>
          <div className=' w-full flex justify-center itemnosotros'>
            <a
            >
              <img src={LG_JR} alt='inversiones jr huancayo' className='imgnosotros  h-28  object-scale-down' />
            </a>
          </div>
          <div className=' w-full flex justify-center itemnosotros object-scale-down'>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;