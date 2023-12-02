import { useContext } from 'react'
import { Context } from './context'
import { FormGroup } from '@mui/material'
import InputTodo from './InputTodo'
import ListTodo from './ListTodo'

const All = () => {

    const { todos, setTodos } = useContext(Context)

    return (
        <>
            <InputTodo />
            <FormGroup>

                <ListTodo dataFilter={todos} setTodos={setTodos} />
            </FormGroup>

        </>
    )
}

export default All