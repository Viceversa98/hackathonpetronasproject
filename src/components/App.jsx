import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import HomePage from "./Home/HomePage";
import Footer from "./Footer/Footer";
import { UserCRUDContextProvider } from "../context/UserCRUDContext";
import RegistationPage from "./Register/RegistrationPage";

function App() {
  return (
    <main className="flex flex-col items-stretch text-center justify-center px-8 lg:px-40 2xl:px-80 bg-slate-200">
      <BrowserRouter>
        <UserCRUDContextProvider>
          <Routes>
            <Route path="/login" exact element={<LoginPage />}></Route>
            <Route path="/" exact element={<HomePage />}></Route>
            <Route path="/register" exact element={<RegistationPage />}></Route>
          </Routes>
        </UserCRUDContextProvider>
      </BrowserRouter>

      <Footer />
    </main>
  );
}

export default App;
