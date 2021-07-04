import React from 'react'
import styled from 'styled-components'
import {useDispatch} from "react-redux"
import {setTable} from "../store/actionCreators"
import {tableValues} from "../misc/tableValues"
import { useSelector } from 'react-redux'
import {Table} from "../components/Table"

const TableContainer = styled.div`
    width: 100%;
    height: 100%;
    direction: rtl;
`

export const TableView = () => {
    const dispatch = useDispatch();
    React.useEffect(()=>{
        dispatch(setTable(tableValues));
        
    },[])
    const table = useSelector((state)=> state.workerTable);
  console.log("table is", table)
    return(
        <TableContainer>
            <Table/>
        </TableContainer>
    )
}