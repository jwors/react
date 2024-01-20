import { Link, Outlet } from 'react-router-dom'
import './index.css'
const Layout: React.FC = () => {
  return (
    <div>
      {
        <nav>
          <ul className="layoutHeader">
            <li>
              <Link to={'/'}>home</Link>
            </li>
            <li>
              <Link to={'/attempt'}>attempt</Link>
            </li>
            <li>
              <Link to={'/asyncState'}>attempt</Link>
            </li>
            <li>
              <Link to={'/hoc'}>hoc</Link>
            </li>
            <li>
              <Link to={'/xState'}>xState</Link>
            </li>
          </ul>
        </nav>
      }
      <div className="routerViweContainer">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
