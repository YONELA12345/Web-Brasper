"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-xl">
      <div className="container">
        {/* Logo START */}
        <Link href="/index-2" className="navbar-brand">
          <Image
            className="light-mode-item navbar-brand-item"
            src="/assets/images/logo.svg"
            alt="logo"
            width={100}
            height={30}
          />
          <Image
            className="dark-mode-item navbar-brand-item"
            src="/assets/images/logo-light.svg"
            alt="logo"
            width={100}
            height={30}
          />
        </Link>
        {/* Logo END */}

        {/* Responsive navbar toggler */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="navbarCollapse"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-animation">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Main navbar START */}
        <div
          className={`navbar-collapse w-100 collapse ${isOpen ? "show" : ""}`}
          id="navbarCollapse"
        >
          {/* Nav Main menu START */}
          <ul className="navbar-nav navbar-nav-scroll mx-auto">
            {/* Nav item 1 Demos */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="demoMenu"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Demos
              </Link>
              <ul className="dropdown-menu" aria-labelledby="demoMenu">
                <li>
                  <Link href="/index-2" className="dropdown-item">
                    Home Default
                  </Link>
                </li>
                <li>
                  <Link href="/index-3" className="dropdown-item">
                    Home Education
                  </Link>
                </li>
                {/* Add more items as needed */}
              </ul>
            </li>
            {/* Nav item 2 Pages */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="pagesMenu"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages
              </Link>
              <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                <li>
                  <Link href="/about" className="dropdown-item">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="dropdown-item">
                    Contact Us
                  </Link>
                </li>
                {/* Add more items as needed */}
              </ul>
            </li>
          </ul>
          {/* Nav Main menu END */}

          {/* Nav Search START */}
          <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
            <div className="nav-item w-100">
              <form className="position-relative">
                <input
                  className="form-control pe-5 bg-transparent"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  className="bg-transparent p-2 position-absolute top-50 end-0 translate-middle-y border-0 text-primary-hover text-reset"
                  type="submit"
                >
                  <i className="fas fa-search fs-6"></i>
                </button>
              </form>
            </div>
          </div>
          {/* Nav Search END */}
        </div>
        {/* Main navbar END */}

        {/* Profile START */}
        <div className="dropdown ms-1 ms-lg-0">
          <Link
            className="avatar avatar-sm p-0"
            href="#"
            id="profileDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <Image
              className="avatar-img rounded-circle"
              src="/assets/images/avatar/01.jpg"
              alt="avatar"
              width={40}
              height={40}
            />
          </Link>
          <ul
            className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
            aria-labelledby="profileDropdown"
          >
            <li className="px-3 mb-3">
              <div className="d-flex align-items-center">
                <div className="avatar me-3">
                  <Image
                    className="avatar-img rounded-circle shadow"
                    src="/assets/images/avatar/01.jpg"
                    alt="avatar"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <span className="h6">Lori Ferguson</span>
                  <p className="small m-0">example@gmail.com</p>
                </div>
              </div>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                <i className="bi bi-person fa-fw me-2"></i>Edit Profile
              </a>
            </li>
            {/* Add more items as needed */}
          </ul>
        </div>
        {/* Profile END */}
      </div>
    </nav>
  );
};

export default Navbar;
