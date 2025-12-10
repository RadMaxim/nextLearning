import React from "react";
import {Box, Typography} from "@mui/material";

export const Header: React.FC = () => (
    <Box component="header" sx={{ py: 2, backgroundColor: "primary.main", color: "white", textAlign: "center" }}>
        <Typography variant={"h1"} sx={{fontSize:"2rem"}}>Мой сайт на MUI + Next.js</Typography>
    </Box>
);
export default React.memo(Header);