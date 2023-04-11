import logo from '../../assets/logo.png'

export function Header(){
  return(
    <div className="w-full relative">
      <div className="flex justify-between">
        <img src={logo} alt="" className="w-48" />
        <ul className="flex space-x-6 font-medium text-xl">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Modulos</a></li>
          <li><a href="#">Sobre mim</a></li>
        </ul>
      </div>
    </div>
  )
}