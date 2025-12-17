"use server"

import {signOut} from "@/app/auth/auth";

export async function signOUT() {
    try {
        const res = await signOut({redirect:false})
        console.log(res)
        return res
    }catch(err) {
        console.log("Ошибка авторизации:", err)
        throw err;
    }
}