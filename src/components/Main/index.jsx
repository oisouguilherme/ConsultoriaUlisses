import bg from "../../assets/ULISSES3.png";
export function Main() {
  return (
    <div className="text-center flex items-center ">
      <div className="w-2/3 space-y-1 block">
        <p className="text-3xl font-black mb-5">
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
        <div className="text-xl font-bold ">
          <p className="mt-8">
            De: <span>R$ 497,00</span>
          </p>
          <p>
            Por: 2X de <span>R$ 97,00</span>
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <img src={bg} alt="" />
      </div>
    </div>
  );
}
