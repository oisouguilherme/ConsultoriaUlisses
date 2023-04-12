import bg from "../../assets/bg.png";
import mentoria from "../../assets/mentoria.png";
import { ButtonCompra } from "./ButtonCompra";
export function Main() {
  return (
    <section id="main" className="text-center items-center lg:text-start space-y-12 flex flex-col lg:flex-row gap-4 relative">
      <div className="w-full lg:w-2/3 space-y-1 block z-10">
        <img className="w-80 pb-12" src={mentoria} alt="" />
        <p className="text-3xl font-black pb-8 text-roxo">
          Não saber como usar o Instagram para se comunicar com seus seguidores
          te incomoda não saber como transformar os seus seguidores em clientes? 
        </p>
        <p className="text-xl">
          Você irá participar de uma mentoria on-line pelo ZOOM, durante três
          dias irá aprender tudo que deseja sobre transformar a sua audiência em
          clientes através do Instagram.{" "}
        </p>
        <p className="text-xl">
          Após a sua compra, iremos te enviar todas as instruções por e-mail e o
          link de acesso.{" "}
        </p>
        <p className="text-xl">As mentorias serão nos dias 24, 25,26 de abril </p>
        <p className="text-xl">Todos os encontros acontecerão às 20h pela plataforma ZOOM.</p>
        <div className="text-2xl font-bold py-12 cursor-pointer ">
          <p className="line-through">
            De: <span>R$ 497,00</span>
          </p>
          <p className="">
            Por: 2X de <span>R$ 102,79</span>
          </p>
        </div>
        <ButtonCompra text={'Comprar agora'}/>
      </div>
      <div className="w-3/4 lg:w-2/3 pb-8 md:pb-0 lg:absolute lg:-right-24 lg:-top-28">
        <img className=" hover:shadow-roxo" src={bg} alt=" imagem do seu mentor lisses" />
      </div>
    </section>
  );
}
