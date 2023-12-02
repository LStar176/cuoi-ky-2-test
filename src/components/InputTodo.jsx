import { Box, Button } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Context } from './context'

const InputTodo = () => {

    const { todos, setTodos } = useContext(Context)
    const [input, setInput] = useState('')

    const inputBoxCSS = {
        borderRadius: '9px',
        border: '1px solid #ccc',
        height: '32px',
        marginRight: '5px'

    }
    const inputButtonCSS = {
        borderRadius: '9px',
        backgroundCoolor: 'primary'
    }


    const handleAdd = () => {
        let data = [...todos]
        data = [...data, {
            id: data.length + 1,
            task: input,
            status: 'active',
            isRemove: false,
        }
        ]
        setTodos(data)
    }


    return (
        <Box>
            <Box component={'input'}
                sx={inputBoxCSS}
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder='add details'
                required
            />
            <Button variant="contained" sx={inputButtonCSS} disableElevation onClick={handleAdd}>Add</Button>
        </Box>
    )
}


export default InputTodo