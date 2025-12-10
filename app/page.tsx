"use client"


import RootLayout from "@/app/layout";
import RegistrationForm from "@/app/components/RegistrationForm/RegistrationForm";
import QueryProvider from "@/app/components/providers/QueryProvider";

export default function Home() {
  return (
      <html lang="en">
      <body>
<QueryProvider>
      <RootLayout>
   <RegistrationForm/>
      </RootLayout>
</QueryProvider>
      </body>
      </html>
  );
}
