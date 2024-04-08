
// export const initialState = {
//     title: '',
//     description: '',
//     posts: [],
//     error: ''
// }
export const initialState = {
    title: '',
    description: '',
    posts: [
        {
            id:0,
            title : 'Kio 2024',
            description : `The 49th Kio tournament in shogi, a prestigious Japanese chess competition, featured a title match between Sota Fujii, the holder, and challenger Takumi Ito. Fujii successfully defended his title with a score of 3.5 to Ito's 0.5. The tournament is part of a series that showcases top-level shogi play, highlighting strategic depth and skill. The Kio tournament, celebrated for its rigorous matches, is a significant achievement in a professional shogi player's career, enhancing their recognition in the sport.`
        },
        {
            id:1,
            title: 'Osho 2024',
            description : `Sota Fujii Ryuo, a 21-year-old shogi prodigy, has once again demonstrated his exceptional prowess in the realm of Japanese chess by clinching his third consecutive Osho title. This victory came after Fujii triumphed over Tatsuya Sugai, a formidable eighth-dan challenger, by securing four straight wins in their seven-game series. The pivotal matches unfolded in Tachikawa City, Tokyo, with the decisive game taking place across two days, Wednesday and Thursday, underscoring the intensity and strategic depth characteristic of high-level shogi competition.`
        }
    ],
    error: ''
}

const newsReducer = (state, action) => {
    switch(action.type) {
        case 'changeValue':
            return {
                ...state,
                [action.payload.name]: action.payload.value,
                error: ''
            }

        case 'addPost':
            return {
                ...state,
                title: '',
                description: '',
                error: '',
                posts: state.posts.concat([{
                    title: state.title,
                    description: state.description,
                    id: Date.now()
                }])
            }

        case 'addError':
            return {
                ...state,
                error: action.payload
            }

        case 'deletePost':
            return {
                ...state,
                posts: state.posts.filter((post) => post.id !== action.payload)
            }

        default:
            return state;
    }
}

export default newsReducer