import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlineClose,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FaBlog, FaBookOpen, FaPenNib } from "react-icons/fa";
import {
  MdContactMail,
  MdEvent,
  MdLocalGroceryStore,
  MdShoppingCart,
} from "react-icons/md";
import { Link } from "react-router-dom";
import FirstHeader from "./FirstHeader";
import SubMenu from "./SubMenu";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-slate-800 shadow">
      <FirstHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <nav className="bgThemeColor hidden shadow-md lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <div className="flex space-x-7">
            <Link to="/" className="menuHeader flex items-center">
              <AiFillHome className="mr-1" /> {/* Home icon */}
              হোম
            </Link>

            <Link to="/category" className="menuHeader flex items-center">
              <AiOutlineUnorderedList className="mr-1" />
              বিষয়সমূহ
            </Link>

            <Link to="/authors" className="menuHeader flex items-center">
              <FaPenNib className="mr-1" />
              লেখক
            </Link>

            <Link to="/publishers" className="menuHeader flex items-center">
              <FaBookOpen className="mr-1" />
              প্রকাশক
            </Link>

            <div className="menuHeader flex items-center">
              <SubMenu />
            </div>

            <Link to="/book-fair" className="menuHeader flex items-center">
              <MdEvent className="mr-1" />
              বইমেলা 2024
            </Link>

            <Link to="/pre-order" className="menuHeader flex items-center">
              <MdShoppingCart className="mr-1" />
              প্রি-অর্ডার
            </Link>

            <Link
              to="/islamic-products"
              className="menuHeader flex items-center"
            >
              <MdLocalGroceryStore className="mr-1" />
              ইসলামিক পণ্য
            </Link>

            <Link
              to="/blogList"
              className="flex items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2 text-white transition hover:text-black"
            >
              <FaBlog className="mr-2" />
              ব্লগসমুহ
            </Link>
          </div>

          <div>
            <Link to="/contact" className="menuHeader flex items-center">
              <MdContactMail className="mr-1" />
              যোগাযোগ
            </Link>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-1/2 transform  bg-blue-600 p-6 text-white transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <button
          className="self-end text-2xl"
          onClick={() => setSidebarOpen(false)}
        >
          <AiOutlineClose />
        </button>

        <nav className="mt-8 flex flex-col space-y-4">
          <Link
            to="/"
            className="flex items-center rounded-md bg-gradient-to-r from-blue-500 to-purple-600 p-2 text-white transition duration-200 hover:text-black"
            onClick={() => setSidebarOpen(false)}
          >
            <AiFillHome className="mr-2" />
            হোম
          </Link>

          <Link
            to="/category"
            className="menuHeader flex items-center rounded-md p-2 transition duration-200 hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <AiOutlineUnorderedList className="mr-2" />
            বিষয়সমূহ
          </Link>

          <Link
            to="/authors"
            className="menuHeader flex items-center rounded-md p-2 transition duration-200 hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <FaPenNib className="mr-2" />
            লেখক
          </Link>

          <Link
            to="/publishers"
            className="menuHeader flex items-center rounded-md p-2 transition duration-200 hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <FaBookOpen className="mr-2" />
            প্রকাশক
          </Link>

          <Link
            to="/book-fair"
            className="menuHeader flex items-center rounded-md p-2 transition duration-200 hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <MdEvent className="mr-2" />
            বইমেলা 2024
          </Link>

          <Link
            to="/pre-order"
            className="menuHeader flex items-center rounded-md p-2 transition duration-200 hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <MdShoppingCart className="mr-2" />
            প্রি-অর্ডার
          </Link>

          <Link
            to="/islamic-products"
            className="menuHeader flex items-center rounded-md p-2 transition duration-200 hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <MdLocalGroceryStore className="mr-2" />
            ইসলামিক পণ্য
          </Link>

          <Link
            to="/blogList"
            className="menuHeader flex items-center rounded-md p-2 transition duration-200 hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <FaBlog className="mr-2" />
            ব্লগসমুহ
          </Link>

          <Link
            to="/contact"
            className="menuHeader flex items-center rounded-md p-2 transition duration-200 hover:bg-gray-700"
            onClick={() => setSidebarOpen(false)}
          >
            <MdContactMail className="mr-2" />
            যোগাযোগ
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
