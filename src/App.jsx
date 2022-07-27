import { useState, useEffect} from 'react'
import Header from "./components/Header"
import Form from './components/Form'
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem("pacientes"))?? [])
  const [paciente, setPaciente] = useState({})

useEffect(() =>{
  localStorage.setItem("pacientes", JSON.stringify(pacientes))
}, [pacientes])

  const eliminarPaciente = (id) =>{
    const pacienteActualizado = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacienteActualizado)

  }

  return (
    <div className=" w-full container text-center">
      <Header/>
      <div className=" w-full my-20 md:flex">
        <Form
        pacientes ={pacientes}
        setPacientes={setPacientes} 
        paciente ={paciente}
        setPaciente ={setPaciente}
        />

        <ListadoPacientes
        pacientes ={pacientes}
        setPaciente = {setPaciente}
        eliminarPaciente ={eliminarPaciente}
        />
      </div>
     
    </div>
  )
}

export default App