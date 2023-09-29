import { combineReducers } from "redux";


const commentsReducer = (state = [], action:any) => {
    switch (action.type){
        case "ADD_COMMENT":
            return[...state, {
                text:action.payload.text,
                id: action.payload.id,
                postId: action.payload.postId
            }]
        default: return state
    }
}

const rootReducer = combineReducers({
    comments: commentsReducer
})

export default rootReducer