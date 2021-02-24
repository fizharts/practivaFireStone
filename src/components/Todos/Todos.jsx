import { useEffect } from 'react/cjs/react.development';
import { leerUsuarios } from './../../helpers/funFireStore';
import { useDispatch, useSelector } from 'react-redux';
import { Tabla } from './../Tabla/Tabla';
import React from 'react'
import { setUsuariosCompletos } from '../../redux/usuariosDuck';

export const Todos = () => {
    const dispatch = useDispatch()
    const { usuariosTodos } = useSelector(state => state.usuarios)
    useEffect(() => {


        leerUsuarios().then(res => {
            console.log(res)
            dispatch(setUsuariosCompletos(res))
        })


    }, [dispatch])
    return (
        <div>
            <Tabla us={ usuariosTodos } />
        </div>
    )
}
