//_______________App.jsx_________________________
import { useEffect, useState } from "react"
import "./styles.css"
/*NOTES:: nameConvention for components: CAPITAL TAG with description*/
import { FORM4newtodo } from "./components/FORM4newtodo"
import { ULoftodo } from "./components/ULoftodo"


export default function App() {
  //---------------------------------------
  //______-_ H O O K S   B E L O W _-______
  const [todos, setTodos] = useState(() => {

    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  //---------------------------------------
  //____ F U N C T I O N   b e l o w ______
  /*NOTES:: nameConvention for arrow function: first letter lowercase all others UPPERCASE*/
  //---------------------------------------
  function addNewTask(title){
    setTodos(cURTODOS =>{
      return [
      ...cURTODOS,
      { id: crypto.randomUUID(), title, completed: false } //Adding new Task with prev ones
    ]
    })
  }
  function deleteTodo(id){
    setTodos( cURRTODO =>{
     return   cURRTODO.filter(tODOD=> tODOD.id !==id)}
   )}

   function toggleTodo(id, completed) {
    setTodos(cURTODO => {
      return cURTODO.map(tODO => {
        if (tODO.id === id) {
          return { ...tODO, completed }
        }

        return tODO
      })
    })
  }
  //------------------------------------------------------------------------
  /*_______________ B E L O W - I S - J S X - c o d e______________________/
----------------------------------------------------------------------------
  NOTES :: nameConvention for props :  while passing props add to suffix (1,2,3 etc)
            based on no. times its been passed.

        :: nameConvention for components : CAPITAL TAG with description
  //_______________________________________________________________________*/

  return <>

    <FORM4newtodo addNewTask1= {addNewTask}/>

    <h1>This is Todo List App</h1>

    <ULoftodo todos1={todos} deleteTodo1 = {deleteTodo} toggleTodo1={toggleTodo}/>



  </> // Fragment tag close ((frangment tag to wrap multiple tags under one))
} //App() CLOSE

