import { agregarUsuarios } from './../../helpers/funFireStore';
import { Fragment, useState, useEffect } from 'react/cjs/react.development';
import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import '../../App.css'
import Swal from 'sweetalert2'

export const Agregar = () => {




    return (
        <Fragment>
            <button type="button" className="btn btn-info" data-toggle="modal" href="#modal-agregar">+</button>

            <div className="modal fade" id="modal-agregar">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Editar</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>

                        </div>
                        <div className="modal-body">
                    
                            <Formik
                                initialValues={{
                                    nombre: '',
                                    activo: 'false',
                                    fecha: '0',
                                    sueldo: '0',
                                    imagen : ''
                                }}
                                validate={values => {
                                    const errors = {};

                                    if (!values.nombre) {
                                        errors.nombre = 'nombre es requerido'
                                    }
                                    if (!values.activo) {
                                        errors.activo = 'activo es requerido'
                                    }
                                    if (!values.fecha) {
                                        errors.fecha = 'fecha es requerido'
                                    }
                                    if (!values.sueldo) {
                                        errors.sueldo = 'sueldo es requerido'
                                    }

                                    return errors;
                                }}
                                onSubmit={(values, { setSubmitting }) => {
                                        
                                        values = {
                                            ...values ,
                                            activo : (values.activo == 'true' ? true : false)

                                        }

                                        console.log(values.imagen)
                                        if (agregarUsuarios(values) != ''){
                                            Swal.fire('success' , 'listo')
                                        }else {
                                            Swal.fire('error', 'algo salio mal')
                                        }
                                        setSubmitting(false)
                                        

                                
                                }}
                            >
                                {({ isSubmitting }) => (
                                    <Form className="form">

                                        <div className="form-group">
                                            <h5>nombre</h5>
                                            <Field
                                                className="form-control"
                                                name="nombre"
                                                role="alert" />
                                            <ErrorMessage
                                                name="nombre"
                                                className="alert alert-danger alertas"
                                                component="div" />
                                        </div>
                                        <div className="form-group">
                                            <h5>Activo</h5>
                                            <Field
                                                as="select"
                                                className="form-control"
                                                name="activo">
                                                <option value="false" selected disabled>Seleccionar</option>
                                                <option value={true}>activo</option>
                                                <option value={false}>inactivo</option>
                                            </Field>
                                            <ErrorMessage
                                                name="activo"
                                                className="alert alert-danger alertas"
                                                component="div"
                                                role="alert" />
                                        </div>
                                        <div className="form-group">
                                            <h5>fecha</h5>
                                            <Field
                                                type="number"
                                                className="form-control"
                                                name="fecha"
                                                role="alert" />
                                            <ErrorMessage
                                                name="fecha"
                                                className="alert alert-danger alertas"
                                                component="div" />
                                        </div>
                                        <div className="form-group">
                                            <h5>sueldo</h5>
                                            <Field
                                                className="form-control"
                                                name="sueldo"
                                                role="alert" />
                                            <ErrorMessage
                                                name="sueldo"
                                                className="alert alert-danger alertas"
                                                component="div" />
                                        </div>
                                        <div className="form-group">
                                            <h5>imagen</h5>
                                            <Field
                                                className="form-control"
                                                name="imagen"
                                                type ="file"
                                                role="alert" />
                                            <ErrorMessage
                                                name="imagen"
                                                className="alert alert-danger alertas"
                                                component="div" />
                                        </div>

                                        <button
                                            type="submit"
                                            className="btn btn-info"
                                            disabled={isSubmitting}>
                                            Submit
                                        </button>
                                    </Form>
                                )}
                            </Formik>


                        



                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-info" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
