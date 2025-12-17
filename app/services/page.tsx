"use client"

import {Box} from "@mui/material";
import {CardDemo} from "@/app/services/components/CardDemo";

export default function Home() {
  return (

    <Box sx={{ height: "calc(100vh - 8rem)", display: "flex",alignItems: "center" }}>
        <Box sx={{flex:0.5}}></Box>
        <Box sx={{flex:11}}>
            <CardDemo/>
        </Box>
        <Box sx={{flex:0.5}}></Box>

    </Box>


  );
}
