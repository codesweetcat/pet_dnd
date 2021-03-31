import { Draggable } from "react-beautiful-dnd";

const DraggableComponent = ({item,index}) => {

  console.log(item,index)
    return (
         <Draggable 
            key={item.id}
            draggableId={item.id}
            index={index}          
                    >
                      {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}  
                                    {...provided.dragHandleProps}
                                    style={{
                                      userSelect: "none",
                                      padding: 16,
                                      margin: "0 0 8px 0",
                                      minHeight: "50px",
                                      backgroundColor: snapshot.isDragging
                                        ? "#263B4A"
                                        : "#456C86",
                                      color: "white",
                                      ...provided.draggableProps.style
                                    }}
                                  >
                                    {item.content} 
                                    <img src={`${process.env.PUBLIC_URL}/${item.img}`} style={{width:30, float: 'right'}} alt="pet"/>
                                  </div>
                                );
                              }}
                    </Draggable>
    )
}



export default DraggableComponent