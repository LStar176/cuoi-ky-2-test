import { Routes, Route, Link } from 'react-router-dom'

// Import Components
import All from './components/All'
import Active from './components/Active'
import Completed from './components/Completed'
import { Box, Button, Container, Divider, Stack } from '@mui/material'
import { Context } from './components/context'
import { useContext } from 'react'

function App() {
  const { remove, setRemove } = useContext(Context)
  function handleRemove(e) {
    console.log(e.target.name);
    if (e.target.name === 'completed') {
      setRemove(true)
    }
    else {
      setRemove(false)
    }
  }


  return (
    <>
      <Container >
        <Box sx={{ margin: '0 auto', textAlign: 'center', width: '500px' }}>

          <h1>#todo</h1>
          <Stack flexDirection={"row"} justifyContent={'space-evenly'} >

            <Button component={Link} onClick={(e) => handleRemove(e)} to='/'>All</Button>
            <Button component={Link} onClick={(e) => handleRemove(e)} to='/active'>Active</Button>
            <Button name='completed' onClick={(e) => handleRemove(e)} component={Link} to='/completed'>Completed</Button>
          </Stack>
          <Divider sx={{ marginBottom: '10px' }} />
          <Routes>
            <Route path='/' element={<All />} />
            <Route path='/active' element={<Active />} />
            <Route path='/completed' element={<Completed />} />
          </Routes>
        </Box>
      </Container>
    </>
  )
}

export default App
