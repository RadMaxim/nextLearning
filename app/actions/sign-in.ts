"use server"
import {signIn} from "@/app/auth/auth";

export async function signInWithEmailAndPassword(email: string, password: string): Promise<void> {
    try {
        const result = await signIn("credentials",{
            email,
            password,
            redirect:false
        })
        return result
    }
    catch (error) {
        console.log("Ошибка авторизации:", error)
        throw error;
    }
}