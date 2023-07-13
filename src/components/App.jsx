import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import HomePage from "./Home/HomePage";
import Footer from "./Footer/Footer";
import { UserCRUDContextProvider } from "../context/UserCRUDContext";
import RegistationPage from "./Register/RegistrationPage";
import InvitationPage from "./Invitation/InvitationPage";
import ChecklistPage from "./Checklist/ChecklistPage";
import Header from "./Header/Header";

function App() {
  return (
    <main className="flex flex-col items-stretch text-center justify-center px-8 lg:px-40 2xl:px-80 bg-slate-200">
      <BrowserRouter>
        <UserCRUDContextProvider>
        <Header />
          <Routes>
            <Route path="/login" exact element={<LoginPage />}></Route>
            <Route path="/" exact element={<HomePage />}></Route>
            <Route path="/register" exact element={<RegistationPage />}></Route>
            <Route path="/invite" exact element={<InvitationPage />}></Route>
            <Route path="/checklist" exact element={<ChecklistPage />}></Route>
          </Routes>
          <Footer />
        </UserCRUDContextProvider>
      </BrowserRouter>

      
    </main>
  );
}

export default App;
