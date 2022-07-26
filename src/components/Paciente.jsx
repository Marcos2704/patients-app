import React from 'react'

const Paciente = ({paciente}) => {

    const {nombre, email, sintomas, fechaAlta} = paciente

  return (
    <div className=" text-left rounded-md m-5 bg-white">
        <p className="uppercase font-bold text-slate-700 p-3">nombre:{" "}
            <span className="uppercase">{nombre}</span>
        </p>
        <p className="uppercase font-bold text-slate-700 p-3">email:{" "}
            <span className="uppercase">{email}</span>
        </p>
        <p className="uppercase font-bold text-slate-700 p-3">sintomas:{" "}
            <span className="uppercase">{sintomas}</span>
        </p>
        <p className="uppercase font-bold text-slate-700 p-3">alta:{" "}
            <span className="uppercase">{fechaAlta}</span>
        </p>
</div>

  )
}

export default Paciente
