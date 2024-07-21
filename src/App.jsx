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
        <Route path="main" element={<Main />} />
        <Route path="main/*" element={<Main />}>
          <Route index element={<Mtavari />}></Route>
          <Route path="mtavari" element={<Mtavari />}></Route>
          <Route path="group-members" element={<GroupMembers />}></Route>
          <Route path="social" element={<SocialLinks />}></Route>
          <Route path="group-about" element={<GroupAbout />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
