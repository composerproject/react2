import {createContext, useContext, useReducer} from 'react';
import newsReducer, {initialState} from '../reducer/newsReducer.jsx'


const newsContext = createContext()

export const useNewsContext = () => {
    return useContext(newsContext);
}


const ProvideNewsContext = ({children}) => {
    const [state, dispatch] = useReducer(newsReducer, initialState);

    return <newsContext.Provider value={[state, dispatch]}>
        {children}
    </newsContext.Provider>
}

export default ProvideNewsContext