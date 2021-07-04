import React from "react"
import styled from "styled-components"
import BarChart from "../images/bar-chart.png"
import GroupDots from "../images/groupdots.png"
import {Status} from "./Status"

const RowContainer = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    font-weight: 400;
    font-size: 14px;

`

const RightSidedCell = styled.span`
    display: flex;
    background-color: #F6F6F6;
    margin: 0.1rem;
    width: 15%;
    flex-grow:1;
    padding: 0.75rem;
`

const CenteredSidedCell = styled.span`
     display: flex;
    background-color: #F6F6F6;
    margin: 0.1rem;
    width: ${props => props.size? props.size : "15%" } ;
    justify-content: center;
    flex-grow:1;
    padding: 0.75rem;
`


export const Row = ({rowItem}) => {
    return(
        <RowContainer>
            <RightSidedCell>
                {rowItem.id}
            </RightSidedCell>
            
            <RightSidedCell>
                <Status status={rowItem.status}/>
                {rowItem.name}
            </RightSidedCell>
            <CenteredSidedCell>
                {rowItem.exemptHours}
            </CenteredSidedCell>
            <CenteredSidedCell>
                {rowItem.manualHours}
            </CenteredSidedCell>
            <CenteredSidedCell>
                {rowItem.hours}
            </CenteredSidedCell >
            <CenteredSidedCell>
                {rowItem.totalHours}
            </CenteredSidedCell>
            <CenteredSidedCell size="4%">
                <img src={BarChart} alt="barchart"/>
            </CenteredSidedCell>
            <CenteredSidedCell size="2.5%">
                <img src={GroupDots} alt="groupdots"/>
            </CenteredSidedCell>
        </RowContainer>
    )
}