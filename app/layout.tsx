import React from "react";
import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "Socal Solar Wash",
  description: "Expertise in Solar Panel Cleaning",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch user or perform any other async tasks here

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="mx-8 px-4">
        <Nav />
        {children}
      </body>
    </html>
  );
}
