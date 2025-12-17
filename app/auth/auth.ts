
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcryptjs from "bcryptjs"
import {PrismaAdapter} from "@auth/prisma-adapter";
import {prisma} from "@/prisma/utils/prisma";
import {getUserFromDb} from "@/prisma/utils/user";
import {signInSchema} from "@/app/schema/zod";

export const { handlers, auth, signOut, signIn } = NextAuth({
    adapter:PrismaAdapter(prisma),
    providers: [
        Credentials({
            name:"credentials",
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {label:"Email",type:"email"},
                password: {label:"Password",type:"password"},
            },
            authorize: async (credentials) => {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email or password is required");
                }

                const { email, password } = await signInSchema.parseAsync(credentials);
                const user = await getUserFromDb(email);

                if (!user) {
                    throw new Error("Пользователь не найден");
                }

                const isPasswordValid = await bcryptjs.compare(password, user.password);
                if (!isPasswordValid) {
                    throw new Error("Неверный пароль");
                }

                return { id: String(user.id), email: user.email };
            }
        }),
    ],
})