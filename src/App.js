import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Control from './components/Control';

function App() {
  //definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true)
  const [gastos, setGastos] = useState([])
  const [gasto, guardarGasto] = useState({})
  const [crearGasto, setCrearGasto] = useState(false)


  //useEffect actualiza el restante
  useEffect(() => {
    console.log('ME ACTIVE')
    if (crearGasto) {
      setGastos([
        ...gastos,
        gasto
      ])
    }
    setCrearGasto(false)
    //restar
    const resto = restante - gasto.cantidad;
    guardarRestante(resto)
  }, [gasto])
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
          <div className="contenido-principal contenido">
            {
              mostrarpregunta
                ?
                (
                  <Pregunta
                    guardarPresupuesto={guardarPresupuesto}
                    guardarRestante={guardarRestante}
                    actualizarPregunta={actualizarPregunta}
                  />
                )
                :
                (
                  <div className="row">
                    <div className="one-half column">
                      <Formulario
                        guardarGasto={guardarGasto}
                        setCrearGasto ={setCrearGasto}
                      />
                    </div>
                    <div className="one-half column">
                      <Listado
                        gastos={gastos}
                      />
                      <Control
                        presupuesto={presupuesto}
                        restante={restante}
                      />
                    </div>
                  </div>
                )
            }


          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
