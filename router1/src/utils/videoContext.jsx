import {createContext, useContext, useReducer} from 'react';
import videoReducer, {initialState} from '../reducer/videoReducer.jsx'


const videoContext = createContext()

export const useVideoContext = () => {
    return useContext(videoContext);
}


const ProvideVideoContext = ({children}) => {
    const [state, dispatch] = useReducer(videoReducer, initialState);

    return <videoContext.Provider value={[state, dispatch]}>
        {children}
    </videoContext.Provider>
}

export default ProvideVideoContext