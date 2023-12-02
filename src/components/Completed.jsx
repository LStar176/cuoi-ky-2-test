import React, { useContext } from 'react'
import { Context } from './context'
import { Box, FormGroup, IconButton, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ListTodo from './ListTodo';

const Completed = () => {
    const { todos, setTodos } = useContext(Context)
    const completed = todos.filter(todo => {
        return todo.status === 'completed'
    })

    return (
        <>
            <FormGroup>

                <ListTodo dataFilter={completed} setTodos={setTodos} todos={todos} />
            </FormGroup>
        </>)



}

export default Completed