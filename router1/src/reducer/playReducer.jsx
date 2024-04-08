
export const initialState = {
    title: '',
    description: '',
    posts: [],
    error: ''
}

const postReducer = (state, action) => {
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

export default postReducer