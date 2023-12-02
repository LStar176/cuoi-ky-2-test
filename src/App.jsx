import { Routes, Route, Link } from 'react-router-dom'

// Import Components
import All from './components/All'
import Active from './components/Active'
import Completed from './components/Completed'
import { Box, Button, Container, Divider, Stack } from '@mui/material'

function App() {

  return (
    <>
      <Container >
        <Box sx={{ margin: '0 auto', textAlign: 'center', width: '500px' }}>

          <h1>#todo</h1>
          <Stack flexDirection={"row"} justifyContent={'space-evenly'} >

            <Button component={Link} to='/'>All</Button>
            <Button component={Link} to='/active'>Active</Button>
            <Button component={Link} to='/completed'>Completed</Button>
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
