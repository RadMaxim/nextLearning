"use client";

import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import {useThemeStore} from "@/app/components/stores/themeStore";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";


const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const mode = useThemeStore((s) => s.mode);
    const theme = createTheme({ palette: { mode } });

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
