import {createContext, useContext, useReducer} from 'react';
import statsReducer, {initialState} from '../reducer/statsReducer.jsx'


const statsContext = createContext()

export const useStatsContext = () => {
    return useContext(statsContext);
}


const ProvideStatsContext = ({children}) => {
    const [state, dispatch] = useReducer(statsReducer, initialState);

    return <statsContext.Provider value={[state, dispatch]}>
        {children}
    </statsContext.Provider>
}

export default ProvideStatsContext