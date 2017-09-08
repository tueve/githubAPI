const { ADD_TOTO,
        DELETE_TODO,
        EDIT_TODO,
        COMPLETE_TODO,
        COMPLETE_ALL,
        CLEAR_COMPLETED
    }
    = require ('../actions/actionTypes')

const initialState = [
    {
        text: 'text todo',
        completed: false,
        id: 0
    },
    {
        text: 'check redux',
        completed: true,
        id: 1
    }
]

export default function todos(state=initialState,action) {
    switch(action.type) {
        case ADD_TOTO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                    id: state.length
                }
            ];
        case DELETE_TODO:
            return [
                state.filter(item => item.id!==id)
            ];
        case EDIT_TODO:
            return [
                state.map(item=>{
                    if(item.id ===id) {
                        return  item.text= action.text
                    }
                })
            ];
        case COMPLETE_TODO:
            return [
                state.map(item => {if(item.id === id){ item.completed = true }})
            ];
        case COMPLETE_ALL:
            return [
                state.map(item=>item.completed=true)
            ];
        case CLEAR_COMPLETED:
            return [
                {
                    text: '',
                    completed: false,
                    id: 0
                }
            ];
        default:
            return state;
    }
}