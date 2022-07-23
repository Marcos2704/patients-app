import Form from "./components/Form"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  return (
    <div className=" w-full container text-center">
      <Header/>
      <div className=" w-full my-20 md:flex">
        <Form/>
        <ListadoPacientes/>
      </div>
     
    </div>
  )
}

export default App