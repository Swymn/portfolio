import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "@Components/header/Header";
import { Footer } from "@Components/footer/Footer";

import "./app-router.scss";

export enum AppRoute {
    Home = "/",
    NotFound = "/404"
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
            <main>
                <Routes>
                    <Route path={AppRoute.Home} element={<div>Home</div>} />
                    <Route path={AppRoute.NotFound} element={<div>404</div>} />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </main>
            <Footer />
        </Router>
    )
}
