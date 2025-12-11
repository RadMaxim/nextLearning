import React from "react";
import {Box, Typography} from "@mui/material";

 const Footer: React.FC = () => (
    <Box component="footer" sx={{ py: 2,  backgroundColor: "grey.200", textAlign: "center" }}>
        <Typography variant={"caption"}>
            © 2025 Максим Радчук. Все права защищены.</Typography>
    </Box>
);
export default React.memo(Footer);