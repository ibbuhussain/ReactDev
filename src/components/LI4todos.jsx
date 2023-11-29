
export function LI4todos(props){
return <li>
        <label>
        
          <input
            type="checkbox"
            checked = {props.completed}
            onChange={e=> props.toggleTodo2(props.id, e.target.checked)}

          />      
          {props.title}   
        </label>

        <button onClick={()=> props.deleteTodo2(props.id)} className="btn btn-danger"> Delete </button>
      </li>
      }