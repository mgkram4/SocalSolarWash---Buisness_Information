import { useState } from "react";
import { Session } from "next-auth";
import { signOut, signIn } from "next-auth/react";
import Image from "next/image";

export default function Nav({ user }: Session) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menuOpen state
  };

  const handleSignOut = () => {
    signOut(); // Call the signOut function to log out the user
  };

  return (
    <nav className="flex justify-between items-center py-8 mx-8">
      <div className="flex items-center">
        <Image src="/logo.png" alt="logo" width={250} height={150} />
      </div>
      <div className="flex items-center">
        <button
          onClick={toggleMenu}
          className="p-2 ml-3 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-label="Toggle menu"
        >
          <div className="cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </button>
      </div>
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg w-3/5 h-screen-3/5 p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Menu</h2>
              <button
                onClick={toggleMenu}
                className="text-red-500"
                aria-label="Exit"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <ul className="space-y-2">
              <li>
                <button className="text-blue-500">Home</button>
              </li>
              <li>
                <button className="text-blue-500">About</button>
              </li>
              <li>
                <button className="text-blue-500">Contact</button>
              </li>
            </ul>
            {user ? (
              <div className="flex items-center mt-4">
                <Image
                  src={user?.image as string}
                  alt={user.name as string}
                  width={48}
                  height={48}
                  className="rounded-xl"
                />
                <span className="ml-2">{user.name}</span>
                <button
                  onClick={handleSignOut}
                  className="ml-4 text-red-500 hover:underline"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => signIn()}
                  className="text-blue-500 hover:underline"
                >
                  Sign In
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
