import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
      <footer className="bg-[#1e1e1e] text-white py-10">
  <div className="container pl-40 pt-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
    {/* Contact Info */}
    <div>
      <h3 className="font-bold text-lg mb-4">Contact Info</h3>
      <p className="mb-2">📍 123 Corporate Avenue</p>
      <p className="mb-2">Business City, BC 45678</p>
      <p className="mb-2">📞 +91 98925 10891</p> 
      <p className="mb-2">✉️ contact@corporate.com</p>
    </div>

    {/* Store Hours */}
    <div>
      <h3 className="font-bold text-lg mb-4">Office Hours</h3>
      <p className="mb-2">Monday - Friday: 9 AM - 6 PM</p>
      <p className="mb-2">Saturday: 10 AM - 2 PM</p>
      <p className="mb-2">Sunday: Closed</p>
    </div>

    {/* Follow Us */}
    <div>
      <h3 className="font-bold text-lg mb-4">Follow Us</h3>
      <p className="mb-4">Stay updated with our <br />latest news and updates</p>
      <div className="flex justify-center md:justify-start space-x-6">
        <a href="#" className="hover:text-gray-400">Facebook</a>
        <a href="#" className="hover:text-gray-400">Instagram</a>
        <a href="#" className="hover:text-gray-400">LinkedIn</a>
      </div>
    </div>
  </div>

  {/* Bottom Note */}
  <div className="mt-5 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
    © {new Date().getFullYear()} Corporate Inc. All rights reserved.
  </div>
</footer>

    );
  }
  

 