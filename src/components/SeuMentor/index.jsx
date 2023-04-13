import mentor from "../../assets/bd-black.png";

export function SeuMentor() {
  return (
    <section id="Mentor" className="space-y-8 px-8 md:px-24 py-24 bg-black opacity-95">
      <h2 className="text-4xl lg:text-5xl font-black text-center text-roxo">Seu mentor:</h2>
      <div className="flex justify-around items-center lg:items-start flex-col lg:flex-row">
        <img className="w-96 rounded-full" src={mentor} alt="Imagem do seu mentor, Ulisses" />
        <div className="text-2xl pt-5 md:p-24 text-center space-y-24 flex flex-col items-center">
          <p className="font-medium">
            Sou Ulisses, engenheiro, especialista em Gestão Estratégica, fundei
            a primeira agência de marketing digital de Buritis, MG. <br />{" "}
            Trabalho há 8 anos com vendas, marketing e comunicação.
          </p>
        </div>
      </div>
    </section>
  );
}
