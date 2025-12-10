// RegistrationForm.tsx
"use client"
import React, {useCallback, useState} from "react";

import RegistrationFormDump from "@/app/components/RegistrationForm/RegistrationFormDump";
import {useRegisterUser} from "@/app/service/useRegisterUser";

const RegistrationForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const mutation = useRegisterUser();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    },[setFormData,formData])

    const handleSubmit =useCallback((e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");


        if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
            setError("Все поля обязательны для заполнения");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Пароли не совпадают");
            return;
        }
        mutation.mutate({
            email: formData.email,
            password: formData.password,
        });

        if (mutation.isSuccess) {
            setSuccess("Регистрация прошла успешно!");
        }
        if (mutation.isError) {
            setError("Ошибка при регистрации");
        }

        // Здесь можно добавить отправку данных на сервер
        setSuccess("Регистрация прошла успешно!");
        console.log("Данные формы:", formData);
    },[formData])

    return (
        <RegistrationFormDump formData={formData} handleChange={handleChange} success={success} error={error} handleSubmit={handleSubmit}/>
    );
};

export default RegistrationForm;
