
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
            id : 0,
            title : 'Règles',
            description : `Vous savez jouer aux échecs et aimeriez apprendre son cousin japonais, le Shogi ?
            Cependant les règles semblent compliqués et les kanjis japonais semblent être un obstacle de taille ?
            Dans cette vidéo vous allez apprendre l'intégralité des règles du Shogi et comment reconnaitre les pièces en 10 minutes ! `
        },
        {
            id: 1,
            title : 'Premiers pas',
            description : `Dans cette 1ere leçon vous allez voir le concept de la valeur des pièces.
            Plus compliqué qu'aux échecs la valeur des pièces c'est une connaissance primordiale avant de pouvoir se lancer dans des sujets plus complexes.`
        }
    ],
    error: ''
}

const videoReducer = (state, action) => {
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

export default videoReducer