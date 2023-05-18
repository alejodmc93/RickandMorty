export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV="REMOVE_FAV";
export const FILTER="FILTER";
export const ORDER="ORDER";

const initialState = {
    myFavorites:[],
    allCharactersFav:[]
}

const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites:[...state.allCharactersFav,action.payload],
                allCharactersFav:[...state.allCharactersFav,action.payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites:state.myFavorites.filter((ele) => ele.id !== Number(action.payload))
            }
        case FILTER:
            const filtrado = state.allCharactersFav.filter((char)=> char.gender === action.payload);
            return{
                ...state,
                myFavorites:filtrado
            }
        case ORDER:
            const ordenado = [...state.allCharactersFav];
            return{
                ...state,
                myFavorites: 
                action.payload ==="A" 
                ? ordenado.sort((a,b)=> a.id - b.id)
                : ordenado.sort((a,b)=> b.id - a.id)
            }             
        default:
            return{
                ...state
            }        
    }
}

export default rootReducer;