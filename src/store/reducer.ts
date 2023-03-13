import {notyf} from "../component/notyfAlert"

const initState={
    inputText:'',
    inputEdit:'',
    todos:[],
    delete:[],
}

interface ActionType {
    type: string;
    payload: any;
}
interface StateType {
    inputText: string;
    inputEdit: string;
    todos: any;
    delete:any,
}

function reducer(state:StateType, action:ActionType){ 
    
    switch(action.type){
      case 'SET_INPUT':
        return {
          ...state,
          inputText:action.payload,
        };
      case 'SET_TODO':
        let list:any=[];
        if(action.payload){
          action.payload.forEach((item:any)=>{
            list.push({
                  id:item.id,
                  act:false,
              })
          })
        }
       
        return {
          ...state,
          todos:action.payload,
          delete:list,
        };
      case 'ADD_TODO':
        const maxId=state.todos.reduce((max:number,item:any)=>{
          return item.id > max ? item.id+1 : max+1;
        },0);
        if(state.inputText===""){
          notyf.error('Error ""');
          return {...state}
        }else{
          notyf.success("Add success");
          return {
            ...state,
            inputText:'',
            todos: [...state.todos,{
                id:maxId, 
                title:state.inputText, 
                tick:false,
            }],
            delete:[...state.delete,{
                id:maxId,
                act:false,
            }]
          };
        }      
      case 'TICK_TODO':
        notyf.success("Tick success");
        const listTick=state.todos.map((item:any)=>{
          if(item.id===action.payload){
            return {...item, tick: !item.tick};
          }
          else{
            return item;
          }
        })
        return {
          ...state,
          todos: listTick,
        };
      case 'SET_EDIT':
        return {
          ...state,
          inputEdit:action.payload,
        };
      case 'EDIT_TODO':
        let listEdit:any=[]
        if(state.inputEdit===""){
          notyf.error('Error ""');
          listEdit=state.todos
        }else{
          listEdit=state.todos.map((item:any)=>{
            if(item.id===action.payload){
              return {...item, title: state.inputEdit};
            }
            else{
              return item;
            }
          })
          notyf.success("Edit success");
        }
        return {
          ...state,
          inputEdit:'',
          todos: listEdit,
        };
      case 'DELETE1_TODO':
        notyf.success("Delete success");
        return {
          ...state,
          todos: state.todos.filter((item:any)=>item.id !== action.payload),
        };
      case 'DELETEALL_TODO':
        notyf.success("Delete success");
          return {
            ...state,
            todos: [],
          };
      case 'CHECK_DELETE':
        const listCheck=state.delete.map((item:any)=>{
          if(item.id===action.payload){
            return {...item, act: !item.act};
          }
          else{
            return item;
          }
        })
        return {
          ...state,
          delete: listCheck,
        };
      case 'DELETEMUl_TODO':
        notyf.success("Delete success");
        return {
          ...state,
          todos: state.todos.filter((item:any)=> state.delete.filter((item:any)=>item.act !== true).some((index:any)=> index.id===item.id)),
          delete:state.delete.filter((item:any)=>item.act !== true),
        };
      default:
        throw new Error("Error");
    }
}
export {initState}
export default reducer