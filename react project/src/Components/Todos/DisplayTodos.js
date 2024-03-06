import React, { useState } from "react";
import classes from "../Todos/DisplayeTodos.module.css"
import { connect } from "react-redux";
import { addTodos,
        completedTodos,
        removeTodos,
        updateTodos
    } from "../../redux/reducer";
import TodoItem from "./Todoitem";
import { AnimatePresence, motion } from "framer-motion"

const mapStateToProps = (state)=>{
    return{
        todos:state,
    }
 }

 const mapDispatchToProps = (dispatch)=>{
    return{
        addTodo:(obj)=> dispatch(addTodos(obj)),
        removeTodo:(id) => dispatch(removeTodos(id)),
        updateTodo:(obj)=> dispatch(updateTodos(obj)),
        completeTodo:(id)=> dispatch(completedTodos(id))
    }
 }

const DisplayTodos = (props)=>{
    const [sort,setSort]= useState("active")
    return(
        <div className={classes.DisplayTodosRoot} >
          <div className={classes.conteiner}>
            <div  className={classes.displayTodos}>
              <div className={classes.button}>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                 onClick={()=>setSort('active')}>Active</motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                 onClick={()=>setSort('completed')}>Completed</motion.button>
                <motion.button
                   whileHover={{ scale: 1.1 }}
                   whileTap={{ scale: 0.9 }}
                onClick={()=>setSort('all')}>All</motion.button>
              </div>
              <ul>
              <AnimatePresence>
              {
                   props.todos.length > 0 && sort === 'active'?
                  props.todos.map((item)=>{
                    return(
                    item.completed === false &&(
                        <TodoItem
                        key={item.id}
                        item = {item}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                        />
                     )
                    );
                  }):null }

                {props?.todos.length > 0 && sort === 'completed'
                  ? props.todos.map((item)=>{
                    return(
                    item.completed === true &&(
                        <TodoItem
                        key={item.id}
                        item = {item}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                        />
                     )
                    );
                  }):null }
                
                {props.todos.length > 0 && sort === 'all'
                  ? props.todos.map((item)=>{
                    return(
                        <TodoItem
                        key={item.id}
                        item = {item}
                        removeTodo={props.removeTodo}
                        updateTodo={props.updateTodo}
                        completeTodo={props.completeTodo}
                        />
                    )
                  }):null }

              </AnimatePresence>
              </ul>
            </div>
          </div>
        </div>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(DisplayTodos)