import React, {useReducer} from 'react'
import Context from "./Context";
import reducer, {initState} from "./reducer";

function StoreProvider({children}:{children: React.ReactNode}){

    const [state, dispatch]=useReducer(reducer, initState)
    
    return(
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export default StoreProvider;