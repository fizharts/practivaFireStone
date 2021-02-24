import { Types } from './types/Types';

const initialState = {
    usuarios : [] ,
    usuariosTodos : []
}

export const usuariosDuck = ( state = initialState , action )=> {
    switch( action.type ) {
        case Types.obtenerUsuarios :
            return  {
                ...state ,
                usuarios : action.payload
                
            }
        case Types.obtenerUsuariosTodos :
            return {
                ...state ,
                usuariosTodos : action.payload
            }
            default : 
                return state
    }

    
}

export const setUsuarios = ( usuarios )=> ({
    type : Types.obtenerUsuarios ,
    payload : usuarios
})


export const setUsuariosCompletos = ( usuarios ) => ({
    type: Types.obtenerUsuariosTodos ,
    payload : usuarios
})

