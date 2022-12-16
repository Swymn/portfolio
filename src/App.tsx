import React from "react";

import { AppRouter } from "./router/AppRouter";

/**
 * This component is the root of the application.
 * 
 * @returns {JSX.Element} The root component.
 */
export const App = (): JSX.Element => {
    return (
        <AppRouter />
    )
}
