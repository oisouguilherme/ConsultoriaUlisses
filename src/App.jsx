import { Header } from "./components/Header/Index"
import bg from './assets/ULISSES3.png'
import { Main } from "./components/Main"
import { Conteudo } from "./components/Conteudo"
import { SeuMentor } from "./components/SeuMentor"
import { ButtonCompra } from "./components/Main/ButtonCompra"
import { Footer } from "./components/Footer"
function App() {

  return (
    <div className="teste h-full w-full px-8 md:px-24 py-12 pb-0 bg-black">
      <Header/>
      <Main />
      <Conteudo />
      <SeuMentor/>
      <ButtonCompra text={"Compre agora"}/>
      <Footer/>
    </div>
  )
}

export default App
