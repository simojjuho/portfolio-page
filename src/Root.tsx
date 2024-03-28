import { Outlet } from "react-router-dom"
import NavBar from "./shared/components/navbar/NavBar"

const Root = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Root