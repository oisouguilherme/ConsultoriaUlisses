import { Header } from "./components/Header/Index"
import { Main } from "./components/Main"
import { Conteudo } from "./components/Conteudo"
import { SeuMentor } from "./components/SeuMentor"
import { ButtonCompra } from "./components/Main/ButtonCompra"
import { Footer } from "./components/Footer"
import { Feedback } from "./components/Feedback"
function App() {

  return (
    <div className="teste  h-full w-full px-8 md:px-24 py-12 pb-0 bg-white">
      <Header/>
      <Main />
      <Conteudo />
      <Feedback/>
      <SeuMentor/>
      <div className="lg:flex justify-center"> 
        <ButtonCompra text={"Compre agora"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
