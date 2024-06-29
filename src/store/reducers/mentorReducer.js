const defaultState = {
    mentors: "params",
    loading: true
}


const LOADING = "LOADING";


export const mentorReducer = (state = defaultState, action) => {
    switch(action.type) {
        case LOADING: 
            return {...state, loading: action.payload};
            default: 
                return state
    }
}


export const setLoadingMentors = (payload) => ({type: LOADING, payload});