import { leerUsuarios, getPorCampo } from './../helpers/funFireStore';
import { useEffect, useState } from 'react/cjs/react.development';
import { Tabla } from './Tabla/Tabla';





export const InsertarDatos = () => {
    const [us, setus] = useState([])
    useEffect(() => {
        // leerUsuarios(  ).then( res =>{
        //     setus( res )
        // })

        getPorCampo( 'activo' ).then(res=> {
            setus( res )
        })
        
        
    }, [])
    
    
    



    return (
        <div>
            <div className="container">
                <h2>Insertar Datos</h2>
            </div>
            {
                <Tabla us = { us } />
            }
        </div>
    )
}
