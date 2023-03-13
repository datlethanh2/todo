import React from 'react';
import {postTodo,postSave} from "../api/fetchApi";
import {removeAccessToken} from "../util/localStorage";
import {useStore} from "../store";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import {styleInput,styleBox,styleButton, StyledScroll} from "../component/styleCss"


export default function TodoList(){
    
    const {state, dispatch}=useStore();
    const [openMu, setOpenMu]=React.useState(false);
    const [openEdit, setOpenEdit]=React.useState<number>(-1);
    const [time, setTime]=React.useState(new Date());
    const formatTime=dayjs(time).format('DD-MM-YYYY');
    
    React.useEffect(()=>{
        postTodo(formatTime).then(data=>dispatch({type:"SET_TODO", payload:data}));      
    },[dispatch,formatTime]);

    const progress={
        complete:state.todos.filter((item:any)=>item.tick===false).length?false:true,
        total:String(state.todos.filter((item:any)=>item.tick===true).length)+"/"+String(state.todos.length),
    }
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch({type:"ADD_TODO"});
        }
    };
    
    return(
        <div style={{margin:'auto'}}>
            <div style={styleBox}>
                <h1>TodoListDat</h1>
                <button 
                    style={{...styleButton,...{width:"325px",height:'35px'}}}
                    onClick={removeAccessToken}
                >
                    <b>Log out</b>
                </button>
                <br></br>
                <DatePicker
                    selected={time}
                    onChange={(date:any) => setTime(date)}
                    dateFormat="dd/MM/yyyy"
                    dropdownMode="select"
                    popperPlacement="bottom"
                    customInput={<input style={{...styleInput,...{textAlign:'center'}}}/>}
                />

                <br></br>
           
                <input
                    type="text"
                    placeholder="What are you doing?..."
                    style={{...styleInput,...{textAlign:'center'}}}
                    value={state.inputText} 
                    onChange={(event)=>dispatch({type:"SET_INPUT",payload:event.target.value})}
                    onKeyDown={handleKeyDown}
                />
                <div>
                    <button 
                        style={styleButton}
                        onClick={()=>{
                            setOpenMu(!openMu);
                            dispatch({type:"DELETEMUl_TODO"})
                        }}
                    >
                        Multi Delete
                    </button>              
                    <button 
                        style={styleButton}
                        onClick={()=>dispatch({type:"DELETEALL_TODO"})}
                    >
                        Delete All
                    </button>                  
                    <button 
                        style={styleButton}
                        onClick={()=>postSave(formatTime, state.todos, progress)}
                    >
                        Save Todo
                    </button>
                    <button 
                        style={styleButton}
                        onClick={()=>dispatch({type:"ADD_TODO"})}
                    >
                        Add Todo
                    </button>
                </div>
            </div>
            <StyledScroll sx={{height:state.todos.length>0?'250px':'0px'}}>
                {state.todos && state.delete? 
                    state.todos.map((item1:any) => {
                        const item2 = state.delete.find((item2:any) => item2.id === item1.id);
                        return item2 ? Object.assign({}, item1, item2) : {...item1};
                    }).map((item:any, key:number)=>{
                        return(
                            <div 
                                key={item.id} 
                                style={{...styleBox,...{
                                    display:'flex', 
                                    justifyContent:"space-between",
                                    padding:0,
                                    marginTop:'3px',
                                }}}
                            >
                                <div
                                    style={{
                                        display:'flex',
                                    }}
                                >
                                    <input 
                                        type="checkbox" 
                                        style={{
                                            display: openMu? 'block':'none',
                                            width:"27px",
                                            height:"32px",
                                            margin:"4px 0px 0px 4px",
                                        }}
                                        checked={item.act} 
                                        onChange={(event)=>dispatch({type:"CHECK_DELETE", payload:item.id})}
                                    />
                                    <button
                                        style={styleButton}
                                        onClick={()=>dispatch({type:"TICK_TODO", payload:item.id})}
                                    >
                                       {item.tick?"Complete":"..."}
                                    </button>
                                </div>
                                <div
                                    style={{
                                        padding:"5px 0"       
                                    }}
                                >
                                    {openEdit===item.id?null:item.title}
                                    <input
                                        value={state.inputEdit} 
                                        onChange={(event)=>dispatch({type:"SET_EDIT",payload:event.target.value})}
                                        placeholder={item.title+"..."}
                                        style={{...styleInput,...openEdit===item.id?{display:'block', width:'240px',height:'27px', margin:'0'}:{display:'none'}}}
                                    />
                                </div>
                                <div
                                    style={{
                                        display:"flex",            
                                    }}
                                >
                                    <button
                                        onClick={()=>setOpenEdit(item.id)}
                                        style={{...styleButton,...{display:openEdit===item.id?'none':'block'}}}
                                    >  
                                        Edit
                                    </button>
                                    <button
                                        onClick={()=>{
                                            setOpenEdit(-1);
                                            dispatch({type:"EDIT_TODO", payload:item.id})
                                        }}
                                        style={{...styleButton,...{display:openEdit===item.id?'block':'none'}}}
                                    >   
                                        Edit
                                    </button>
                                    <button
                                        style={{...styleButton,...{marginLeft:'0px'}}}
                                        onClick={()=>dispatch({type:"DELETE1_TODO", payload:item.id})}
                                    >   Delete
                                    </button>
                                </div>
                            </div>
                        )
                }):null}  
            </StyledScroll >  
        </div>
    )
}