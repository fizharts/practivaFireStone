import { useEffect } from 'react/cjs/react.development';
import { setUsuarios } from './../../redux/usuariosDuck';
import { useDispatch, useSelector } from 'react-redux';
import { leerUsuarios } from './../../helpers/funFireStore';
import React from 'react'
import { Tabla } from '../Tabla/Tabla';

export const Activos = () => {
    const dispatch = useDispatch()
    const { usuarios } = useSelector(state => state.usuarios)
    
    useEffect(() => {

        leerUsuarios( 'activo' ).then( res => dispatch( setUsuarios( res ) ))

    }, [dispatch])
        // console.log( usuarios )

    return (
        <div>
            <Tabla us={ usuarios } />
        </div>
    )
}
