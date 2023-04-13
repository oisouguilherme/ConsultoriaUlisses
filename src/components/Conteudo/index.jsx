import { ItemLista } from "./ItemLista";

export function Conteudo() {
  return (
    <section id="Conteudo" className="space-y-12 bg-black px-8 md:px-24 py-24">
      <h2 className="text-center text-4xl lg:text-5xl font-black text-roxo">
        O que irá aprender na mentoria:
      </h2>

      <div className="text-2xl">
        <ul className="flex flex-wrap gap-6 justify-center">
          <ItemLista text={"Posicionamento no digital "} />
          <ItemLista text={"Como criar conteúdo todos os dias"} />
          <ItemLista text={"Construir a sua linha editorial"} />
          <ItemLista text={"Perder o medo de falar"} />
          <ItemLista text={"Crie seu primeiro produto"} />
          <ItemLista text={"Aprenda a vender pelo Instagram"} />
          <ItemLista text={"Como criar stories que conectam"} />
          <ItemLista text={"+100 ideias de conteúdo"} />
        </ul>
      </div>
    </section>
  );
}
