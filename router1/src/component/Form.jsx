import Input from './Input.jsx';
import {usePostContext} from '../utils/postContext.jsx'

const Form = () => {

    const [state, dispatch] = usePostContext();

    const handleSubmit = () => {
        if (state.title.trim() !== '' && state.description.trim() !== '') {
            dispatch({
                type: 'addPost'
            })
            return
        }
        dispatch({
            type: 'addError',
            payload: 'Les champs ne peuvent pas être vide'
        })
    }
    console.log(state);

    return (
        <div>
            {
                state.error !== '' && <span style={{color: 'red'}}>{state.error}</span>
             }
            <Input name={'title'} label={'Titre'} />
            <Input name={'description'} label={'description'} />
            <button onClick={handleSubmit}>Valider</button>
        </div>
    )
}

export default Form;