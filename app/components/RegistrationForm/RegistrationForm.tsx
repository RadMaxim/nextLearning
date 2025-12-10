// RegistrationForm.tsx
"use client"
import React, { useState } from "react";
import {
    Box,
    Button,
    TextField,
    Typography,

    Alert
} from "@mui/material";
import {registerUser} from "@/app/actions/register";

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit =async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        const data =  registerUser(formData)
        console.log(data)
        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError("Все поля обязательны для заполнения");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Пароли не совпадают");
            return;
        }

        // Здесь можно добавить отправку данных на сервер
        setSuccess("Регистрация прошла успешно!");
        console.log("Данные формы:", formData);
    };

    return (
        <Box
            sx={{
                maxWidth: 400,
                mx: "auto",
                mt: 5,
                p: 3,
                border: "1px solid #ccc",
                borderRadius: 2,
                boxShadow: 2
            }}
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

export default RegistrationForm;
