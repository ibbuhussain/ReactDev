import { LI4todos } from "./LI4todos"

export function ULoftodo(props){
return  <ul className="list">
        {props.todos1.map( tODO=>{
            return(
                <LI4todos title = {tODO.title}
                id = {tODO.id}
                completed = {tODO.completed}
                            key = {tODO.id}
                            deleteTodo2={props.deleteTodo1}
                            toggleTodo2 = {props.toggleTodo1}
                              />

            )
    }) }
         
    </ul>

}