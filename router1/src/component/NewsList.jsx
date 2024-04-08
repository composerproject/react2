import {useNewsContext} from "../utils/newsContext.jsx";
import NewsItem from './NewsItem.jsx'


const NewsList = () => {

    const [{posts}] = useNewsContext()

    return (
        <>
            {
                posts.length > 0 ?
                    <ul>
                        {
                            posts.map((post) => {
                                return <NewsItem key={post.id} post={post} />
                            })
                        }
                    </ul>
                    :
                    <span>Aucun post à afficher pour le moment.</span>
            }
        </>
    )
}
export default NewsList;