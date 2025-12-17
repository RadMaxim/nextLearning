"use server"
import {prisma} from "@/prisma/utils/prisma";
import {saltAndHashPassword} from "@/prisma/utils/password";

interface User {

    email: string,
    password: string,
}
export async function registerUser(user: User) {
   const {email, password} = user

    try {

       const pwHash = await saltAndHashPassword(password)
        const users = await prisma.user.create({
            data:{
                email: email,
                password: pwHash,
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