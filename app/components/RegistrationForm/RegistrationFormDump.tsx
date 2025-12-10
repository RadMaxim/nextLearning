"use client";
import React from "react";
import {
    Box,
    Button,
    TextField,
    Typography,
    Alert
} from "@mui/material";
import { RegistrationFormDumpProps, sxBox } from "@/app/components/RegistrationForm/RegistrationFormDumpProps";
import {fields} from "@/app/components/RegistrationForm/fields";

const RegistrationFormDump: React.FC<RegistrationFormDumpProps> = ({
                                                                       error,
                                                                       success,
                                                                       handleSubmit,
                                                                       handleChange,
                                                                       formData
                                                                   }) => {



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

                    <Box>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Зарегистрироваться
                        </Button>
                    </Box>

                </Box>
            </form>
        </Box>
    );
};

export default React.memo(RegistrationFormDump);
