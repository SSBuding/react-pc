import { unstable_HistoryRouter as HistoryRouter, Route, Routes } from 'react-router-dom'
import { AuthRoute } from '@/components/AuthRoute'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import Article from '@/pages/Article'
import Publish from '@/pages/Publish'
import Home from '@/pages/Home'
import { history } from './utils/history'


import '@/App.css'
function App() {
  return (

    <HistoryRouter history={history}>
      <div className='App'>
        <Routes>

          {/* 需要鉴权的路由 */}
          <Route path="/*" element={
            <AuthRoute>
              <Layout />
            </AuthRoute>
          } >
            <Route index element={<Home />} />
            <Route path="article" element={<Article />} />
            <Route path="publish" element={<Publish />} />
          </Route>


          {/* 不需要鉴权的路由 */}
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>

    </HistoryRouter>
  )
}
export default App