import React, { useContext } from 'react'
import InputTodo from './InputTodo'
import { FormGroup } from '@mui/material'
import ListTodo from './ListTodo'
import { Context } from './context'

const Active = () => {
    const { todos, setTodos } = useContext(Context)
    console.log(todos);
    const dataFilter = todos.filter((todo) => {
        return todo.status === 'active'
    })
    console.log(dataFilter);
    return (
        <>
            <InputTodo />
            <FormGroup>

                <ListTodo dataFilter={dataFilter} setTodos={setTodos} />
            </FormGroup></>
    )
}

export default Active