import { Celdas } from './Celdas';
import React from 'react'

export const Tabla = ({us}) => {
    
    return (
        <div>
        <table className="table-striped table">
            <thead>
                <tr>
                    <th>Id</th>
                    <td>Nombre</td>
                    <td>Activo</td>
                    <td>Fecha</td>
                    <td>Sueldo</td>
                    <td>Editar</td>
                </tr>
            </thead>
            <tbody>
                    <Celdas us={us}/>
            </tbody>
        </table>
            

        <div>
                    <div className="modal fade" id="modal-id">
                        <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h4 className="modal-title">Editar</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label className="form-label">Nombre</label>
                                        <input className="form-control" placeholder="Nombre"></input>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-info" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
        </div>



    )
}
