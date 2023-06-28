import "./globals.css";
import Nav from "./components/Nav";
import { getServerSession } from "next-auth";
import { options } from "@/pages/api/auth/[...nextauth]";

export const metadata = {
  title: "Socal Solar Wash",
  description: "Expertise in Solar Panel Cleaning",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //  fetch user
  const session = await getServerSession(options);
  return (
    <html lang="en">
      <body className="mx-8 px-4">
        <Nav user={session?.user} expires={session?.expires as string} />
        {children}
      </body>
    </html>
  );
}
