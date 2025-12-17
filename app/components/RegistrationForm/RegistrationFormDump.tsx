"use client";
import React from "react";
import {
    Box,
    TextField,
    Typography,
    Alert
} from "@mui/material";
import { signIn } from "next-auth/react";
import {RegistrationFormDumpProps, sxBox} from "@/app/components/RegistrationForm/RegistrationFormDumpProps";
import {fields} from "@/app/components/RegistrationForm/fields";
import {Button} from "@/shared/components/ui/button";

const RegistrationFormDump: React.FC<RegistrationFormDumpProps> = ({
                                                                       error,
                                                                       success,
                                                                       handleSubmit,
                                                                       handleChange,
                                                                       formData
                                                                   }) => {

    const handleLogIn = async () => {
        const res = await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false,
        });
        console.log(res);
        if (res?.error) {
            // обработка ошибки
            console.error("Ошибка авторизации:", res.error);
        }
    };

    return (
        <Box sx={sxBox}>
            <Typography variant="h5" component="h1" gutterBottom>
                Регистрация
            </Typography>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

            <form onSubmit={handleSubmit}>
                <Box>
                    {fields.map(({ label, name, type }) => (
                        <Box key={name} sx={{ mb: 2 }}>
                            <TextField
                                fullWidth
                                label={label}
                                name={name}
                                type={type}
                                value={(formData as any)[name]}
                                onChange={handleChange}
                            />
                        </Box>
                    ))}

                    <Box sx={{display: "flex", justifyContent: "space-between"}}>
                        <Button size="lg" variant="black" >
                            Зарегистрироваться
                        </Button>
                        <Button size="lg"  variant="black" onClick={handleLogIn}>Войти</Button>
                    </Box>

                </Box>
            </form>
        </Box>
    );
};

export default React.memo(RegistrationFormDump);
