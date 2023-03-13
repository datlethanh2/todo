import React from 'react';
import {postLogin,postGoogle} from "../api/fetchApi"
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import {styleInput,styleBox} from "../component/styleCss"

export default function TodoList(){

    const [username, setUserName]=React.useState<string>('');
    const [password, setPassWord]=React.useState<string>('');

    const handleGoogleLoginSuccess = async (googleUser: any) => {
      const decodedToken: { [key: string]: any } = jwt_decode(googleUser ? googleUser.credential : ""); 
      postGoogle(decodedToken.email);
      window.location.reload();
    };
    const loginButton = async () => {
      postLogin(username,password)
      window.location.reload();
    };

    const responseGoogle = (response:any) => {
      
    };
    
    return(
        <div
            style={styleBox}
        >
            <h1>TodoListDat</h1>
            <input 
                style={styleInput}
                type="text"
                placeholder="User name..."
                onChange={(event)=>setUserName(event.target.value)}
            />
            <br></br>
            <input 
                type="password"
                placeholder="Password..."
                style={styleInput}
                onChange={(event)=>setPassWord(event.target.value)}
            />
            <br></br>
            <button 
              style={{
                backgroundColor:"white",
                height:'30px',
                width:'326px',
                border:'1px solid gray',
                borderRadius:'5px',
                margin:'4px 0', 
              }}
              onClick={loginButton}
            >
              Login
            </button>
            
            <GoogleLogin
              size="medium" 
              width="326px"
              theme="outline"
              onSuccess={ credentialResponse => {handleGoogleLoginSuccess(credentialResponse)}}
              onError={() => {responseGoogle('Login Failed')}}
            />
            
        </div>
    )
}
