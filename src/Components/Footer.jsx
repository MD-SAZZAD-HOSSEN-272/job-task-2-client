import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from '/assets/image3.png'
import Rectangle50 from '/assets/Rectangle50.png'

export default function Footer() {
  return (
    <footer className="bg-[#0b1c0b] text-white py-10">
        <div className="max-w-7xl mx-auto lg:flex justify-between w-full">
            <p className="text-3xl font-semibold mb-2 w-1/2">
            Reach Your Requirement Goals Right on Schedule
          </p>
          <div className="w-1/2 pb-11">
            <p className="text-sm text-gray-400 mb-4 ">
            Sign up, complete your profile, and start browsing projects. Submit
            proposals and communicate with clients to get hired.
          </p>
          <Link
            to="/get-started"
            className="bg-green-500 px-4 py-2 rounded-md inline-block hover:bg-green-600"
          >
            Get Started
          </Link>
          </div>
        </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 border-t border-gray-700 pt-10">
        {/* Left Section */}
        
        <div>
          <img src={logo} alt="Logo" className="h-10 mb-4" />
          
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/become-seller">Become Seller</Link></li>
            <li><Link to="/pro-problems">ProProblems</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/categories/design">Design & Creative</Link></li>
            <li><Link to="/categories/development">Development & IT</Link></li>
            <li><Link to="/categories/music">Music & Audio</Link></li>
            <li><Link to="/categories/programming">Programming & Tech</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/support">Help & Support</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/terms">Terms & Services</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 grid md:grid-cols-2 gap-6">
        {/* Social Media */}
        <div className="flex items-center gap-4">
          <a href="#" className="p-2 bg-green-600 rounded-full hover:bg-green-700">
            <FaFacebook />
          </a>
          <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
            <FaInstagram />
          </a>
          <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
            <FaTwitter />
          </a>
        </div>

        {/* Popular Post */}
        <div className="pt-4 border-t border-gray-700">
          <h3 className="font-semibold text-lg mb-3">Our Popular Post</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex gap-2">
              <img
                src={Rectangle50}
                alt="post"
                className="w-28 h-16 object-cover rounded-md mb-2"
              />
              <div>
                <p className="text-xs text-gray-400 mb-2">November 2, 2024</p>
              <p className="text-sm">Unveils the Best Canadian Cities for Biking</p>
              </div>
            </div>
            <div className="flex gap-2">
              <img
                src={Rectangle50}
                alt="post"
                className="w-28 h-16 object-cover rounded-md mb-2"
              />
              <div>
                <p className="text-xs text-gray-400 mb-2">November 2, 2024</p>
              <p className="text-sm">Unveils the Best Canadian Cities for Biking</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © QuantumEdge Software INC. 2025. All rights reserved.
      </div>
    </footer>
  );
}
