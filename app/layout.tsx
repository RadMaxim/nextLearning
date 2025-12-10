// ./app/layout.tsx


import ClientLayout from "@/app/components/ClientLayout";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return <ClientLayout>{children}</ClientLayout>;
}
