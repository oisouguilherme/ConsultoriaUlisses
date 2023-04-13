import livro from "../../assets/livro.png";

export function Livro() {
  return (
    <div className="bg-black opacity-95 py-24 px-4 flex flex-col items-center text-center space-y-2 pt-12 lg:mt-0">
      <p className="text-4xl lg:text-5xl font-black text-roxo mb-12">Você ainda pode ganhar um livro grátis</p>
      <img
        className="w-40 md:w-72"
        src={livro}
        alt="imagem da capa do livro Isso é Marketing do Seth Godin"
      />
      <p className="font-medium text-xl">
        O melhor aluno ganhará um livro{" "}
        <span className="text-roxo font-bold">GRÁTIS</span> .
      </p>
    </div>
  );
}
