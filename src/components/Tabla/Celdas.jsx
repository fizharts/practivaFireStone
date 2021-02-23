import { Fragment, useState } from 'react/cjs/react.development';
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { desactivar } from '../../helpers/funFireStore';

export const Celdas = ({ us }) => {

    const [id, setid] = useState('')

    const handleClick = ({ target }) => {
        console.log( target )
    }

    const handleClickBorrar = ( { target } , borrar )=> {

        // console.log( target.dataset.id )
        desactivar( target.dataset.id  )
    }

    return (
        <Fragment>

            {
                us.map(({ id, data }) => (
                    <Fragment key={id}>
                        <tr>
                            <td>
                                {id}
                            </td>
                            <td>
                                {data.nombre}
                            </td>
                            <td>
                                {data.activo ? `activo` : `inactivo`}
                            </td>
                            <td>
                                {data.fechaNacimiento}
                            </td>
                            <td>
                                <button
                                    className="btn btn-sm btn-info mr-1"
                                    data-toggle="modal"
                                    data-id={id}
                                    onClick={(data) => handleClick(data)}
                                    href="#modal-id"
                                    >Editar</button>
                                <button
                                    className="btn btn-sm btn-danger"
                                    data-id={id}
                                    data-activo={data.activo}
                                    onClick={(data)=>desactivar(data)}
                                    >Borrar</button>

                            </td>

                        </tr>





                    </Fragment>
                ))
            }



        </Fragment>
    )
}
