import { Checkbox, FormControlLabel, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Context } from './context'

const ListTodo = ({ dataFilter, setTodos }) => {

    const data = [...dataFilter]


    const handleStatus = (e, id) => {
        data[id - 1].status = e.target.checked ? 'completed' : 'active'
        setTodos(data)
    }



    return (
        <>
            {data.map((todo) => {
                return (
                    // FormControlLabel on Checkbox 
                    <FormControlLabel key={todo.id}
                        onChange={(e) => handleStatus(e, todo.id)}
                        control={<Checkbox />}
                        label={<Typography
                            variant="p"
                            sx={{
                                color: todo.status === 'completed' ? '#ccc' : 'black',
                                textDecoration: todo.status === 'completed' ? 'line-through' : ''
                            }}
                        >
                            {todo.task}
                        </Typography>} />
                )
            })}
        </>
    )

}

export default ListTodo