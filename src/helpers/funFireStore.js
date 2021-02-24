import db from '../firebase/fireBaseConf'

const usuariosRef = db.collection('usuarios')

// db.collection('usuarios')
//     .add( usuario )
//     .then( res => {
//         console.log( res.id )
//     } ).catch( e => console.log(e))

// Actualizar datos

// usuariosRef.doc('Vz6ENXypAZROVM7alq19')
//             .update( {
//                 activo: false
//             } )

export const agregarUsuarios = ( usuario ) => {
    
    usuariosRef
    .add( usuario )
    .then( res => {
        console.log( res.id )
        return res.id
    } ).catch( e => console.log(e))


} 

export const leerUsuarios = async ( campo = '' )=> {
    let todos =  []

    if ( campo == '' ) {
        let us = await  usuariosRef.get()
        console.log( us )
        us.forEach( u => {
            todos.push(
                ...todos ,
                {
                    id: u.id,
                    data : u.data()
                }
            )
        })

        todos = [... new Set(todos)]    
    }else {
        let iguales = await  usuariosRef
                                .where( campo , '==' , true)
                                .get()
                                .catch(err=>console.log(err))

            iguales.forEach(r=>{
                todos = [
                    ...todos ,
                    {
                        id: r.id,
                        data : r.data()
                    }
                ]
            })  
    }
        return  todos
    
}


// Seleccionar por campo
export const getPorCampo = async ( campo ) => {
    let iguales = await  usuariosRef
                            .where( campo , '==' , true)
                            .get()
                            .catch(err=>console.log(err))
    let todos =  []
        iguales.forEach(r=>{
            todos = [
                ...todos ,
                {
                    id: r.id,
                    data : r.data()
                }
            ]
        })    
    return todos
}

export const desactivar = async ( { target } ) => {
    const { id , activo } = target.dataset

    
    usuariosRef.doc( id ).update({
        activo : !activo
    }).catch(err=>console.log(err))

    
}


export const obId = async ( { target } ) => {
    const { id , activo } = target.dataset
    let user = usuariosRef
                .doc( id )
                .get()
    console.log( user )
    return user
}