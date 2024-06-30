const initialState = {
    darkMode: false,
};

const TOGGLE_THEME = 'TOGGLE_THEME';

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return {
                ...state,
                darkMode: !state.darkMode,
            };
        default:
            return state;
    }
};

export const toggleTheme = () => ({type: TOGGLE_THEME});