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
    ],

    columnValues: [
        {value: "מספר ת.ז."},
    {value: "שם עובד"},
    {value: "שעות חריגות"},
    {value:"שעות ידניות"},
    {value:"שעות"},
    {value:"סך הכל שעות"},
    {value:"אפשרויות"}    
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
        case actionTypes.SET_COLUMNS:
            return{
                ...state,
                columnValues: action.updatedColumns
            }
            default:
                return state;
    }
}

export default reducer;