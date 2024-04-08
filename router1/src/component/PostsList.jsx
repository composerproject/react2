import {usePostContext} from "../utils/postContext.jsx";
import PostItem from './PostItem.jsx'


const PostsList = () => {

    const [{posts}] = usePostContext()

    return (
        <>
            {
                posts.length > 0 ?
                    <ul>
                        {
                            posts.map((post) => {
                                return <PostItem key={post.id} post={post} />
                            })
                        }
                    </ul>
                    :
                    <span>Aucun post à afficher pour le moment.</span>
            }
        </>
    )
}
export default PostsList;