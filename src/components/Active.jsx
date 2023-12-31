import React, { useContext, useState } from 'react'
import InputTodo from './InputTodo'
import { FormGroup } from '@mui/material'
import ListTodo from './ListTodo'
import { Context } from './context'

const Active = () => {
    const { todos, setTodos } = useContext(Context)
    const dataFilter = todos.filter((todo) => {
        return todo.status === 'active'
    })
    return (
        <>
            <InputTodo />
            <FormGroup>

                <ListTodo dataFilter={dataFilter} setTodos={setTodos} todos={todos} />
            </FormGroup></>
    )
}

export default Active