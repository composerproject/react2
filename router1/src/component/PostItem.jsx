import {usePostContext} from '../utils/postContext.jsx';
import{ useNavigate } from "react-router-dom";

const PostItem = ({post}) => {

    const [_, dispatch] = usePostContext()
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch({
            type: 'deletePost',
            payload: post.id
        })
    }

    const handleNavigate = () => {
        navigate(`/post/${post.id}`);
    };

    return (
        <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <button onClick={handleNavigate}>{post.title}</button>
            {/* <p>{post.description}</p> */}
            {/* <button onClick={handleDelete}>X</button> */}
            {/* <button onClick={handleNavigate}>Voir plus</button> */}
        </li>
    )
}

export default PostItem