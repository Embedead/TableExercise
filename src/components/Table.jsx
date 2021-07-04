import React from "react"
import styled from "styled-components"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {useSelector, useDispatch} from "react-redux"
import {setTable} from "../store/actionCreators"
import {Row} from "./Row"
import {TableColumns} from "./TableColumns"

const TableViewContainer = styled.div`
    padding: 1rem 0.75rem;
`
export const Table = () => {

    const table = useSelector((state)=> state.workerTable);
    const dispatch = useDispatch();
    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
    
        return result;
      };

    const onDragEnd = (result) => {
        if (!result.destination) {
          return;
        }
    
        const items = reorder(
          table,
          result.source.index,
          result.destination.index
        );
    
        dispatch(setTable(items));
      };
    

    return(
        <TableViewContainer>
        <TableColumns/>
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided, snapshot)=>(
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                       {table.map((item,index) => {
                           return(
                               <Draggable key={"draggable" + index} draggableId={String(index)} index={index}>
                                   {(provided,snapshot) => (
                                       <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                           <Row rowItem={item} key={"row" + index}/>
                                       </div>
                                   )}
                               </Draggable>
                           )
                        })}
                       {provided.placeholder}
                   </div> 
                )}
            </Droppable>
        </DragDropContext>
                </TableViewContainer>
    )
}