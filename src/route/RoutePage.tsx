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
                <Route path="/" element={localStorage.getItem('token')?<Navigate to="/Home/Main" />:<TodoLogin />} /> 
                <Route path="/Home/Main" element={localStorage.getItem('token')?<TodoList/>:<Navigate to="/" />} />       
            </Routes>
        </div>
    )
}