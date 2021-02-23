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



export const leerUsuarios = async (  )=> {
    let us = await usuariosRef.get()
    let todos =  []
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
        
        return  todos
    
}


// Seleccionar por campo
export const getPorCampo = async ( campo ) => {
    let iguales = await  usuariosRef.where( campo , '==' , true).get().catch(err=>console.log(err))
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
        
        // console.log( todos )


    return todos
}

export const desactivar = async ( { target } ) => {
    const { id , activo } = target.dataset

    
    usuariosRef.doc( id ).update({
        activo : !activo
    }).catch(err=>console.log(err))
}