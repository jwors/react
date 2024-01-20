import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import AttemptBranch from './containers/attenotBranch/attemptBranch'
import Home from './Home'
import AsyncState from './containers/asyncSetState/asyncSetState'
import Layout from './components/Layout/layout'
import Hoc from './containers/hoc/hoc'
import AttemptXstate from './containers/useToolKit/attemptXstate'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="attempt" element={<AttemptBranch />} />
      <Route path="asyncState" element={<AsyncState />} />
      <Route path="hoc" element={<Hoc />} />
      <Route path="Xstate" element={<AttemptXstate />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router}></RouterProvider>
}
