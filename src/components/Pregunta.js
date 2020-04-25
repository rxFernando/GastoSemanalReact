import React, { Fragment, useState } from 'react';
import Error from './Error';

const Pregunta = ({guardarPresupuesto, guardarRestante,actualizarPregunta}) => {
    //defino el state
    const [cantidad, guardarCantidad] = useState(0)
    const [error, guardarError]= useState(false)
    ///submit
    const agregarPresupuesto = e =>{
        e.preventDefault();
        console.log('submit')
        //validar
        if(cantidad<1 || isNaN(cantidad)){
            guardarError(true);
            return
        }
        guardarError(false);
        //enviar
        guardarPresupuesto(cantidad)
        guardarRestante(cantidad)
        actualizarPregunta(false)
    }
    
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje="El presupuesto es incorrecto"/>:null}
            <form onSubmit={agregarPresupuesto} >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={e=> guardarCantidad(parseInt(e.target.value))}
                />
                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Definir Presupuesto"
                   
                />
            </form>
        </Fragment>

    );
}

export default Pregunta;