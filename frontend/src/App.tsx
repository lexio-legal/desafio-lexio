import { Route, Routes } from 'react-router-dom'

import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'

import { Container } from 'components/Container'

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>
    </Container>
  )
}

export default App
