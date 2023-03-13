import React from 'react'
import Context from "./Context";

export const useStore=()=>{
    const {state, dispatch}=React.useContext(Context);
    return {state, dispatch};
}
