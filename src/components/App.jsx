import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import HomePage from "./Home/HomePage";
import { UserCRUDContextProvider } from "../context/UserCRUDContext";

function App() {
 
  return (
  <BrowserRouter>
  <UserCRUDContextProvider>
  <Routes>
      <Route path="/login" exact element={<LoginPage/>}></Route>
      <Route path="/home" exact element={<HomePage/>}></Route>
    </Routes>
  </UserCRUDContextProvider>
    
  </BrowserRouter>
  )
}

export default App
