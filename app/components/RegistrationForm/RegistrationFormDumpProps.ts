import React from "react";

type FormData= {
    name: string
    email: string
    password: string
    confirmPassword: string
}

export interface RegistrationFormDumpProps {
    error: string
    success: string
    handleSubmit:(
        e: React.FormEvent,
    )=> Promise<void>
    formData:FormData
    handleChange:(
        e: React.ChangeEvent<HTMLInputElement>,
    )=> void


}
export const sxBox ={
    maxWidth: 400,
    mx: "auto",
    mt: 5,
    p: 3,
    border: "1px solid #ccc",
    borderRadius: 2,
    boxShadow: 2
}