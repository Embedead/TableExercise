import * as actionTypes from "./actionTypes"

export function setTable(updatedTable){
    const action = {
        type: actionTypes.SET_TABLE,
        updatedTable
    }

    return action
}

export function setColumns(updatedColumns){
    const action = {
        type: actionTypes.SET_COLUMNS,
        updatedColumns,
    }

    return action
}