// ./app/components/ClientLayout.tsx
"use client";

import React from "react";
import {ThemeProvider, createTheme, CssBaseline} from "@mui/material";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import {useThemeStore} from "@/app/components/stores/themeStore";






const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const mode = useThemeStore((s) => s.mode);
    const theme = createTheme({
        palette: {
            mode,
        },
    });

    return (
        <html lang="ru">
        <body >
        <ThemeProvider theme={theme}>


            <CssBaseline />
            <Header />

                {children}


            <Footer />


        </ThemeProvider>
        </body>
        </html>
    );
};

export default ClientLayout;
