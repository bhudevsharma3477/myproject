const reducer = (state, action) => {
    
    switch (action.type) {
        case "ONCHANGE_HANDLER":
            return {
                ...state, [action.payload.name]: action.payload.value
            }
  
        default:
            return state;
    }
}

export default reducer;