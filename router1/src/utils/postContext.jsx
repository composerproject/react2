import {createContext, useContext, useReducer} from 'react';
import postReducer, {initialState} from '../reducer/postReducer.jsx'


const postContext = createContext()

export const usePostContext = () => {
    return useContext(postContext);
}


const ProvidePostContext = ({children}) => {
    const [state, dispatch] = useReducer(postReducer, initialState);

    return <postContext.Provider value={[state, dispatch]}>
        {children}
    </postContext.Provider>
}

export default ProvidePostContext