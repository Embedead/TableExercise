import * as actionTypes from "./actionTypes"

const initialState = {

    workerTable: [
        {

            rowID:"1",
            id:"203483924",
            name:"יואב שרון",
            status:"green",
            exemptHours:"4:00",
            manualHours:"4:00",
            hours:"155:00",
            totalHours:"159:00",
            
        }
    ]
};

const reducer = (
    state = initialState,
    action
) => {
    switch(action.type) {
        case actionTypes.SET_TABLE:
            return{
                ...state,
                workerTable: action.updatedTable
            }
            default:
                return state;
    }
}

export default reducer;