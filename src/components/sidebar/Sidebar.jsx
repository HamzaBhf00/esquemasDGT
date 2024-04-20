import React from 'react'
import './sidebar.css'

function Sidebar({titulos, temaClicked }) {

    return (
        <div>
            <div className='side'>
                <h1>Sidebar</h1>
                {titulos.map((tema) =>
                (<button className="flex bg-blue-500 hover:bg-blue-700 text-white font-bold mt-4 ml-5 py-2 px-4 rounded"
                    onClick={() => temaClicked(tema)}>{tema}
                </button>)
                )}
            </div>
        </div>
    )
}

export { Sidebar }