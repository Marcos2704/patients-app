import { useState} from 'react'
import Header from "./components/Header"
import Form from './components/Form'
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState([])

  return (
    <div className=" w-full container text-center">
      <Header/>
      <div className=" w-full my-20 md:flex">
        <Form
        pacientes ={pacientes}
        setPacientes={setPacientes} 
        />

        <ListadoPacientes
        pacientes ={pacientes}
        />
      </div>
     
    </div>
  )
}

export default App