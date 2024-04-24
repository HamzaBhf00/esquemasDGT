import { React, useState } from 'react'
import './sidebar.css'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function SidebarMenu({ dataDGT, tituloClicked }) {

    const [toggled, setToggled] = useState(false)
    const [broken, setBroken] = useState(window.matchMedia('(max-width: 800px)').matches)



    return (
        <>
            <div className="side">
                <Sidebar toggled={toggled} customBreakPoint="800px" onBreakPoint={setBroken} >
                    <h2 className="font-bold text-2xl text-center">EsquemasDGT</h2>
                    <Menu>
                        {dataDGT.map(data => (
                            <SubMenu key={data.tema} label={data.tema}>
                                {data.child.map(dataChild => (
                                    <MenuItem key={dataChild.titulo} onClick={() => tituloClicked(dataChild.titulo)}>
                                        {dataChild.titulo}
                                    </MenuItem>
                                ))}
                            </SubMenu>
                        ))}
                    </Menu>
                </Sidebar>
                <div>
                    {broken && (
                        <button className="" onClick={() => setToggled(!toggled)}>
                            Toggle
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export { SidebarMenu }