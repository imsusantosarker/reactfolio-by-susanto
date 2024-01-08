import { Outlet } from "react-router-dom"
import { Header } from "../component/Header/Header"

export const Root = () => {
  return (
    <div className="">
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}
