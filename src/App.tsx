import React from "react";

import { AppRouter } from "@Router/AppRouter";

/**
 * This component is the root of the application.
 * 
 * @returns {JSX.Element} The root component.
 */
export const App: React.FC = (): JSX.Element => {
    return (
        <AppRouter />
    )
}
