import { Header } from "./components/Header/Index"
import bg from './assets/ULISSES3.png'
import { Main } from "./components/Main"
import { Conteudo } from "./components/Conteudo"
import { SeuMentor } from "./components/SeuMentor"
import { ButtonCompra } from "./components/Main/ButtonCompra"
import { Footer } from "./components/Footer"
import { Feedback } from "./components/Feedback"
function App() {

  return (
    <div className="teste h-full w-full px-8 md:px-24 py-12 pb-0 bg-white">
      <Header/>
      <Main />
      <Conteudo />
      <Feedback/>
      <SeuMentor/>
      <ButtonCompra text={"Compre agora"}/>
      <Footer/>
    </div>
  )
}

export default App
