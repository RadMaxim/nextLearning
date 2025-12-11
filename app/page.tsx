"use client"
import "./globals.css"

import RegistrationForm from "@/app/components/RegistrationForm/RegistrationForm";
import QueryProvider from "@/app/components/providers/QueryProvider";
import {Box} from "@mui/material";

export default function Home() {
  return (

<QueryProvider>
    <Box sx={{ height: "calc(100vh - 8rem)", display: "flex",alignItems: "center" }}>
        <Box sx={{flex:0.5}}></Box>
        <Box sx={{flex:11}}>  <RegistrationForm/></Box>
        <Box sx={{flex:0.5}}></Box>

    </Box>

</QueryProvider>

  );
}
