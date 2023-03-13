import { Routes,Route, Navigate} from "react-router-dom";
import TodoList from "../page/TodoList";
import TodoLogin from "../page/TodoLogin"

export default function RoutePage(){
    return(
        <div
            style={{
                backgroundColor:"#363b41",
                height:"100vh",
                display:'flex',
            }}
        >
            <Routes>
                <Route path="http://datlethanh2.github.io/todo/" element={localStorage.getItem('token')?<Navigate to="http://datlethanh2.github.io/todo/Home/Main" />:<TodoLogin />} /> 
                <Route path="http://datlethanh2.github.io/todo/Home/Main" element={localStorage.getItem('token')?<TodoList/>:<Navigate to="http://datlethanh2.github.io/todo/" />} />       
            </Routes>
        </div>
    )
}