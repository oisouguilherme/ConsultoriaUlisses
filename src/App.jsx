import { Header } from "./components/Header/Index"
import { Main } from "./components/Main"
import { Conteudo } from "./components/Conteudo"
import { SeuMentor } from "./components/SeuMentor"
import { Footer } from "./components/Footer"
import { Feedback } from "./components/Feedback"
import './components/Main/Main.css'
import { Compra } from "./components/Compra"
import { Livro } from "./components/Livro"
import { Paraquem } from "./components/Paraquem"
function App() {

  return (
    <>
      <div className="bg-image">
        <div className="bg-opacity">
        </div>
          <Main />
      </div>
      <div className="h-full w-full text-white">
        <Paraquem />
        <Conteudo />
        <Livro/>
        <Feedback/>
        <SeuMentor/>
        <Compra />
        <Footer/>
      </div>
    </>
  )
}

export default App
