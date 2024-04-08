import {usePostContext} from '../utils/postContext.jsx';

const Input = ({name, label}) => {

    const [state, dispatch] = usePostContext()

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch({
            type: 'changeValue',
            payload: {
                name,
                value
            }
        })
    }

    return (
        <div>
            <label>
                {label} :
                <input type={'text'} value={state[name]} onChange={handleChange} name={name}/>
            </label>
        </div>
    )
}

export default Input;