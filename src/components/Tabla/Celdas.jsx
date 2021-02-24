import { obId } from './../../helpers/funFireStore';
import { Fragment } from 'react/cjs/react.development';
import React from 'react'
import { desactivar } from '../../helpers/funFireStore';

export const Celdas = ({ us }) => {


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
                                { data.salario }
                            </td>
                            <td>
                                <button
                                    className="btn btn-sm btn-info mr-1"
                                    data-toggle="modal"
                                    data-id={id}
                                    onClick={(data) => obId(data)}
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
