import React from 'react'
import { useState, useEffect } from 'react'

const Form = () => {
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [sintomas, setSintomas] = useState("")
  const [fechaAlta, setFechaAlta] = useState("")

  const handleSubmit = (e) =>{
    e.prventDefault()
    console.log("Formulario enviado...")
  }

  return (
    
      <div className='md:w-1/2 lg:w-2/5 md:mx-40'>
        <h2 className="text-3xl font-black">Formulario</h2>
        <span className=' my-3 text-2xl font-black text-orange-900'>Añade pacientes</span>

        <form onSubmit={handleSubmit} className='my-5 mb-10 bg-white shadow-lg rounded-lg p-5'>
          <div className='mb-5'>
            <label htmlFor='paciente' className='block font-bold text-slate-800 uppercase'>Nombre de paciente</label>
            <input
               id='paciente'
               className=' w-full p-2 mt-2 border-2 placeholder-slate-400 uppercase' 
               placeholder='Nombre'
               type="text" 
               value={nombre}
               onChange={(e)=>setNombre(e.target.value)} />
          </div>
          <div className='mb-5'>
            <label htmlFor='emial' className='block font-bold text-slate-800 uppercase'>email</label>
            <input
               id='email'
               className=' w-full p-2 mt-2 border-2 placeholder-slate-400 uppercase' 
               placeholder='Email '
               type="email" 
               value={email}
               onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className='mb-5'>
            <label htmlFor='sintomas' className='block font-bold text-slate-800 uppercase'>sintomas</label>
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
               className=' w-full p-2 mt-2 border-2 placeholder-slate-400 uppercase' 
               type="date"
               value={fechaAlta}
               onChange={(e)=>setFechaAlta(e.target.value)} />
          </div>
          <input
            className=' rounded-lg uppercase bg-orange-700 hover:bg-orange-900 cursor-pointer transition-colors w-full p-2 text-white font-black'
            type="submit" 
            value="Agregar paciente"/>
          
        </form>
      </div>
    
  )
}

export default Form
