import {useNewsContext} from '../utils/newsContext.jsx';


const NewsItem = ({post}) => {

    const [_, dispatch] = useNewsContext()

    const handleDelete = () => {
        dispatch({
            type: 'deletePost',
            payload: post.id
        })
    }

    return (
        <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <h5>{post.title}</h5>
            <p>{post.description}</p>
            {/* <button onClick={handleDelete}>X</button> */}
        </li>
    )
}

export default NewsItem