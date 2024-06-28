import Head from 'next/head';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../components/icons'; // Ensure this import is present to configure the icons
import LoginForm from './LoginForm';
import React from 'eact';
import SocialMediaLinks from './SocialMediaLinks';

const Layout = ({ children }) => {
  const [isLoginFormVisible, setLoginFormVisible] = useState(false);

  const showLoginForm = () => {
    setLoginFormVisible(true);
  };

  const hideLoginForm = () => {
    setLoginFormVisible(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Witt Personal Organizer</title>
        <meta name="description" content="Witt Personal Organizer Web Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-xl font-bold">Witt</a>
            <a href="#" className="hover:underline">Find designers</a>
            <a href="#" className="hover:underline">Inspiration</a>
            <a href="#" className="hover:underline">Courses</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Go Pro</a>
          </div>
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <input type="text" placeholder="Search..." className="p-2 rounded-md" />
            <button onClick={showLoginForm} className="hover:underline">Log in</button>
            <button onClick={showLoginForm} className="hover:underline">Sign up</button>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-200 h-screen p-4">
      <SocialMediaLinks />
      <p className="text-gray-600 text-sm">Copyright 2023 Your Company Name</p>
    </footer>
      {isLoginFormVisible && <LoginForm onClose={hideLoginForm} />}
    </div>
  );
};

export default Layout;
