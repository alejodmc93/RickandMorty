export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV="REMOTE_FAV";


const initialState = {
    myFavorites:[]
}

const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites:[...state.myFavorites,action.payload]
            }
        case REMOVE_FAV:
            return{
                ...state,
                myFavorites:state.myFavorites.filter((ele) => ele.id !== action.payload)
            }
        default:
            return{
                ...state
            }        
    }
}

export default rootReducer;