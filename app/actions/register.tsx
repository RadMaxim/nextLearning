"use server"
import {prisma} from "@/prisma/utils/prisma";

interface User {

    email: string,
    password: string,
}
export async function registerUser(user: User) {
   const {email, password} = user
    try {
        const users = await prisma.user.create({
            data:{
                email: email,
                password: password,
            }
        })
        console.log(users)
        return users;
    }
    catch (error) {
        console.log(error)
        return {error: error};
    }

}