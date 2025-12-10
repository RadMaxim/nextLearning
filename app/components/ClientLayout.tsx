// ./app/components/ClientLayout.tsx
"use client";

import React from "react";
import {ThemeProvider, createTheme, CssBaseline} from "@mui/material";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import {useThemeStore} from "@/app/store/useThemeStore";






const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const mode = useThemeStore((s) => s.mode);
    const theme = createTheme({
        palette: {
            mode,
        },
    });

    return (
        <ThemeProvider theme={theme}>


            <CssBaseline />
            <Header />

                {children}


            <Footer />


        </ThemeProvider>

    );
};

export default ClientLayout;
