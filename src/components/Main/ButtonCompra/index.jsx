export function ButtonCompra({ text }) {
  return (
    <a
      href="https://pay.hotmart.com/P81373984C"
      target="_blank"
      className=" px-8 md:px-36 mx-auto bg-roxo rounded-md py-4 text-xl font-black shadow-xl hover:shadow-roxoclaro hover:scale-105 text-center duration-300 text-white"
    >
      {text}
    </a>
  );
}
