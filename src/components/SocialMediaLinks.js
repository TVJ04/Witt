// components/SocialMediaLinks.js
import React from 'eact';

const SocialMediaLinks = () => {
  return (
    <ul className="flex justify-center mb-4">
      <li className="mr-4">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src="/instagram-logo.png" alt="Instagram" width={24} height={24} />
        </a>
      </li>
      <li className="mr-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src="/facebook-logo.png" alt="Facebook" width={24} height={24} />
        </a>
      </li>
      <li>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
          <img src="/pinterest-logo.png" alt="Pinterest" width={24} height={24} />
        </a>
      </li>
    </ul>
  );
};

export default SocialMediaLinks;