import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 font-roboto px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and About */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">E-Shop</h2>
          <p>
            Your go-to online store for the latest trends in fashion, electronics, and more!
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
            <li><a href="/product" className="hover:underline">Products</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="/faq" className="hover:underline">FAQ</a></li>
            <li><a href="/returns" className="hover:underline">Returns</a></li>
            <li><a href="/shipping" className="hover:underline">Shipping Info</a></li>
            <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
          <form className="flex flex-col space-y-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md text-black"
            />
            <button className="bg-customOrange-tomato hover:bg-customOrange-tomatohover text-white py-2 rounded-md transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto text-center mt-10 border-t border-gray-200 pt-5">
        <p>&copy; 2024 E-Commerce. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="/facebook" className="hover:text-gray-300">Facebook</a>
          <a href="/twitter" className="hover:text-gray-300">Twitter</a>
          <a href="/instagram" className="hover:text-gray-300">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
