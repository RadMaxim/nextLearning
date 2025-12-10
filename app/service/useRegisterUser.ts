"use client";

// hooks/useRegisterUser.ts
import { useMutation } from "react-query";
import { registerUser } from "@/app/actions/register";

export function useRegisterUser() {
    const mutation = useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            console.log("Пользователь создан:", data);
        },
        onError: (err) => {
            console.error("Ошибка при регистрации:", err);
        },
    });

    return mutation;
}
