export function ButtonCompra({text}){
  return (
    <div className="md:w-1/2 mx-auto bg-roxo rounded-md py-4 text-xl font-black shadow-xl hover:shadow-roxoclaro hover:scale-105 text-center duration-300 text-white">
      <a href="https://pay.hotmart.com/P81373984C" target="_blank">
        {text}
      </a>
    </div>
  );
}