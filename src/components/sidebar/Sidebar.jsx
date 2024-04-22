import React from 'react'
import './sidebar.css'

function Sidebar({ dataDGT, tituloClicked }) {

    return (
        <>
            <div className='side'>
                {dataDGT.map(data => (
                    <>
                        <h2 className="text-red-500 font-bold" key={data.tema}>{data.tema}</h2>
                        {data.child.map(dataChild => (
                            <button
                                key={dataChild.titulo} // Agrega una clave única para cada botón
                                className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 ml-5 py-2 px-4 rounded"
                                onClick={() => tituloClicked(dataChild.titulo)} // Pasar el título como argumento
                            >
                                {dataChild.titulo}
                            </button>
                        ))}
                    </>
                ))}
            </div>
        </>
    )
}

export { Sidebar }