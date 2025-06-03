'use client';

import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

const NavBar = () => {
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 shadow-md dark:bg-gray-800">
      <div className="max-w-9xl mx-auto flex flex-nowrap items-center justify-between p-4">
        <Link href="/" className="text-xl font-semibold text-gray-800 dark:text-white">
          Kayra Export
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden inline-flex items-center p-2 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          ☰
        </button>

        {/* Menü İçeriği */}
        <div className={`w-full md:flex md:items-center md:w-auto ${menuOpen ? '' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 md:text-sm md:font-medium">
            {user ? (
              <>
                <li>
                  <Link href="/csr" className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                    Client Page
                  </Link>
                </li>
                <li className="relative">
                  {/* Dropdown Tetikleyici */}
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-100 rounded-md"
                  >
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-gray-800 dark:text-white">{user.name}</span>
                  </button>

                  {/* Dropdown İçeriği */}
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-20">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profil
                      </Link>
                      <Link
                        href="/auth/logout"
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-red-100"
                      >
                        Çıkış
                      </Link>
                    </div>
                  )}
                </li>
              </>
            ) : (
              <li>
                <Link
                  href="/auth/login"
                  className="block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Giriş Yap
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
