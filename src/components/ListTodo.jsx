import { Checkbox, FormControlLabel, Typography } from '@mui/material'

const ListTodo = ({ dataFilter, setTodos, todos }) => {

    const data = [...dataFilter]
    const todosNew = [...todos]

    const handleStatus = (e, id) => {
        todosNew[id - 1].status = e.target.checked ? 'completed' : 'active'
        setTodos(todosNew)
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