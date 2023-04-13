export function ItemLista({text}) {
  return (
    <li className="bg-preto flex flex-col w-64 h-56 justify-center items-center text-center px-4 rounded-lg cursor-pointer duration-300 border-2 border-black hover:border-roxo">
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="black"
          class="bi bi-check-all"
          viewBox="0 0 16 16"
        >
          <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z" />
        </svg>
      </div>
      <p>{text}</p>
    </li>
  );
}
