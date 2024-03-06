import React, { useRef } from "react";
import classes from "../Todos/Todoitem.module.css"
import {AiFillEdit} from "react-icons/ai"
import { IoMdDoneAll } from "react-icons/io";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion"
const TodoItem = ({item,updateTodo,removeTodo,completeTodo})=>{

    const inputRef = useRef(true);

    const changeFocus = ()=>{
     inputRef.current.disabled = false;
     inputRef.current.focus()
    }
 
    const update = (id,value,e)=>{
      if(e.which === 13){
         //here 13 is key code for enter key
        updateTodo({id,item: value});
         inputRef.current.disabled = true;
 
      }
    }
    
    return(
        <div className={classes.TodoItem}>
            <div className={classes.conteiner}>
           <motion.li 

               initial={{x:"150vw",
              transition:{type:"spring",duration:2}
              }}
               animate={{x:0,
                 transition:{type:"spring",duration:2}
                 }}
               whileHover={{ scale: 0.9, transition:{type: "spring", }
              
              }}
              exit={{
                x:"-60vw",
                scale:[1,0],
                transition:{duration:0.5},
                backgroundColor:"rgba(255,0,0,1)"
              }}
              
              
              key={item.id} className={classes.card}>
              <textarea 
                 ref={inputRef}
                 disabled={inputRef} 
                defaultValue={item.item}
                onKeyPress={(e)=> update(item.id, inputRef.current.value, e)}
               />
               <div className={classes.btns}>
                <motion.button
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={()=>changeFocus()}><AiFillEdit/></motion.button>

               {
                item.completed === false && 
                <motion.button
                whileHover={{ scale: 1.4 }}
                whileTap={{ scale: 0.9 }}
                style={{color:"green"}}  onClick={()=>completeTodo(item.id)}>
                <IoMdDoneAll/>
                </motion.button>
               }

                <motion.button
                 whileHover={{ scale: 1.4 }}
                 whileTap={{ scale: 0.9 }}
                style={{color:"red"}} onClick={()=>removeTodo(item.id)}><MdClose/></motion.button>
               </div>
             { item.completed && <span className={classes.completed}>done</span>}
           
             </motion.li>
            </div>
        </div>
    )
}
export default TodoItem