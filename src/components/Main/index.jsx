import bg from "../../assets/bd-black.png";
import mentoria from "../../assets/mentoria-black.png";
import { ButtonCompra } from "./ButtonCompra";
import './Main.css'

export function Main() {
  return (
    <section id="main" className="text-center items-center space-y-12 flex flex-col lg:flex-row gap-4 relative px-8 md:px-24 py-24 text-white ">
      <div className="w-full space-y-1 block z-10">
        <img className="w-80 pb-12" src={mentoria} alt="" />
        <p className="text-2xl md:text-5xl font-black pb-8 text-roxo">
        Quer aprender a usar o seu Instagram para transformar os seus seguidores em clientes?
        </p>
        <p className="text-xl md:text-3xl font-bold">
        Você irá participar de uma mentoria on-line pelo  ZOOM, durante três dias irá aprender como transformar a sua audiência em clientes através do Instagram. 
        </p>
        <p className="text-xl md:text-3xl font-bold">
        Após a sua compra, iremos te enviar todas as instruções por e-mail e o link de acesso. 
        </p>
        <p className="text-xl md:text-3xl font-bold">As mentorias serão nos dias 29, 30,31  de mail pelo ZOOM às 20h.
</p>
        
        <div className="text-xl md:text-3xl font-bold py-12 cursor-pointer ">
          <p className="line-through">
            De: <span>R$ 497,00</span>
          </p>
          <p className="text-3xl">
            Por: 2x de <span className="text-4xl">R$ 97,00</span>
          </p>
        </div>
        <ButtonCompra text={'Comprar agora'}/>
      </div>
      
    </section>
  );
}
