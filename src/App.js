import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import SingInPage from "./pages/SignInPage";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));

function App() {
    return (
        <Routes>
            <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
            <Route path="/sign-in" element={<SingInPage></SingInPage>}></Route>
        </Routes>
    );
}

export default App;
