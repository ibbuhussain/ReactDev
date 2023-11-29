import { useState } from "react";

export function FORM4newtodo(props){
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault();

        if (newItem === "") return
        props.addNewTask1(newItem)
        setNewItem("") // reset the the input to blank
    }

return(
<form  onSubmit= {handleSubmit} className="new-item-form">
<div className="form-row">
  <label htmlFor="item">Enter New Task</label>
  <input
  value={newItem}
  onChange={e => setNewItem(e.target.value)}
    type="text"
    id="item"
  />
</div>
<button className="btn">Add</button>
</form>
)

}