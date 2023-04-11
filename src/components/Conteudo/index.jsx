import livro from "../../assets/livro.png";
import { ItemLista } from "./ItemLista";

export function Conteudo() {
  return (
    <section id="Conteudo" className="py-24 space-y-12">
      <h2 className="text-center text-3xl font-black text-roxo">
        O que irá aprender na mentoria:
      </h2>
      <div className="flex flex-wrap-reverse justify-around gap-12 md:gap-0">
        <div className=" flex flex-col items-center text-center space-y-2 mt-12 lg:mt-0">
          <img className="w-72" src={livro} alt="" />
          <p className="font-medium text-xl">Melhor aluno ganhará um livro <span className="text-roxo font-bold">GRÁTIS</span> .</p>
        </div>
        <div className="text-2xl ">
          <ul className="space-y-12 md:space-y-4">
            <ItemLista text={"Posicionamento no digital "}/>
            <ItemLista text={"Como criar conteúdo todos os dias"}/>
            <ItemLista text={"Construir a sua linha editorial"}/>
            <ItemLista text={"Crie seu primeiro produto"}/>
            <ItemLista text={"Aprenda a vender pelo Instagram"}/>
            <ItemLista text={"Como criar stories que conectam"}/>
            <ItemLista text={"+100 ideias de conteúdo"}/>
          </ul>
        </div>
      </div>
    </section>
  );
}
