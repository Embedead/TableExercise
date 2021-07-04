import React from "react"
import styled from "styled-components"
import EllipseGreen from "../images/EllipseGreen.png"
import EllipseYellow from "../images/EllipseYellow.png"

const StatusContainer = styled.div`
    margin:0 1rem;
    width: 10%;
`

export const Status = ({status}) => {

    const handleStatus = (status) => {
        switch(status){
            case "green":
                return <img src={EllipseGreen} alt="green"/>
            case "yellow":
                return <img src={EllipseYellow} alt="yellow"/>
            default:
                return <div/>
            }
    }

    return(
        <StatusContainer>
            
        {handleStatus(status)}
        </StatusContainer>
    )
}