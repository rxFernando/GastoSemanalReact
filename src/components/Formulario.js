import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid'
const Formulario = ({guardarGasto, setCrearGasto}) => {
    const [nombre, setnombre] = useState('')
    const [cantidad, setcantidad] = useState(0)
    const [error, setError]=useState(false)
    //cuando hace submit
    const agregarGasto = e=>{
        e.preventDefault();
        //validar
        if (cantidad <1 || isNaN(cantidad) || nombre.trim()===''){
            setError(true)
            return
        }
        setError(false)

        //construir gasto
        const gasto = {
            nombre,
            cantidad,
            id:shortid.generate()
        }
        console.log(gasto)

        //pasar gasto al componente principal
        guardarGasto(gasto)
        setCrearGasto(true)

        //reset form
        setnombre('')
        setcantidad(0)

    }
    return (
        <form 
            onSubmit={agregarGasto}
        >
            <h2>Tus gastos</h2>
            {
                error
                ?
                <Error
                mensaje="Ambos campos obligatorios"/>
                :
                null
            }
            <div className="campo">
                <label htmlFor="">Nombre gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej.Transporte"
                    value={nombre}
                    onChange={e=>setnombre(e.target.value)}
                />
                <label htmlFor="">Cantidad gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="3000"
                    value={cantidad}
                    onChange={e=>setcantidad(parseInt(e.target.value))}
                />
                <input
                    type="submit"
                    className="u-full-width button-primary"
                    value="Agregar Gasto"
                />
            </div>

        </form>
    );
}

export default Formulario;