import * as types from "../actionTypes/quest";

const initialState = {
    loading: false,
    error: null,
    themes: []
}

export default function questReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type){
        case types.INIT_QUEST_LOADING:
        case types.DELETE_QUEST_LOADING: {
            const newState = {...state};
            newState.loading = true;
            newState.error = null;
            return newState;
        }
        case types.INIT_QUEST_ERROR:
        case types.DELETE_QUEST_ERROR:{
            const newState = {...state};
            newState.loading = false;
            newState.error = payload;
            return newState;
        }

        case types.INIT_QUEST_SUCCESS: {
            const newState = {...state};
            newState.loading = false;
            newState.error = null;
            newState.themes = payload;
            return newState;
        }

        case types.DELETE_QUEST_SUCCESS: {
            const newState = {...state};
            newState.loading = false;
            newState.error = null;
            console.log("DELETE_NOTEBOOKS_SUCCESS BEFORE", newState)
            console.log("DELETE_NOTEBOOKS_SUCCESS PAYLOAD", payload)
            //newState.themes... = newState.themes.filter((question)=> question.id !== payload.id);
            console.log("DELETE_NOTEBOOKS_SUCCESS AFTER", newState)
            return newState;
        }


        default:{
            return state;
        }
    }
}
