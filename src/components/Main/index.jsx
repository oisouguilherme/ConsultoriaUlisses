import bg from "../../assets/ULISSES3.png";
import { ButtonCompra } from "./ButtonCompra";
export function Main() {
  return (
    <section id="main" className="text-center space-y-12 flex flex-col-reverse lg:flex-row items-center gap-4">
      <div className="w-full lg:w-2/3 space-y-1 block">
        <p className="text-3xl font-black mb-5 text-roxo">
          Não saber como usar o Instagram para se comunicar com seus seguidores
          te incomoda?
        </p>
        <p className="text-xl">
          Você irá participar de uma mentoria on-line pelo ZOOM durante três
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
            Por: 2X de <span>R$ 97,00</span>
          </p>
        </div>
        <ButtonCompra text={'Comprar agora'}/>
      </div>
      <div className="w-full lg:w-1/2 pb-8 md:pb-0">
        <img className="rounded-md shadow-2xl hover:shadow-roxo" src={bg} alt="" />
      </div>
    </section>
  );
}
