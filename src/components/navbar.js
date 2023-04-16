import Link from 'next/link';
import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import MenuListItem from './menuListItem';
import NormalMenuListItem from './normalMenuListItem';

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const closeMenu = () => {
    setShowMobileMenu(false);
  };

  return (
    <>
      <button
        onClick={() => setShowMobileMenu(showMobileMenu ? false : true)}
        className='fixed top-6 right-6 md:hidden block ml-auto text-2xl z-20'
      >
        <RxHamburgerMenu />
      </button>
      {showMobileMenu ? (
        <nav className='fixed items-center justify-between w-full top-0 p-4 pt-8 bg-indigo-950 bg-opacity-70 z-10'>
          <ul className='flex flex-col gap-4'>
            <MenuListItem closeMenu={closeMenu} to='/'>
              Start
            </MenuListItem>
            <MenuListItem closeMenu={closeMenu} to='/portfolio'>
              Portfolio
            </MenuListItem>
            <a
              download='Linnea-Svensson-cv'
              href='/linnea-svensson-cv.pdf'
              className='border-b-2 pb-2'
            >
              Download CV
            </a>
            <MenuListItem closeMenu={closeMenu} to='/contact'>
              Contact
            </MenuListItem>
            <li>
              <div className='flex gap-6 text-2xl'>
                <Link
                  href='https://github.com/ChasAcademy-Linnea-Svensson'
                  target='_blank'
                >
                  <SiGithub />
                </Link>
                <Link
                  href='https://www.linkedin.com/in/linn%C3%A9a-svensson-76a45520a/'
                  target='_blank'
                >
                  <SiLinkedin />
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <nav className='fixed md:flex items-center justify-between w-full top-0 p-4 bg-transparent hidden z-10 list-none'>
            <NormalMenuListItem to='/'>Linnéa Svensson</NormalMenuListItem>
            <div className='flex gap-14'>
              <ul className='flex gap-4'>
                <NormalMenuListItem to='/'>Start</NormalMenuListItem>
                <NormalMenuListItem to='/portfolio'>
                  Portfolio
                </NormalMenuListItem>
                <a
                  download='Linnea-Svensson-cv'
                  href='/linnea-svensson-cv.pdf'
                  className='hover:text-indigo-400'
                >
                  Download CV
                </a>
                <NormalMenuListItem to='/contact'>Contact</NormalMenuListItem>
              </ul>
              <ul className='flex gap-4 text-2xl'>
                <li>
                  <Link
                    href='https://github.com/ChasAcademy-Linnea-Svensson'
                    target='_blank'
                    className='hover:text-indigo-400'
                  >
                    <SiGithub />
                  </Link>
                </li>
                <li>
                  <Link
                    href='https://www.linkedin.com/in/linn%C3%A9a-svensson-76a45520a/'
                    target='_blank'
                    className='hover:text-indigo-400'
                  >
                    <SiLinkedin />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
