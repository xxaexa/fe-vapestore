
import { Outlet, Link } from 'react-router-dom'
import { Sidebar } from '../../components'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[240px_1fr] lg:gap-8 mr-4">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Dashboard