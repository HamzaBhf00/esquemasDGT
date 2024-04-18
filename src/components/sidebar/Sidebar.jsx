import React from 'react'
import './sidebar.css'
import dataDGT from '../../data/dgt.json'

function Sidebar() {
    const data = dataDGT

    return (
        <div>
            <div className='side'>
                <h1>Sidebar</h1>
                {data.map(datas =>
                    <p key={datas.tema}>{datas.tema}</p>
                )}
            </div>
            
        </div>



    )
}

export { Sidebar }