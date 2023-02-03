import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRoute'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 需要鉴权的路由 */}
        <Route path="/*" element={
          <AuthRoute>
            <Layout />
          </AuthRoute>
        } />
        {/* 不需要鉴权的路由 */}
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App