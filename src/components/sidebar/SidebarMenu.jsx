import React, { useState, useEffect } from 'react'
import './sidebar.css'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

function SidebarMenu({ dataDGT, tituloClicked }) {

    const [broken, setBroken] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            // Comprobar si la ventana es lo suficientemente pequeña como para considerarse rota
            if (window.innerWidth < 800) { // Por ejemplo, 768 es el ancho típico de un pequeño dispositivo (como un teléfono)
                setBroken(true);
            } else {
                setBroken(false);
            }
        };

        // Agregar un event listener para manejar el cambio de tamaño de la ventana
        window.addEventListener('resize', handleResize);

        // Limpieza del event listener cuando el componente se desmonta
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
                <Sidebar>
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
                Fa Align Justify
            </div>
        </>
    )
}

export { SidebarMenu }