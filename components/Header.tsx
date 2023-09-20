import Link from "next/link";
import Image from "next/image";
import  logo  from '../app/logo.svg'
import React, { useState } from "react";
import { BsList, BsX } from "react-icons/bs";

const styles = {
  navLinks:
    "cursor-pointer ml-10 border-b border-white hover:border-[#0D6EFD] text-m font-medium",
  navMobile:
    "py-4 hover:underline hover:decoration-[#0D6EFD] text-black font-medium",
};

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className="w-full shadow-xl">
        {/* Desktop Menu */}
        <div
          className={`flex items-center justify-between h-full px-4 w-full ${
            menuOpen ? "hidden" : "block sm:flex"
          }`}
        >
          <Link href="/">
            <Image
              src={logo}
              alt=""
              width={235}
              height={70}
              className="cursor-pointer"
            />
          </Link>
          <div className="hidden sm:flex">
            <ul className="flex">
              <li className={styles.navLinks}>
                <Link href="/Dashboard">Dashboard</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/tambah_database">Tambah Database</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/data_masyarakat">Data Masyarakat</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/rekapitulasi">Rekapitulasi</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/data_volunteer">Data LO/Volunteer</Link>
              </li>
            </ul>
          </div>
          {/* Mobile Menu Icon */}
          <div className="sm:hidden cursor-pointer" onClick={toggleMenu}>
            {menuOpen ? (
              <BsX className="h-8 w-8 text-[#0D6EFD]" />
            ) : (
              <BsList className="h-8 w-8 text-[#0D6EFD]" />
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-0 right-0 w-[75%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500">
            <div className="flex w-full items-center justify-end">
              <div className="cursor-pointer" onClick={toggleMenu}>
                <BsX className="h-8 w-8 text-[#0D6EFD]" />
              </div>
            </div>
            {/* Mobile Menu Links */}
            <div className="flex-col py-4">
              <ul>
                <li className={styles.navMobile}>
                  <Link href="/Dashboard">Dashboard</Link>
                </li>
                <li className={styles.navMobile}>
                  <Link href="/tambah_database">Tambah Database</Link>
                </li>
                <li className={styles.navMobile}>
                  <Link href="/data_masyarakat">Data Masyarakat</Link>
                </li>
                <li className={styles.navMobile}>
                  <Link href="/rekapitulasi">Rekapitulasi</Link>
                </li>
                <li className={styles.navMobile}>
                  <Link href="/data_volunteer">Data LO/Volunteer</Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
