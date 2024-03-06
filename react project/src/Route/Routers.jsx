import { Routes,Route } from "react-router-dom"
import Login from "../Components/Login/Login"
import Layout from "../Components/Layoute/Layoute"
import ProtectedRoute from '../Hook/ProtectedRoute'
import Todo from "../Components/Todo/Todo"
import News from "../Components/News/News"
import Weather from "../Components/Weather/Weather"
import Todos from "../Components/Todos/Todos"
import Profile from "../Components/Profile/Profile"
const Routers = ()=>{
   return (
    <div>
     <Routes>
      <Route path="/" element = {
      <ProtectedRoute>
         <Layout/>
      </ProtectedRoute>
      }>
        <Route path='/' element={<Profile/>}/>
        <Route path="todo" element={<Todo/>}/>
        <Route path="news" element={<News/>}/>
        <Route path="Weather" element={<Weather/>}/>
        <Route path="/todos/redux" element={<Todos/>}/>
      </Route>
        <Route path='login' element={<Login/>}/>
     </Routes>
    </div>
   )
}

export default Routers