import { Link } from 'react-scroll'
import logo from '../../assets/logo.png'

export function Header(){
  return(
    <section id='header' className="w-full text-roxo pb-12">
      <div className="flex justify-between items-center flex-col md:flex-row text-center space-y-4">
        <img src={logo} alt="logo venda qualquer coisa" className="w-48" />
        <ul className="flex space-x-12 font-medium text-xl cursor-pointer">
          <li className='hover:scale-x-110 hover:text-roxoclaro '><Link to=''>Inicio</Link></li>
          <li className='hover:scale-x-110 hover:text-roxoclaro'><Link to='Conteudo' smooth={true} duration={500}>Modulos</Link></li>
          <li className='hover:scale-x-110 hover:text-roxoclaro'><Link to='Mentor' smooth={true} duration={500}>Sobre</Link></li>
        </ul>
      </div>
    </section>
  )
}