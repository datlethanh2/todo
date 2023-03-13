import React from 'react'
import {initState} from "./reducer";

const Context = React.createContext<{ state: any; dispatch: any}>({
    state: initState,
    dispatch: () => undefined,
});

export default Context;