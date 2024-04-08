import {useVideoContext} from "../utils/videoContext.jsx";
import VideoItem from './VideoItem.jsx'


const VideosList = () => {

    const [{posts}] = useVideoContext()

    return (
        <>
            {
                posts.length > 0 ?
                    <ul>
                        {
                            posts.map((post) => {
                                return <VideoItem key={post.id} post={post} />
                            })
                        }
                    </ul>
                    :
                    <span>Aucun post à afficher pour le moment.</span>
            }
        </>
    )
}
export default VideosList;