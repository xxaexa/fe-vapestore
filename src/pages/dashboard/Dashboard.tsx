
import { Outlet, Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[120px_1fr] lg:gap-8 mr-4">
      <div className="rounded-lg bg-gray-200 h-screen"></div>
      <Outlet />
    </div>
  )
}

export default Dashboard