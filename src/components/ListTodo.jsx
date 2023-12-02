import { Checkbox, FormControlLabel, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { Context } from './context';
import { useContext } from 'react';


const ListTodo = ({ dataFilter, setTodos, todos }) => {
    const { remove, setRemove } = useContext(Context)
    console.log(remove);


    const data = [...dataFilter]
    const todosNew = [...todos]

    const handleStatus = (e, id) => {
        todosNew[id - 1].status = e.target.checked ? 'completed' : 'active'
        setTodos(todosNew)
    }



    return (
        <>
            {data.map((todo) => {
                return (<div key={todo.id}>
                    {/* FormControlLabel on Checkbox  */}
                    <FormControlLabel
                        onChange={(e) => handleStatus(e, todo.id)}
                        control={<Checkbox checked={todo.status === 'completed'} />}
                        label={<Typography
                            variant="p"
                            sx={{
                                color: todo.status === 'completed' ? '#ccc' : 'black',
                                textDecoration: todo.status === 'completed' ? 'line-through' : ''
                            }}
                        >
                            {todo.task}
                        </Typography>} />
                    {remove && <IconButton><DeleteIcon /></IconButton>}

                </div>
                )
            })}
        </>
    )

}

export default ListTodo