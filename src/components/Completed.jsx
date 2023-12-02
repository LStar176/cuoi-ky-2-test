import React, { useContext } from 'react'
import { Context } from './context'

const Completed = () => {
    const { todos, setTodos } = useContext(Context)
    const completed = todos.filter(todo => {
        return todo.status === 'completed'
    })
    return (
        <>
            {completed.map(todo => {
                <div key={todo.key}>
                    todo.task
                </div>
            })
            }
        </>
    )
}

export default Completed