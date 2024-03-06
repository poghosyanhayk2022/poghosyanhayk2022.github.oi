import { useRef } from "react"
import classes from "../EditTodo/Edit.module.css"
const EditTodo = ({setTodos,closeEditBlock, id, itemData}) => {
    const inputRef = useRef(null)
    const editTodoItem =async (id) => {
        await fetch(`http://localhost:4000/todo/${id}`,
        {
          method:'PATCH',
          headers:{"content-type":"application/json"},
          body: JSON.stringify({...itemData, text:inputRef.current.value})
         }).then(res => res.json()).then(res => res)
        setTodos(prev => {
            const updatedData = [...prev]
            updatedData.map(item => {
                if (item.id === id) {
                    console.log(item, 'item');
                    item.text = inputRef.current.value
                }
                return item
            })
            return updatedData
        })
        closeEditBlock()
    }
    return (
        <div className={classes.edit}>
        <input ref={inputRef} defaultValue={itemData.text}/>
        <button onClick={closeEditBlock}>Cancel</button>
        <button onClick={() => editTodoItem(id)}>Save</button>
        </div>
    )
}
export default EditTodo