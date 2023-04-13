import { Link } from "react-scroll";

export function Footer() {
  return (
    <section className="text-center pb-2 pt-6 flex flex-col items-center px-8 md:px-24 bg-black">
      <Link to="main" smooth={true} duration={500} className="w-fit flex flex-col gap-1 cursor-pointer items-center pb-8 hover:scale-110 font-bold text-lg ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="white"
          class="bi bi-arrow-up-circle"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
          />
        </svg>
        <p>Voltar para cima</p>
      </Link>
      <p>© 2023 Venda Qualquer Coisa - Todos os direitos reservados.</p>
    </section>
  );
}
