// ./app/layout.tsx
import "./globals.css"
import {SessionProvider} from "next-auth/react";
import {auth} from "@/app/auth/auth";
import ClientLayout from "@/app/components/ClientLayout";
import {ThemeProvider} from "@components/theme-provider";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const session = await auth();

    return (
        <html lang="ru" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem={true} disableTransitionOnChange={true}>
                    <SessionProvider session={session}>
                        <ClientLayout>{children}</ClientLayout>
                    </SessionProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
