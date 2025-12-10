"use client"


import RootLayout from "@/app/layout";
import RegistrationForm from "@/app/components/RegistrationForm/RegistrationForm";

export default function Home() {
  return (
      <html lang="en">
      <body>
      <RootLayout>
   <RegistrationForm/>
      </RootLayout>
      </body>
      </html>
  );
}
