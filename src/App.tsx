import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import { Home, Products, Product, Dashboard, AdminHome, MemberHome } from './pages';

// components
import { ProtectedRoute, ProtectedRole } from './components'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path='/product/:name' element={<Product />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} >
            <Route index element={<ProtectedRole
              admin={<AdminHome />}
              member={<MemberHome />}
            />}
            />
          </Route>
        </Route>


      </Routes>
    </Router>
  )
}

export default App