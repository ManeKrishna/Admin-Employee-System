import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#1e1e1e] text-white py-8 sm:py-10 mt-10">
      <div className="container px-4 sm:px-8 lg:px-40 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 text-center md:text-left">
        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-3 sm:mb-4">Contact Info</h3>
          <p className="mb-2 text-sm sm:text-base">📍 123 Corporate Avenue</p>
          <p className="mb-2 text-sm sm:text-base">Business City, BC 45678</p>
          <p className="mb-2 text-sm sm:text-base">📞 +91 98925 10891</p> 
          <p className="mb-2 text-sm sm:text-base">✉️ contact@corporate.com</p>
        </div>

        {/* Store Hours */}
        <div>
          <h3 className="font-bold text-lg mb-3 sm:mb-4">Office Hours</h3>
          <p className="mb-2 text-sm sm:text-base">Monday - Friday: 9 AM - 6 PM</p>
          <p className="mb-2 text-sm sm:text-base">Saturday: 10 AM - 2 PM</p>
          <p className="mb-2 text-sm sm:text-base">Sunday: Closed</p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-bold text-lg mb-3 sm:mb-4">Follow Us</h3>
          <p className="mb-3 sm:mb-4 text-sm sm:text-base">Stay updated with our <br className="hidden sm:inline" />latest news and updates</p>
          <div className="flex justify-center md:justify-start space-x-4 sm:space-x-6 text-sm sm:text-base">
            <a href="#" className="hover:text-gray-400 transition-colors">Facebook</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gray-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-5 sm:mt-6 border-t border-gray-700 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-gray-400 px-4">
        © {new Date().getFullYear()} Corporate Inc. All rights reserved.
      </div>
    </footer>
  );
}