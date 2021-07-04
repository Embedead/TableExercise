import React from 'react'
import styled from "styled-components"
import {columnValues} from "../misc/columnValues"

const ColumnsContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    font-weight: 400;
    font-size: 12px;
    color: #1D1D1D;
`

const ColumnCell = styled.span`
    display: flex;
    margin: 0.1rem;
    width: ${props => props.size? props.size : "15%" } ;
    justify-content: center;
    flex-grow:1;
    padding: 0.75rem;
`

export const TableColumns = () => {
    return(
        <ColumnsContainer>
            {columnValues.map((item,index) => {
                return(
                    <ColumnCell key={"column" + index}>
                        {item.value}
                    </ColumnCell>
                )
            })}
        </ColumnsContainer>
    )
}