const reducer = (state, action) => {
    switch (action.type) {
        case "INPUT_AND_SELECT_ONCHANGE":
            return {
                ...state, [action.payload.name]: action.payload.value
            };
        case "AUTOCOMPLETE_ONCHANGE":
            return {
                ...state, [action.payload.name]: action.payload.new_value
            };

        default:
            return state;
    }
}

export default reducer;