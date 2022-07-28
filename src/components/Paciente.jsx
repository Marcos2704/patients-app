import React from 'react'

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, email, sintomas, fechaAlta, id} = paciente

  return (
    <div className=" text-left rounded-md m-5 bg-white">
        <p className="uppercase font-bold text-slate-700 p-3">nombre:{" "}
            <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="uppercase font-bold text-slate-700 p-3">email:{" "}
            <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="uppercase font-bold text-slate-700 p-3">sintomas:{" "}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>
        <p className="uppercase font-bold text-slate-700 p-3">alta:{" "}
            <span className="font-normal normal-case">{fechaAlta}</span>
        </p>
        <div className="flex justify-between">
            <button 
                className="uppercase p-5 m-5 text-lg text-indigo-700 rounded-lg font-bold hover:bg-indigo-700 hover:text-white transition-colors"
                onClick={()=>setPaciente(paciente)}>
                editar
            </button>
            <button 
                className="uppercase p-5 m-5 text-lg text-red-700 rounded-lg font-bold hover:bg-red-700 hover:text-white transition-colors"
                onClick={() => eliminarPaciente(id)}>
                eliminar
            </button>
        </div>
</div>

  )
}

export default Paciente
