    export  const initialItems = [
        { id: '1', content: "Andrew Spencer", img:'cat.jpeg' },
        { id: '2', content: "Raj Raghrum", img:'cat.jpeg' },
        { id: '3', content: "Mary Peters", img:'cat.jpeg' },
        { id: '4', content: "Lewis Knell", img:'cat.jpeg' },
        { id: '5', content: "Haoming" ,img:'busci.jpg'},
    ];


  export const getColumns = 
    {
      '1': {
      name: "List",
      items: initialItems
      },
      '2': {
        name: "Monday",
        items: []
      },
      '3': {
        name: "Tuesday",
        items: []
      },
      '4': {
        name: "Wednesday",
        items: []
      },
      '5': {
        name: "Thursday",
        items: []
      },
      '6': {
        name: "Friday",
        items: []
      },
    }
