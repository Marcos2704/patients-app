import React from 'react'
import { useState, useEffect } from 'react'
import { Error } from './Error'

const Form = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [sintomas, setSintomas] = useState("")
  const [fechaAlta, setFechaAlta] = useState("")

  const [error, setError] = useState(false)

  useEffect( () =>{
    if(Object.keys(paciente).length > 0) {
        setNombre(paciente.nombre)
        setEmail(paciente.email)
        setSintomas(paciente.sintomas)
        setFechaAlta(paciente.fechaAlta)
    }
  }, [paciente])



  const generarId = () =>{
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(6)

    return random + fecha
  }


  const handleSubmit = (e) =>{

    e.preventDefault() 
    if([nombre, email, sintomas, fechaAlta].includes("")){
        //console.log("Todos los campos tienen que estar llenos")
        setError(true)
    }
    else{
      setError(false)
      const objectPacientes ={
          nombre,
          email,
          sintomas,
          fechaAlta,
      }

      if(paciente.id){
        objectPacientes.id = paciente.id
        const pacienteActualizado = pacientes.map(
          pacienteState =>pacienteState.id === paciente.id ? objectPacientes : pacienteState)
          setPacientes(pacienteActualizado)
          setPaciente({})
        }

      else{
        objectPacientes.id = generarId()
        setPacientes([...pacientes, objectPacientes])
        setPaciente({})
      }

      

      setNombre("")
      setEmail("")
      setSintomas("")
      setFechaAlta("")
    }

  }

  return (
    
      <div className='md:w-1/2 lg:w-2/5 md:mx-40'>
        <h2 className="text-3xl font-black">Formulario</h2>
        <span className=' my-3 text-2xl font-black text-orange-900'>Añade pacientes</span>

        <form onSubmit={handleSubmit} className='my-5 mb-10 bg-white shadow-lg rounded-lg p-5'>
          {error && <Error><p>Todos los campos son obligatorios</p></Error>}
          <div className='mb-5'>
            <label htmlFor='paciente' className='block font-bold text-slate-800 uppercase'>Nombre de paciente</label>
            <input
               id='paciente'
               className=' w-full p-2 mt-2 border-2 placeholder-slate-400' 
               placeholder='Nombre'
               type="text" 
               value={nombre}
               onChange={(e)=>setNombre(e.target.value)} />
          </div>
          <div className='mb-5'>
            <label htmlFor='emial' className='block font-bold text-slate-800 uppercase'>email</label>
            <input
               id='email'
               className=' w-full p-2 mt-2 border-2 placeholder-slate-400' 
               placeholder='Email '
               type="email" 
               value={email}
               onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className='mb-5'>
            <label htmlFor='sintomas' className='block font-bold text-slate-800 uppercase '>sintomas</label>
            <textarea 
            id="sintomas" 
            placeholder='Escriba su sintoma'
            className='w-full border-2 rounder-lg'
            value={sintomas}
            onChange={(e)=>setSintomas(e.target.value)}
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='alta' className='block font-bold text-slate-800 uppercase'>fecha de alta</label>
            <input
               id='alta'
               className=' w-full p-2 mt-2 border-2 placeholder-slate-400' 
               type="date"
               value={fechaAlta}
               onChange={(e)=>setFechaAlta(e.target.value)} />
          </div>
          <input
            className=' uppercase rounded-lg  bg-orange-700 hover:bg-orange-900 cursor-pointer transition-colors w-full p-2 text-white font-black'
            type="submit" 
            value= {paciente.id? "Editar paciente" : "Agregar paciente"} />
          
        </form>
      </div>
    
  )
}

export default Form
