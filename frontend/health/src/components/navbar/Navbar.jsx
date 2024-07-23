import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./navbar.css";
import { currentValue } from "../LoginPage/LoginPage";
console.log(currentValue);

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const openForm = () => {
    setShowForm(true);
    setMenu(false);
  };


  const handleSubmit = () =>{
    currentValue = 0;
  }

  return (
    <div className="fixed w-full z-10 text-white">
      <div>
        <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-[#8dcebf] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <div className=" flex flex-row items-center cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className=" text-2xl font-semibold">Care Sync</h1>
            </Link>
          </div>

          <nav className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Doctors
            </Link>
            <button>
              <a href="/bloodHelp">Blood Help</a>
            </button>
            <button>
              <a href="/connect">Connect</a>
            </button>
            {!currentValue ? (
              <button>
                <a href="/login">Login</a>
              </button>
            ) : (
              <button>
                <form onSubmit={handleSubmit}>
                  <button type='submit'>Logout</button>
                </form>
              </button>
            )}

            <button>
              <a href="/register">Register</a>
            </button>
          </nav>

          <div className="hidden lg:flex">
            <a href="/video">
              <button className="btn-grad-eme" onClick={openForm}>
                Emergency Call
              </button>
            </a>
          </div>

          {/* {showForm && <Contact closeForm={closeForm} />} */}

          <div className=" lg:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={28} onClick={handleChange} />
            ) : (
              <AiOutlineMenu size={28} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 bg-[#8dcebf]`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="doctors"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Doctors
          </Link>
          <Link
            to="blog"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-hoverColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Blog
          </Link>
          <button>
            <a href="/connect">Connect</a>
          </button>
          {!currentValue ? (
              <button>
                <a href="/login">Login</a>
              </button>
            ) : (
              <button>
                <form onSubmit={handleSubmit}>
                <button type='submit' >Logout</button>
                </form>
              </button>
            )}
          <button>
            <a href="/register">Register</a>
          </button>

          <div className=" lg:hidden">
            <a href="/video">
              <button className="btn-grad-eme" onClick={openForm}>
                Emergency Call
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
