import React from 'react'
import Paciente from '../components/Paciente'


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return(
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ? (
          <>
             <h2 className='font-black text-center text-3xl text-black'>Listado de pacientes</h2>
            <span className='text-orange-900 text-2xl font-bold'>Administra tus pacientes</span>

            {pacientes.map( paciente => ( 
              <Paciente
                key={paciente.id}
                paciente = {paciente}
                setPaciente={setPaciente} 
                eliminarPaciente = {eliminarPaciente}
              />
            ))} 
         </>
    
      ) : (
          <>
            <h2 className='font-black text-center text-3xl text-black'>No hay pacientes </h2>
            <span className='text-orange-900 text-2xl font-bold'>Ingrese los datos de un paciente y vealo aqui</span>
          </>
    )}
       
     </div>
  )

    
 }  

export default ListadoPacientes
