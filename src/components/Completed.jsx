import { useContext } from 'react'
import { Context } from './context'
import { Button, FormGroup, } from '@mui/material'
import ListTodo from './ListTodo';

const Completed = () => {
    const { todos, setTodos, remove, setRemove } = useContext(Context)

    const completed = todos.filter(todo => {
        return todo.status === 'completed'
    })



    return (
        <>
            <FormGroup>

                <ListTodo dataFilter={completed} setTodos={setTodos} todos={todos} />
            </FormGroup>
            {remove && <Button sx={{ color: 'white', backgroundColor: 'red' }}>Delete All</Button>}
        </>)



}

export default Completed