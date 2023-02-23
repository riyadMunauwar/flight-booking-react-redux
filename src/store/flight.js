// Action Types
export const FLIGHT_ADD = 'flight/flight-add'
export const FLIGHT_REMOVE = 'flight/flight-remove'


// Action Creator

export const addFlight = (flight) => {
    return {
        type: FLIGHT_ADD,
        payload: flight
    }
}


export const removeFlight = (id) => {
    return {
        type: FLIGHT_REMOVE,
        payload: {
            id: id
        }
    }
}

// State Selector

export const selectAllFlight = (state) => {
    return state;
}

// Handelers

const flightAddHandeler = (state, action) => {

    const lastInsertedId = (() => {
        let maxId = 0;
        state.forEach(item => {
            if(item.id > maxId) maxId = item.id
        })
        return maxId
    })()


    return [...state, {...action.payload, id: lastInsertedId + 1}];
}


const flightRemoveHandeler = (state, action) => {
    return state.filter(flight => flight.id !== action.payload.id)
}

const handelers = {
    [FLIGHT_ADD]: flightAddHandeler,
    [FLIGHT_REMOVE]: flightRemoveHandeler
}


// Initial State

// const singleFlight = {
//     id: 1,
//     bookedFrom: 'Dhaka',
//     bookedTo: 'Chittagang',
//     bookedDate: '11-01-23',
//     bookedGuests: 2,
//     bookedClass: 'Business'
// }


const initialState = []


const flightReducer = (state = initialState, action) => {
    return handelers[action.type] ? handelers[action.type](state, action) : state;
}

export default flightReducer;