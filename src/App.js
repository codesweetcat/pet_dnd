import './App.css';
import React, { useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { initialItems } from './data';
import { getColumns } from './data';
import { Button } from 'react-bootstrap'
// import { Search } from "react-bootstrap";


import { move, reorder } from './utils/dragFunction'
import DraggableComponent from './DraggableComponent/DraggableComponent';

function App() {
  const [columns, setColumns] = useState(getColumns)
  const [sumOfItems, setSumOfItems] = useState(initialItems.length)
 
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {//drag to a different column
      move(columns,source,destination,setColumns)
    } else {//same column
      reorder(columns,source,destination,setColumns)
    }
  };
 
  const handleAddAItem = () => {
    setColumns({
      ...columns,
      1: {//add into first column
        ...columns[1],
        items: [...columns[1].items,{ id: (sumOfItems+1).toString(), content: `Haoming_${sumOfItems+1}`,img:'cat.jpeg'}]
        }
    });
      setSumOfItems(x=>x+1)
  }
 
  return (
    <div style={{display: "flex", justifyContent: "center", height: "100%"}}>
    <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
      {Object.entries(columns).map(([id, column])=>{
        return(
          <div 
          style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                margin:8,
                color:"#f5f5f5"
              }}
              key={id}
          >
          {column.name !== 'List' ?(<h2> {column.name}</h2>):(
          
            <div style={{display: "flex", justifyContent: "center"}}>
                <h2>List</h2>
                <Button style={{margin:20}} onClick={handleAddAItem} data-testid='addItemBtn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                      </svg>
                </Button>
            </div>
          )}
          <Droppable droppableId={id} key={id}>
            {(provided, snapshot)=>{
              return(
                <div 
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver ? 'lightblue':'#f5f5f5' ,
                      padding:4,
                      width:180,
                      minHeight:500,
                      height:500,
                      overflowY:'auto'
                    }}
                >
                {column.items.map((item,index)=>{
                  return(
                   <DraggableComponent item={item} index={index} key={index}/>
                  )
                })}
                {provided.placeholder}
              </div>
              )
            }}
          </Droppable>
          </div>
        )
      })}
      </DragDropContext>
    </div>
  );
}

export default App;
