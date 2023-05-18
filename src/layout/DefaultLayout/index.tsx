import { HeaderContainer } from "./styles"
import logo from '../../assets/logo.svg'
import { Outlet } from "react-router-dom"


export function DefaultLayout() {
  return (
    <>
      <HeaderContainer>
        <div className="logo-container">
          <img src={logo} alt="Logo" />
          <h1>Github Blog</h1>
        </div>
      </HeaderContainer>
      <Outlet />
    </>

  )
}