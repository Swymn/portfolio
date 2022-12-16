import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "../components/header/Header";

import "./app-router.scss";

export enum AppRoute {
    Home = "/",
}

/**
 * This component is the rooter of the application.
 * 
 * @returns {JSX.Element} The rooter component.
 */
export const AppRouter = (): JSX.Element => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path={AppRoute.Home} element={<div>Home</div>} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </Router>
    )
}
