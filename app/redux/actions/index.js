/**
 * Created by MilkyWay on 26/08/2017.
 */
const ActionTypes = require('./actionTypes')

export const addTodo = text => ({type: ActionTypes.ADD_TODOS,text})
export const deleteTodo = id => ({type: ActionTypes.REMOVE_TODOS,id})
export const editTodo = (id,text) => ({type: ActionTypes.EDIT_TODO,id,text})
export const completeTodo = id => ({type: ActionTypes.COMPLETE_TODO,id})
export const completeAll = () => ({type: ActionTypes.COMPLETE_ALL})
export const clearCompleted = () => ({type: ActionTypes.CLEAR_COMPLETED})

