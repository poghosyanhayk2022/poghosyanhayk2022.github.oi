 import React, {useState }  from "react";
 import classes from '../Todos/Todos.module.css'
import { connect } from "react-redux";
import { addTodos,} from "../../redux/reducer";
import DisplayTodos from "./DisplayTodos";
import {GoPlus} from 'react-icons/go'
import { motion } from "framer-motion"

 const mapStateToProps = (state)=>{
    return{
        todos:state,
    }
 }

 const mapDispatchToProps = (dispatch)=>{
    return{
        addTodo:(obj)=> dispatch(addTodos(obj)),
    }
 }

 const Todos = (props)=>{
   const [todo,setTodo]=useState("")

   const handlerChange = (e)=>{
    setTodo(e.target.value)
   };
   
   const add = ()=>{
   if (todo === '') {
     alert("Input is Empty")
   }else{
    props.addTodo({
        id:Math.floor(Math.random() * 1000),
        item:todo,
        completed:false,
   })
   setTodo("")
   }
   
}

   console.log("props from store", props);
    return(
        <div className={classes.TodosRoot}>
            <div className={classes.conteiner}>
           <div className={classes.APP}>
            <motion.h1
             initial={{y: -200}}
             animate={{y:0}}
             transition={{ type:"spring",duration:0.5}}
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
            >Todo App</motion.h1>
            <motion.div
              initial={{y: 1000}}
              animate={{y:0}}
              transition={{ type:"spring",duration:1}}
            >
            <div className={addTodos}>
                <input type="text"
                 onChange={(e) => handlerChange(e)} 
                 className={classes.todoInput}
                 value={todo}
                 />

                <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                
                
                className={classes.addBtn} 
                onClick={()=>{add()}}
                >
                  <GoPlus/>
                </motion.button>
            </div>
                <DisplayTodos/>
            </motion.div>
            </div>
          </div>
        </div>
    )
 }
// we can use connect method to connect this component with redux store
 export default connect(mapStateToProps,mapDispatchToProps)(Todos)