import service2 from '../../assets/servicios/serv2.svg'
import service3 from '../../assets/servicios/serv3.svg'
import service4 from '../../assets/servicios/serv4.svg'
import service5 from '../../assets/servicios/serv5.svg'
import service6 from '../../assets/servicios/serv6.svg'
import { FaPaintBrush } from 'react-icons/fa'

const Servicios = () => {
  return (
    <section id="section-02" className='ancla w-full bg-blue_cero border-blue_normal'>
      <div className='max-w-7xl px-10 mx-auto  pb-10'>
        <h3 className='font-poppins text-center text-blue_normal py-7'>---- NUESTROS SERVICIOS ----</h3>
        <div className='servicios grid grid-cols-1  lg:grid-cols-3   gap-5 place-items-stretch  h-full'>
          <div className=' w-full md:temservice h-52  flex items-center gap-3 flex-col text-center'>
            <span className='block bg-blue_light rounded-full p-4'>
              <img src={service5} alt='soporte tecnico' />
            </span>
            <h4 className='text-lg font-medium'>Soporte técnico</h4>
            <p className='text-blue_primary'>Mantenimiento y reparacion <br /> de computadora, laptop e <br /> impresoras con solución <br /> ágil y eficaz.</p>
          </div>
          <div className='w-full md:temservice h-52  flex items-center gap-3 flex-col text-center'>
            <span className='block bg-blue_light rounded-full p-4'>
              <img src={service2} alt='desarrollo web' />
            </span>
            <h4 className='text-lg font-medium'>Desarrollo web</h4>
            <p className='text-blue_primary'>Gestiona tu empresa
              con <br /> sistemas adaptados
              a tus <br /> necesidades, sistemas de <br /> aspecto visual, único e intuitivo</p>
          </div>
          <div className='w-full md:temservice h-52  flex items-center gap-3 flex-col text-center'>
            <span className='block bg-blue_light rounded-full p-4'>
              <img src={service3} alt='marqueting digital' />
            </span>
            <h4 className='text-lg font-medium'>Marketing digital</h4>
            <p className='text-blue_primary'>Conecta a más personas con <br /> tu negocio a través de páginas <br /> web y gestión redes sociales</p>
          </div>
          <div className='w-full md:temservice h-52  flex items-center gap-3 flex-col text-center'>
            <span className='block bg-blue_light rounded-full p-4'>
              <img src={service4} alt='asesoramiento informatico' />
            </span>
            <h4 className='text-lg font-medium'>Asesoramiento</h4>
            <p className='text-blue_primary'>Una buena asesoría ayudara <br />
              a su empresa prevenir y evitar  <br /> fallas técnicas con sus <br />
              equipos de cómputo.</p>
          </div>
          <div className='w-full md:temservice h-52  flex items-center gap-3 flex-col text-center'>
            <span className='block bg-blue_light rounded-full p-4'>
              <img src={service6} alt='redes y cableado estructurado' />
            </span>
            <h4 className='text-lg font-medium'>Redes y cableado estructurado</h4>
            <p className='text-blue_primary'>Auditoría e implantación, <br /> certificación y mantenimiento <br /> de cableado estructurado y <br /> redes inalámbricas.</p>
          </div>
          <div className='w-full md:temservice h-52  flex items-center gap-3 flex-col text-center'>
            <span className='block bg-blue_light rounded-full p-4'>
              <FaPaintBrush className='text-blue_primary stroke-2' />
              {/* <img src={service1} /> */}
            </span>
            <h4 className='text-lg font-medium'>Diseño gráfico</h4>
            <p className='text-blue_primary'>Conecta con tu público <br /> objetivo con  diseños que <br />exprese las intenciones <br /> de tu negocio.</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Servicios;