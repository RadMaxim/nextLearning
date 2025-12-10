"use client"
import "./globals.css"

import RegistrationForm from "@/app/components/RegistrationForm/RegistrationForm";
import QueryProvider from "@/app/components/providers/QueryProvider";
import {Box} from "@mui/material";

export default function Home() {
  return (
      <html lang="en">
      <body >
<QueryProvider>
    <Box sx={{ height: "calc(100vh - 8rem)" }}>
        <RegistrationForm/>
    </Box>

</QueryProvider>
      </body>
      </html>
  );
}
