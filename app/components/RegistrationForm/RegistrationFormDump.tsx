// RegistrationForm.tsx
"use client"
import React from "react";
import {
    Box,
    Button,
    TextField,
    Typography,

    Alert
} from "@mui/material";
import {RegistrationFormDumpProps, sxBox} from "@/app/components/RegistrationForm/RegistrationFormDumpProps";

const RegistrationFormDump: React.FC<RegistrationFormDumpProps> = ({error,success,handleSubmit,handleChange,formData}) => {


    return (
        <Box
            sx={sxBox}
        >
            <Typography variant="h5" component="h1" gutterBottom>
                Регистрация
            </Typography>

            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            {success && <Alert severity="success" sx={{ mb: 2 }}>{success}</Alert>}

            <form onSubmit={handleSubmit}>
                <Box >
                    <Box>
                        <TextField
                            fullWidth
                            label="Имя"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box>
                        <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box>
                        <TextField
                            fullWidth
                            label="Пароль"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box>
                        <TextField
                            fullWidth
                            label="Подтверждение пароля"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Зарегистрироваться
                        </Button>
                    </Box>
                </Box>
            </form>
        </Box>
    );
};

export default React.memo(RegistrationFormDump);
