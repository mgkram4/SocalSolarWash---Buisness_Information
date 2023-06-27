"use client";

import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Nav({ user }: Session) {
  return (
    <nav className="flex justify-between items-center py-8">
      <Image src="/logo.png" alt="logo" width={250} height={150} />
      <ul>
        {!user && (
          <li>
            <button onClick={() => signIn()}>Sign In</button>
          </li>
        )}
        {user && (
          <li>
            <Image
              src={user?.image as string}
              alt={user.name as string}
              width={48}
              height={48}
              className="rounded-xl"
            />
          </li>
        )}
      </ul>
    </nav>
  );
}
