import { React, useState } from 'react'
import { Showcards } from './components/showcards/Showcards'
import { Sidebar } from './components/sidebar/Sidebar'
import dataDGT from './data/dgt.json'

function App() {
  const [titulo, setTitulo] = useState(false)

  const titulos = dataDGT.map(titulo => titulo.titulo)

  const temaClick = (tema) => {
    return setTitulo(tema)
  }

  return (
    <div>
      <Sidebar titulos={titulos} temaClicked={temaClick} />

      {titulo && dataDGT.map(data => { //Si la expresión de la izquierda es false, entonces no evalúa la expresión de la derecha
        if (data.titulo === titulo) {
          return (
            <Showcards
              key={data.tema} //Añade una clave única para cada elemento en el array
              tema={data.tema}
              titulo={data.titulo}
              url={data.url_imagen}
              nivel={data.nivel}
            />
          )
        }
        return false
      })}
    </div>
  )
}

export default App