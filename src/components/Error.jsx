import React from 'react'

export const Error = ({children}) => {
  return (
        <div className="font-bold m-4 p-4 bg-red-800 text-sm text-white uppercase rounded-md">
            <p>{children}</p>
        </div>
  )
}
