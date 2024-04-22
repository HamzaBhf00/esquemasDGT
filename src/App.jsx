import { React, useState } from 'react'
import { Showcards } from './components/showcards/Showcards'
import { Sidebar } from './components/sidebar/Sidebar'
import dataDGT from './data/dgt.json'
import "./app.css"

function App() {
  const [selectedTitulo, setSelectedTitulo] = useState(false)

  const tituloClick = (titulo) => {
    return setSelectedTitulo(titulo)
  }

  return (
    <>
      <div className="app-container">
        <Sidebar dataDGT={dataDGT} tituloClicked={tituloClick} />

        {selectedTitulo && dataDGT.map(data => { //Si la expresión de la izquierda es false, entonces no evalúa la expresión de la derecha
          return data.child.map(dataChild => {
            if (dataChild.titulo === selectedTitulo) {
              return (
                <Showcards
                  key={data.tema} //Añade una clave única para cada elemento en el array
                  tema={data.tema}
                  titulo={dataChild.titulo}
                  url={dataChild.url_imagen}
                  nivel={dataChild.nivel}
                />
              );
            }
            return null;
          });
        })}
      </div>
    </>
  )
}

export default App