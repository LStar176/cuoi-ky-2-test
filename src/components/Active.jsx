import React, { useContext } from 'react'
import InputTodo from './InputTodo'
import { FormGroup } from '@mui/material'
import ListTodo from './ListTodo'
import { Context } from './context'

const Active = () => {
    const { todos, setTodos } = useContext(Context)
<<<<<<< HEAD
    const dataFilter = todos.filter((todo) => {
        return todo.status === 'active'
    })


=======
    console.log(todos);
    const dataFilter = todos.filter((todo) => {
        return todo.status === 'active'
    })
    console.log(dataFilter);
>>>>>>> e6c08350431b48ff9b98acfab65405f265d31a09
    return (
        <>
            <InputTodo />
            <FormGroup>

                <ListTodo dataFilter={dataFilter} setTodos={setTodos} />
            </FormGroup></>
    )
}

export default Active