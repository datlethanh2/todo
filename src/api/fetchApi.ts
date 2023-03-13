import {setAccessToken, getAccessToken} from "../util/localStorage"
import {notyf} from "../component/notyfAlert"

const API_URL = process.env.REACT_APP_API_URL

export const postLogin = async (username:string, password:string) => {
  try {
    const response = await fetch(`${API_URL}/user/postLogin`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username:username,password:password}),
    })
    const data = await response.json();
    setAccessToken(data);
  } catch (error) {
     notyf.error(String(error));
  }
}

export const postGoogle = async (email:string) => {
  try {
    const response = await fetch(`${API_URL}/user/postGoogle`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email:email}),
    })
    const data = await response.json();
    console.log(data)
    setAccessToken(data);
  } catch (error) {
    notyf.error(String(error));
  }
}

export const postSave = async (time:string, main:any, index:any) => {
  try {
    await fetch(`${API_URL}/todos/postSave`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${getAccessToken()}`
      },
      body: JSON.stringify({
        time:time, 
        todo:main, 
        progress:index
      }),
    })
    notyf.success("Save success")
  } catch (error) {
    notyf.error(String(error));
  }
}

export const postTodo = async (main:string) => {
  try {
    const response = await fetch(`${API_URL}/todos/postTodo`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${getAccessToken()}`
      },
      body: JSON.stringify({time:main}),
    })
    const data = await response.json();
    return data;
  } catch (error) {
      notyf.error(String(error));
      return []
  }
}