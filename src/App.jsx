import React from 'react'
import { Showcards } from './components/showcards/Showcards'
import { Sidebar } from './components/sidebar/Sidebar'
import dataDGT from './data/dgt.json'

function App() {
  const data = dataDGT

  return (
    <div>
      {data.map(allData => allData.submenus.map(submenus =>  
        <Showcards
          key={allData.tema} // Añade una clave única para cada elemento en el array
          tema={allData.tema}
          titulo={submenus.titulo}
          url={submenus.url_imagen}
          nivel={submenus.nivel}
        />
      ))}
      <Sidebar />
    </div>
  )
}

export default App