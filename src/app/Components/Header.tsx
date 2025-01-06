// import React from 'react';
// import Link from 'next/link';

// const Header = () => {
//   return (
//     <div>
//         <header className="text-gray-600 body-font">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
//       <span className="ml-3 text-xl">Haris Altaf Blogs</span>
//     </a>
//     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//       <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
//       <a className="mr-5 hover:text-gray-900">About</a>
//       <a className="mr-5 hover:text-gray-900">Blog</a>
//     </nav>

//   </div>
// </header>

//     </div>
//   )
// }

// export default Header
import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-indigo-400 text-white">
      <div className="container mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo / Title */}
        <Link href="/"
          className="text-2xl font-bold tracking-wide">
            Haris Altaf Blogs
          
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-8">
          <Link href="/"
            className="hover:text-indigo-200 transition">Home
          </Link>
          <Link href="/about"
             className="hover:text-indigo-200 transition">About
          </Link>
          <Link href="/blog"
            className="hover:text-indigo-200 transition">Blog
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
