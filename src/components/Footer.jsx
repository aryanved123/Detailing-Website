function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">GLOSSLAB Detailing</h3>
          <p className="text-sm text-gray-400">
            Based in Markham, Ontario – providing top-tier interior and exterior car detailing to make your ride shine.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-2">Contact</h4>
          <p className="text-sm">glosslabdetailing@gmail.com</p>
          <p className="text-sm">(437) 993-7776</p>
          <p className="text-sm mt-1">Markham, ON</p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} GLOSSLAB Detailing. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
