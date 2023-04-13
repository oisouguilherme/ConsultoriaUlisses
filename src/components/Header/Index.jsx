import { Link } from 'react-scroll'
import logo from '../../assets/logo.png'

export function Header(){
  return(
    <section id='header' className=" w-full text-white pb-12 px-8 md:px-24 py-12">
      <div className="flex justify-between items-center flex-col md:flex-row text-center space-y-4 ">
        <img src={logo} alt="logo venda qualquer coisa" className="w-48 z-10" />
        <ul className="flex space-x-12 md:font-black text-2xl cursor-pointer z-10">
          <li className='hover:scale-x-110 hover:text-roxo duration-300'><Link to=''>Inicio</Link></li>
          <li className='hover:scale-x-110 hover:text-roxo duration-300'><Link to='Conteudo' smooth={true} duration={500}>Modulos</Link></li>
          <li className='hover:scale-x-110 hover:text-roxo duration-300'><Link to='Mentor' smooth={true} duration={500}>Sobre</Link></li>
        </ul>
      </div>
    </section>
  )
}