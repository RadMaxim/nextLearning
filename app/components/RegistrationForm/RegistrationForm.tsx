// RegistrationForm.tsx
"use client"
import React, {useCallback, useReducer} from "react";

import RegistrationFormDump from "@/app/components/RegistrationForm/RegistrationFormDump";
import {useRegisterUser} from "@/app/service/useRegisterUser";
import {initialState, reducer} from "@/app/components/RegistrationForm/reducerRegistrtion";

const RegistrationForm: React.FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const mutation = useRegisterUser();

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "CHANGE", field: e.target.name, value: e.target.value });
    },[])

    const handleSubmit =useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: "ERROR", message: "" });
        dispatch({ type: "SUCCESS", message: "" });
        const { name, email, password, confirmPassword } = state.formData;

        if (!name || !email || !password || !confirmPassword) {
            dispatch({ type: "ERROR", message: "Все поля обязательны для заполнения" });
            return;
        }

        if (password !== confirmPassword) {
            dispatch({ type: "ERROR", message: "Пароли не совпадают" });
            return;
        }
        mutation.mutate({
            email,
            password,
        },{
            onSuccess: () => {
                dispatch({ type: "SUCCESS", message: "Регистрация прошла успешно!" });
            },
            onError: () => {
                dispatch({ type: "ERROR", message: "Ошибка при регистрации" });
            },
        });

    },[state.formData, mutation])

    return (
        <RegistrationFormDump formData={state.formData} handleChange={handleChange} success={state.success} error={state.error} handleSubmit={handleSubmit}/>
    );
};

export default RegistrationForm;
