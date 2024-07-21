import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Main from "./pages/Main"
import Mtavari from "./components/Mtavari"
import GroupMembers from "./components/GroupMembers"
import GroupAbout from "./components/GroupAobout"
import SocialLinks from "./components/SocialLinks"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="main" element={<Main />}>
          <Route path="mtavari" element={<Mtavari />} />
          <Route path="group-members" element={<GroupMembers />} />
          <Route path="social" element={<SocialLinks />} />
          <Route path="group-about" element={<GroupAbout />} />
        </Route>
      </Routes >
    </>
  )
}

export default App
