import React from 'react'
import Paciente from '../components/Paciente'

const ListadoPacientes = ({pacientes}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>

        <h2 className='font-black text-center text-3xl text-black'>Listado de pacientes</h2>
        <span className='text-orange-900 text-2xl font-bold'>Administra tus pacientes</span>

        {pacientes.map( paciente => ( 
           <Paciente
            key={paciente.id}
            paciente = {paciente} />
        ))}    
         
    </div>
  )
}

export default ListadoPacientes
