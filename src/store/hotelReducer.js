function hotelReducer(state = {},action){
    switch(action.type){
        case 'newHotels':
            return {
                ...state,
                hotels:action.payload
            }
        case 'newCities':
            console.log("cities reducer fired!")
            return {
                ...state,
                cities:action.payload
            }
        default:
            return state
    }
}

export default hotelReducer