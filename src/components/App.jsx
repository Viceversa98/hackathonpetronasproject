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
    <BrowserRouter>
      <UserCRUDContextProvider>
        <Header />
        <main className="flex flex-col items-stretch text-center justify-center px-8 lg:px-40 2xl:px-80 h-screen bg-slate-100">
          <Routes>
            <Route path="/login" exact element={<LoginPage />}></Route>
            <Route path="/" exact element={<HomePage />}></Route>
            <Route path="/register" exact element={<RegistationPage />}></Route>
            <Route path="/invite" exact element={<InvitationPage />}></Route>
            <Route path="/checklist" exact element={<ChecklistPage />}></Route>
          </Routes>
        </main>
        <Footer />
      </UserCRUDContextProvider>
    </BrowserRouter>
  );
}

export default App;
