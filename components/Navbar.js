// components/Navbar.js

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px justify-evenly text-[18px] uppercase">
        <li className="me-2">
            <Link href="#aboutCourse" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Home</Link>
        </li>
        <li>
            <Link href="#aboutInstructor" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Instructor</Link>
        </li>
        <li>
            <Link href="#testimonial" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">review</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
