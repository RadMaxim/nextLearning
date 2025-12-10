"use client"

import React from "react";
import ThemeSlider from "@/app/components/ThemeSlider/ThemeSlider";
import {Box, Typography} from "@mui/material";
import {usePathname} from "next/navigation";
import {match} from 'path-to-regexp'
import ItemNav from "@/app/components/Header/componentsHeader/ItemNav/ItemNav";
import {navigation} from "@/app/components/Header/navigation";


 const Header = () => {

    const location = usePathname()

    return(

    <Box component="header" sx={{height:"4rem", py: 2, backgroundColor: "primary.main", color: "white", textAlign: "center", display:"flex",justifyContent:"space-between", alignItems:"center" }}>
       <Box sx={{flex:2, pl:2, display:"flex", alignItems:"center", justifyContent:"start"}}><Typography variant={"h1"} sx={{fontSize:"2rem"}}>Next.js</Typography></Box>
        <Box sx={{flex:8, display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Box sx={{ flexGrow: 1,  display:"flex", alignItems:"center", justifyContent:"center", gap:"3rem" }}>
                {navigation.map((page) => (
                    <ItemNav page={page} key={page.href} isActive = {!!match(page.href) (location)} />
                ))}
            </Box></Box>
        <Box sx={{flex:2, pr:2, display:"flex", justifyContent:"end"}}><ThemeSlider/></Box>
    </Box>
)};
export default React.memo(Header);