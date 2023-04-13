import { ButtonCompra } from "../Main/ButtonCompra";
import pagamento from "../../assets/payments.svg";
export function Compra() {
  return (
    <div className="bg-black py-24 text-white flex flex-col lg:flex-row justify-center items-center gap-12 px-4">
      <div className="bg-preto text-xl flex flex-col text-center items-center space-y-4 font-bold border-4 rounded border-roxo py-12 px-8 md:w-96">
        <p className="text-3xl font-black">
          E qual o <span className="text-roxo">valor?</span>{" "}
        </p>
        <p>
          Tudo isso por um investimento<br /> de:
        </p>
        <p className="opacity-60 line-through">R$ 497,00</p>
        <p>Por apenas:</p>
        <p className="text-4xl text-roxo font-black">
          <span className="text-2xl font-bold text-white opacity-60">2x </span>
          R$ 97,00
        </p>
        <a
          href="https://pay.hotmart.com/P81373984C"
          target="_blank"
          className="w-full mx-auto bg-roxo rounded-md py-4 text-xl font-black shadow-xl hover:shadow-roxoclaro hover:scale-105 text-center text-white duration-300"
        >
          Comprar agora
        </a>
        <img className="w-64" src={pagamento} alt="" />
      </div>
    </div>
  );
}
