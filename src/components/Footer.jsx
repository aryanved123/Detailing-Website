function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 py-10 select-none">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2 select-none">GLOSSLAB Detailing</h3>
          <p className="text-sm text-gray-400 select-none">
            Based in Markham, Ontario – providing top-tier interior and exterior car detailing to make your ride shine.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2 select-none">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#home" className="hover:text-white select-none">Home</a></li>
            <li><a href="#about" className="hover:text-white select-none">About</a></li>
            <li><a href="#services" className="hover:text-white select-none">Services</a></li>
            <li><a href="#contact" className="hover:text-white select-none">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2 select-none">Contact</h4>
          <p className="text-sm select-none">glosslabs1@gmail.com</p>
          <p className="text-sm select-none">(437) 993-7776</p>
          <p className="text-sm mt-1 select-none">Markham, ON</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4 select-none">
        &copy; {new Date().getFullYear()} GLOSSLAB Detailing. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
