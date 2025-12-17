// app/blog/actions.ts
"use server";
import { prisma } from "@/prisma/utils/prisma";

export async function getPosts() {
    return prisma.user.findMany();
}
