import { Route, Routes } from 'react-router-dom'

import Login from 'pages/Login'
import Dashboard from 'pages/Dashboard'

const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Login />} />
    </Routes>
  )
}

export default App
