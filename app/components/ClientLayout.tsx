// ./app/components/ClientLayout.tsx
"use client";

import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";

const theme = createTheme({
    palette: { mode: "light" },
});

export const Header: React.FC = () => (
    <Box component="header" sx={{ py: 2, backgroundColor: "primary.main", color: "white", textAlign: "center" }}>
        <h1>Мой сайт на MUI + Next.js</h1>
    </Box>
);

export const Footer: React.FC = () => (
    <Box component="footer" sx={{ py: 2, mt: 5, backgroundColor: "grey.200", textAlign: "center" }}>
        © 2025 Максим Радчук. Все права защищены.
    </Box>
);

const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
